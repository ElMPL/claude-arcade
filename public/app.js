// ClaudeArcade — cliente de la plataforma (catálogo, salas, iframe del juego)
(function () {
  'use strict';
  const $ = s => document.querySelector(s);
  const frame = $('#frame');

  let games = [];
  let filter = 'all';
  let socket = null;
  let room = null;       // estado público de la sala
  let myId = null;
  let current = null;    // { game, ctx }
  let wantGame = null;   // juego elegido desde el catálogo antes de tener sala

  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const store = {
    get: k => { try { return localStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch { /* sin storage */ } },
  };
  const gameById = id => games.find(g => g.id === id);
  const isHost = () => room && room.hostId === myId;

  function show(view) {
    ['viewCatalog', 'viewOnline', 'viewLobby', 'viewAccount'].forEach(id => { $('#' + id).hidden = id !== view; });
    window.scrollTo(0, 0);
  }

  let toastT;
  function toast(text) {
    const t = $('#toast');
    t.textContent = text;
    t.classList.add('show');
    clearTimeout(toastT);
    toastT = setTimeout(() => t.classList.remove('show'), 2600);
  }

  function tile(g, onClick, extraClass) {
    const el = document.createElement('button');
    el.className = 'tile' + (extraClass ? ' ' + extraClass : '');
    el.style.setProperty('--c', g.color);
    el.title = g.description;
    const players = g.mode === 'multi' ? `👥 ${g.minPlayers === g.maxPlayers ? g.minPlayers : g.minPlayers + '–' + g.maxPlayers}` : '👤 1';
    el.innerHTML =
      `<div class="thumb"><img src="${esc(g.thumbnail)}" alt="${esc(g.name)}" loading="lazy"><span class="mode ${g.mode}">${g.mode === 'multi' ? 'ONLINE' : 'SOLO'}</span><span class="play">▶</span></div>` +
      `<div class="meta"><b>${esc(g.name)}</b><small>${players} · ${esc(g.author)}</small><p>${esc(g.description || '')}</p></div>`;
    el.addEventListener('click', onClick);
    return el;
  }

  // ---------- Destacado ----------
  let heroI = 0, heroT = null;
  function renderHero() {
    const h = $('#hero'); if (!games.length) { h.hidden = true; return; }
    const list = games.slice(0, 6), g = list[heroI % list.length];
    const players = g.mode === 'multi' ? `👥 ${g.minPlayers}–${g.maxPlayers} jugadores` : '👤 Un jugador';
    h.style.setProperty('--c', g.color);
    h.innerHTML = `<div class="heroBg" style="background-image:url('${esc(g.thumbnail)}')"></div>
      <div class="heroImg"><img src="${esc(g.thumbnail)}" alt=""></div>
      <div class="heroTxt"><span class="heroTag">⭐ DESTACADO</span><h1>${esc(g.name)}</h1><p>${esc(g.description || '')}</p>
        <div class="heroBtns"><button class="btn primary big" data-hero="play">▶ Jugar</button><span class="heroInfo">${players}</span></div>
        <div class="heroDots">${list.map((x, i) => `<button data-dot="${i}" class="${i === heroI % list.length ? 'on' : ''}" aria-label="${esc(x.name)}"></button>`).join('')}</div></div>`;
    h.hidden = false;
    h.onclick = e => {
      const d = e.target.closest('[data-dot]'); if (d) { heroI = +d.dataset.dot; renderHero(); restartHero(); return; }
      if (e.target.closest('[data-hero]')) onCatalogClick(g);
    };
  }
  function restartHero() { clearInterval(heroT); heroT = setInterval(() => { if (document.hidden || $('#viewCatalog').hidden) return; heroI++; renderHero(); }, 7000); }

  // ---------- Catálogo ----------
  function renderGrid() {
    const grid = $('#grid');
    grid.innerHTML = '';
    const q = ($('#search') && $('#search').value || '').trim().toLowerCase();
    const list = games.filter(g => (filter === 'all' || g.mode === filter) && (!q || (g.name + ' ' + (g.description || '')).toLowerCase().includes(q)));
    if (!list.length) grid.innerHTML = '<p class="empty">Todavía no hay juegos acá. ¡Subí el primero!</p>';
    list.forEach(g => grid.appendChild(tile(g, () => onCatalogClick(g))));
  }

  function onCatalogClick(g) {
    if (g.mode === 'single') return playSolo(g);
    if (room) {
      if (isHost()) socket.emit('room:selectGame', { gameId: g.id });
      else toast('Solo el host elige el juego');
      return show('viewLobby');
    }
    wantGame = g.id;
    show('viewOnline');
    toast(`${g.name} es multijugador: creá o unite a una sala`);
  }

  document.querySelectorAll('.chip').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(c => c.classList.toggle('on', c === b));
    filter = b.dataset.f;
    renderGrid();
  }));

  // ---------- Online ----------
  // id de jugador de esta pestaña: si se corta la conexión, al volver el servidor te devuelve a tu lugar
  function myPid() {
    let p = null; try { p = sessionStorage.getItem('arcade:pid'); } catch { /* sin storage */ }
    if (!p || !/^[A-Za-z0-9_-]{16,64}$/.test(p)) { p = Array.from(crypto.getRandomValues(new Uint8Array(18)), b => 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_'[b & 63]).join(''); try { sessionStorage.setItem('arcade:pid', p); } catch { /* sin storage */ } }
    return p;
  }
  let lostT = null;
  function netBanner(on, txt) {
    let b = document.getElementById('netBanner');
    if (!b) { b = document.createElement('div'); b.id = 'netBanner'; document.body.appendChild(b); }
    b.textContent = txt || '📶 Se cortó la conexión… reconectando'; b.classList.toggle('on', !!on);
  }
  function lostRoom(msg) {
    clearTimeout(lostT); lostT = null; netBanner(false);
    if (!room) return;
    room = null; chatMsgs = []; renderChat(); closeFrame(); renderBadge(); show('viewOnline');
    $('#onlineErr').textContent = msg || 'Se cortó la conexión con la sala. Volvé a entrar.';
  }
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && socket && !socket.connected) socket.connect(); });
  addEventListener('online', () => { if (socket && !socket.connected) socket.connect(); });
  function ensureSocket() {
    if (socket) return socket;
    socket = io({ transports: ['websocket', 'polling'], auth: { pid: myPid() }, reconnectionDelay: 600, reconnectionDelayMax: 4000 });
    socket.on('room:rejoin', ({ me, room: r, game, recovered, chat }) => {
      if (chat) setChat(chat);
      clearTimeout(lostT); lostT = null; netBanner(false);
      myId = me; room = r; renderLobby(); renderBadge && renderBadge();
      if (game) {
        // si el corte fue corto y nada se perdió, el juego sigue; si no, se recarga y le pide el estado al host
        if (current && current.ctx.online && (recovered || game.hostId === myId)) { current.ctx.hostId = game.hostId; toFrame({ kind: 'host', hostId: game.hostId }); }
        else { closeFrame(); startOnline(game); }
        toast('📶 Volviste a la partida');
      } else { if (current && current.ctx.online) closeFrame(); show('viewLobby'); toast('📶 Volviste a la sala'); }
    });
    socket.on('session:replaced', () => {
      try { sessionStorage.removeItem('arcade:pid'); } catch { /* sin storage */ }
      lostRoom('Esta sala se abrió en otra pestaña o dispositivo.');
      socket.auth.pid = myPid(); setTimeout(() => socket.connect(), 300);
    });
    socket.on('game:hostChanged', ({ hostId }) => { if (!current) return; current.ctx.hostId = hostId; toFrame({ kind: 'host', hostId }); });
    socket.on('room:update', r => { chatPeople(r); room = r; renderLobby(); Admin.render(); });
    socket.on('room:chat', m => addChat(m));
    socket.on('game:start', startOnline);
    socket.on('game:end', ({ results }) => {
      closeFrame();
      if (results && results.text) {
        $('#lastResult').textContent = results.text;
        $('#lastResult').hidden = false;
        $('#lastResult').classList.remove('pop'); void $('#lastResult').offsetWidth; $('#lastResult').classList.add('pop');
      }
      if (room) show('viewLobby');
    });
    socket.on('account:update', u => { const before = me ? me.crowns : 0; me = { ...(me || {}), ...u }; renderAccount(); if (u.crowns > before) toast('👑 ¡Corona guardada en tu cuenta! Total: ' + u.crowns); });
    socket.on('relay', m => toFrame({ kind: 'msg', type: m.type, data: m.data, from: m.from, adm: m.adm ? 1 : 0 }));
    socket.on('room:kicked', () => { toast('Un admin te sacó de la sala'); });
    socket.on('connect', () => Admin.reauth());
    socket.on('game:playerLeft', p => {
      if (!current) return;
      current.ctx.players = current.ctx.players.filter(x => x.id !== p.id);
      current.ctx.hostId = p.hostId;
      toFrame({ kind: 'playerLeft', id: p.id, hostId: p.hostId });
    });
    socket.on('disconnect', reason => {
      if (!room) return;
      if (reason === 'io server disconnect') { setTimeout(() => socket.connect(), 500); }
      netBanner(true);
      // el servidor guarda tu lugar un par de minutos; si no vuelve en ese tiempo, se avisa
      clearTimeout(lostT); lostT = setTimeout(() => lostRoom(), 110000);
    });
    socket.io.on('reconnect_attempt', n => { if (room) netBanner(true, n > 3 ? '📶 Sin conexión… seguimos intentando' : undefined); });
    return socket;
  }

  // El nombre es obligatorio para jugar online
  function myName() {
    const input = $('#inName');
    const n = input.value.replace(/[<>&"']/g, '').trim().slice(0, 16);
    if (!n) {
      $('#onlineErr').textContent = 'Poné tu nombre para jugar online';
      input.classList.add('invalid');
      input.focus();
      return null;
    }
    input.classList.remove('invalid');
    if (!me) store.set('arcade:name', n);
    return n;
  }
  $('#inName').addEventListener('input', () => {
    if ($('#inName').value.trim()) { $('#inName').classList.remove('invalid'); $('#onlineErr').textContent = ''; }
  });

  // ---------- Chat de la sala ----------
  let chatMsgs = [];
  const hhmm = t => new Date(t).toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' });
  function chatLine(m) {
    if (m.sys) return `<li class="sys">${esc(m.text)}</li>`;
    const mine = m.id === myId;
    return `<li class="${mine ? 'mine' : ''}"><span class="cav" style="--pc:${esc(m.color || '#7c5cff')}">${esc(m.avatar || '🙂')}</span><div><b>${esc(m.name)}</b><time>${hhmm(m.t)}</time><p>${esc(m.text)}</p></div></li>`;
  }
  function renderChat() {
    const ul = $('#chatLog'); if (!ul) return;
    const atBottom = ul.scrollHeight - ul.scrollTop - ul.clientHeight < 40;
    ul.innerHTML = chatMsgs.length ? chatMsgs.map(chatLine).join('') : '<li class="sys">Todavía no hay mensajes. ¡Saludá!</li>';
    if (atBottom) ul.scrollTop = ul.scrollHeight;
  }
  function setChat(list) { chatMsgs = list.slice(-40); renderChat(); const ul = $('#chatLog'); ul.scrollTop = ul.scrollHeight; }
  function addChat(m) {
    chatMsgs.push(m); if (chatMsgs.length > 60) chatMsgs.shift(); renderChat();
    if (m.id !== myId && !m.sys) { $('#chatLog').scrollTop = $('#chatLog').scrollHeight; if ($('#viewLobby').hidden) toast(`💬 ${m.name}: ${m.text.slice(0, 60)}`); }
  }
  // avisos de quién entra y quién sale
  function chatPeople(r) {
    if (!room || !r || room.code !== r.code) return;
    const was = new Map(room.players.map(p => [p.id, p.name])), now = new Map(r.players.map(p => [p.id, p.name]));
    for (const [id, n] of now) if (!was.has(id)) addChat({ sys: 1, text: `👋 ${n} entró a la sala` });
    for (const [id, n] of was) if (!now.has(id)) addChat({ sys: 1, text: `🚪 ${n} salió de la sala` });
  }
  $('#chatForm').addEventListener('submit', e => {
    e.preventDefault();
    const v = $('#chatIn').value.trim(); if (!v || !socket || !room) return;
    socket.emit('room:chat', v); $('#chatIn').value = '';
  });

  function onJoined(res) {
    if (!res.ok) { $('#onlineErr').textContent = res.error; return; }
    $('#onlineErr').textContent = '';
    myId = res.me;
    room = res.room;
    setChat(res.chat || []);
    if (res.game) { renderLobby(); startOnline(res.game); return; }
    $('#lastResult').hidden = true;
    history.replaceState(null, '', '/?sala=' + room.code);
    if (wantGame && isHost()) socket.emit('room:selectGame', { gameId: wantGame });
    wantGame = null;
    renderLobby();
    show('viewLobby');
  }

  $('#btnCreate').addEventListener('click', () => {
    const name = myName();
    if (name) ensureSocket().emit('room:create', { name, roomName: $('#inRoomName').value.trim(), pass: $('#inRoomPass').value }, onJoined);
  });
  // unirse: si la sala tiene contraseña, aparece el campo para escribirla
  function joinCode(code) {
    const name = myName();
    if (!name) return;
    if (code.length !== 5) { $('#onlineErr').textContent = 'El código tiene 5 letras'; return; }
    const pass = $('#passRow').hidden ? '' : $('#inJoinPass').value;
    ensureSocket().emit('room:join', { code, name, pass }, res => {
      if (!res.ok && res.needPass) {
        $('#inCode').value = code; $('#passRow').hidden = false; $('#onlineErr').textContent = res.error;
        $('#inJoinPass').focus(); return;
      }
      if (res.ok) { $('#passRow').hidden = true; $('#inJoinPass').value = ''; }
      onJoined(res);
    });
  }
  $('#btnJoin').addEventListener('click', () => joinCode($('#inCode').value.trim().toUpperCase()));
  $('#inJoinPass').addEventListener('keydown', e => { if (e.key === 'Enter') $('#btnJoin').click(); });
  $('#inCode').addEventListener('input', () => { $('#passRow').hidden = true; $('#inJoinPass').value = ''; });

  // lista de salas abiertas (se actualiza sola mientras estás en "Jugar online")
  const LOCK = '<svg viewBox="0 0 24 24" class="lock" aria-label="Con contraseña"><path d="M7 10V7a5 5 0 0110 0v3h1.5A1.5 1.5 0 0120 11.5v9a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 014 20.5v-9A1.5 1.5 0 015.5 10zm2.5 0h5V7a2.5 2.5 0 00-5 0z"/></svg>';
  let listTimer = null;
  function refreshRooms() {
    ensureSocket().emit('rooms:list', null, res => {
      const ul = $('#roomList'); if (!res || !res.ok) return;
      if (!res.rooms.length) { ul.innerHTML = '<li class="none">No hay salas abiertas. ¡Creá una!</li>'; return; }
      ul.innerHTML = res.rooms.map(r => `<li class="${r.playing ? 'playing' : ''}" data-code="${r.code}"><div class="rn"><b>${r.locked ? LOCK : ''}${esc(r.name)}</b><small>${r.game ? esc(r.game) : 'Eligiendo juego'} · host ${esc(r.host)}</small></div><span class="rc">${r.n}/${r.max}</span><button class="btn small" ${r.playing || r.n >= r.max ? 'disabled' : ''}>${r.playing ? 'Jugando' : 'Entrar'}</button></li>`).join('');
      ul.querySelectorAll('li[data-code] button').forEach(b => b.addEventListener('click', () => {
        const li = b.closest('li'), code = li.dataset.code;
        $('#passRow').hidden = !li.querySelector('.lock'); $('#inJoinPass').value = '';
        if (li.querySelector('.lock')) { $('#inCode').value = code; $('#onlineErr').textContent = 'Esta sala tiene contraseña'; $('#inJoinPass').focus(); return; }
        joinCode(code);
      }));
    });
  }
  $('#btnRefresh').addEventListener('click', refreshRooms);
  new MutationObserver(() => {
    const on = !$('#viewOnline').hidden;
    if (on && !listTimer) { refreshRooms(); listTimer = setInterval(refreshRooms, 4000); }
    else if (!on && listTimer) { clearInterval(listTimer); listTimer = null; }
  }).observe($('#viewOnline'), { attributes: true, attributeFilter: ['hidden'] });

  // ajustes de la sala (solo el host)
  $('#btnRoomSave').addEventListener('click', () => {
    socket.emit('room:settings', { roomName: $('#setRoomName').value.trim(), pass: $('#setRoomPass').value }, res => {
      if (!res.ok) return toast(res.error);
      $('#setRoomPass').value = ''; toast(room && room.locked ? 'Sala guardada' : 'Sala guardada');
    });
  });
  $('#inName').addEventListener('keydown', e => { if (e.key === 'Enter') ($('#inCode').value.trim() ? $('#btnJoin') : $('#btnCreate')).click(); });
  $('#inCode').addEventListener('keydown', e => { if (e.key === 'Enter') $('#btnJoin').click(); });
  $('#btnOnline').addEventListener('click', () => show(room ? 'viewLobby' : 'viewOnline'));
  $('#roomBadge').addEventListener('click', () => show('viewLobby'));
  document.querySelectorAll('.back').forEach(b => b.addEventListener('click', () => show('viewCatalog')));

  $('#btnLeave').addEventListener('click', () => {
    if (socket) socket.emit('room:leave');
    room = null; chatMsgs = []; renderChat();
    history.replaceState(null, '', '/');
    renderBadge();
    show('viewCatalog');
  });

  $('#btnCopy').addEventListener('click', async () => {
    const link = `${location.origin}/?sala=${room.code}`;
    try { await navigator.clipboard.writeText(link); toast('Link copiado: mandáselo a tus amigos'); }
    catch { toast(link); }
  });

  $('#btnStart').addEventListener('click', () => {
    socket.emit('room:start', null, res => { if (!res.ok) toast(res.error); });
  });

  function renderBadge() {
    const b = $('#roomBadge');
    b.hidden = !room;
    if (room) b.textContent = `Sala ${room.code} · ${room.players.length}`;
  }

  function renderLobby() {
    renderBadge();
    if (!room) return;
    $('#roomCode').textContent = room.code;
    $('#roomName').innerHTML = esc(room.name || '') + (room.locked ? ' <small class="lockTag">con contraseña</small>' : '');
    $('#roomSettings').hidden = !isHost();
    if (document.activeElement !== $('#setRoomName')) $('#setRoomName').value = room.name || '';

    const ul = $('#playerList');
    ul.innerHTML = '';
    [...room.players].sort((a, b) => (b.crowns || 0) - (a.crowns || 0)).forEach(p => {
      const li = document.createElement('li');
      const accTag = p.acc ? ' <small class="accTag" title="Juega con su cuenta">✔</small>' : '';
      const offTag = p.off ? ' <small class="offTag" title="Se le cortó la conexión">📶 volviendo…</small>' : '';
      const crowns = p.crowns ? `<span class="crowns" title="Juegos ganados">👑 ${p.crowns}</span>` : '<span class="crowns zero">👑 0</span>';
      const av = p.acc ? `<span class="miniAv" style="--pc:${esc(p.color || '')}">${esc(p.avatar || '🙂')}</span>` : '';
      li.innerHTML = `<span class="pname">${av}<span class="${p.acc ? 'who' : ''}" ${p.acc ? `data-user="${esc(p.name)}"` : ''}>${esc(p.name)}</span>${accTag}${offTag}${p.id === room.hostId ? ' <small class="host">HOST</small>' : ''}${p.id === myId ? ' <small class="you">VOS</small>' : ''}</span>${crowns}`;
      ul.appendChild(li);
    });

    const host = isHost();
    $('#pickTitle').textContent = host ? 'Elegí un juego' : 'El host está eligiendo el juego';
    const wrap = $('#lobbyGames');
    wrap.innerHTML = '';
    const multi = games.filter(g => g.mode === 'multi');
    if (!multi.length) wrap.innerHTML = '<p class="empty">No hay juegos multijugador todavía.</p>';
    multi.forEach(g => {
      const cls = [g.id === room.gameId ? 'selected' : '', host ? '' : 'locked'].join(' ').trim();
      wrap.appendChild(tile(g, () => { if (host) socket.emit('room:selectGame', { gameId: g.id }); }, cls));
    });

    const g = gameById(room.gameId);
    const n = room.players.length;
    let info;
    let canStart = false;
    if (!g) info = host ? 'Tocá un juego para elegirlo' : 'Esperando que el host elija…';
    else if (n < g.minPlayers) info = `${g.name}: faltan ${g.minPlayers - n} jugador(es)`;
    else if (n > g.maxPlayers) info = `${g.name}: máximo ${g.maxPlayers} jugadores (hay ${n})`;
    else { info = `${g.name} · ${n} jugador(es) listos`; canStart = true; }
    if (room.state === 'playing') info = 'Partida en curso…';
    $('#startInfo').textContent = info;
    $('#btnStart').hidden = !host;
    $('#btnStart').disabled = !canStart || room.state === 'playing';
  }

  // ---------- Juego (iframe) ----------
  function openFrame(game, ctx) {
    current = { game, ctx };
    let src = game.url;
    if (game.external && ctx.online) {
      // Juegos hosteados afuera reciben la info de la sala por query params
      const u = new URL(src);
      u.searchParams.set('arcade_room', ctx.roomCode);
      u.searchParams.set('arcade_player', ctx.me.id);
      u.searchParams.set('arcade_name', ctx.me.name);
      u.searchParams.set('arcade_slot', String(ctx.me.slot));
      u.searchParams.set('arcade_players', String(ctx.players.length));
      u.searchParams.set('arcade_host', ctx.me.id === ctx.hostId ? '1' : '0');
      src = u.toString();
    }
    $('#gameTitle').textContent = game.name;
    $('#gameControls').textContent = game.controls;
    frame.src = src;
    $('#viewGame').hidden = false;
    document.body.classList.add('playing');
    setTimeout(() => frame.focus(), 300);
  }

  function closeFrame() {
    setTimeout(() => Admin.render(), 0);
    if (!current) return;
    current = null;
    frame.src = 'about:blank';
    $('#viewGame').hidden = true;
    document.body.classList.remove('playing');
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
  }

  function frameOrigin() {
    return new URL(current.game.url, location.href).origin;
  }

  function toFrame(msg) {
    if (!current || !frame.contentWindow) return;
    msg.__arcade = 1;
    frame.contentWindow.postMessage(msg, frameOrigin());
  }

  function playSolo(g) {
    const name = store.get('arcade:name') || 'Jugador';
    const me = { id: 'local', name, slot: 0 };
    openFrame(g, { online: false, roomCode: null, gameId: g.id, me, players: [me], hostId: 'local' });
  }

  function startOnline({ gameId, hostId, players }) {
    const g = gameById(gameId);
    if (!g) return toast('Ese juego no existe en esta versión');
    const me = players.find(p => p.id === myId);
    $('#lastResult').hidden = true;
    openFrame(g, { online: true, roomCode: room.code, gameId, me, players, hostId });
  }

  window.addEventListener('message', e => {
    if (!current || e.source !== frame.contentWindow) return;
    const m = e.data;
    if (!m || m.__arcade !== 1) return;
    if (m.kind === 'f7') return Admin.f7();
    if (m.kind === 'adminDefine') { Admin.define(current.game.id, m.list); return; }
    if (m.kind === 'hello') {
      toFrame({ kind: 'init', ctx: current.ctx });
      setTimeout(() => Admin.sync(), 50);
    } else if (m.kind === 'send') {
      if (current.ctx.online && socket) socket.emit('relay', { type: m.type, data: m.data, to: m.to, v: !!m.volatile });
    } else if (m.kind === 'end') {
      if (!current.ctx.online) closeFrame();
      else if (isHost()) socket.emit('room:end', m.results || null);
    }
  });

  $('#btnExit').addEventListener('click', () => {
    if (!current) return;
    if (!current.ctx.online) return closeFrame();
    if (isHost()) {
      if (confirm('¿Terminar la partida para todos y volver al lobby?')) socket.emit('room:end', { text: 'El host terminó la partida' });
    } else if (confirm('¿Salir de la partida? Vas a salir de la sala.')) {
      closeFrame();
      $('#btnLeave').click();
    }
  });

  $('#btnFull').addEventListener('click', () => {
    const el = $('#viewGame');
    if (document.fullscreenElement) document.exitFullscreen();
    else if (el.requestFullscreen) el.requestFullscreen().catch(() => {});
  });

  // ---------- Modo admin (oculto: F7 + código) ----------
  const Admin = (() => {
    const ss = { get: k => { try { return sessionStorage.getItem(k); } catch { return null; } }, set: (k, v) => { try { v == null ? sessionStorage.removeItem(k) : sessionStorage.setItem(k, v); } catch { } } };
    let on = false, defs = {}, open = false;
    const vals = id => { try { return JSON.parse(ss.get('arcade:adm:' + id) || '{}'); } catch { return {}; } };
    const panel = document.createElement('div'); panel.id = 'admPanel'; panel.hidden = true;
    document.body.append(panel);
    // sin código: el servidor decide según la cuenta con la que entraste; para el resto F7 no hace nada
    function f7() {
      if (!(me && me.admin)) return;
      const go = () => { open = !open; render(); if (!open && current) frame.focus(); };
      if (on) return go();
      ensureSocket().emit('admin:auth', {}, r => { on = !!(r && r.ok); if (on) { toast('🛠 Modo admin'); sync(); go(); } });
    }
    function reauth() { if (!(me && me.admin) || !socket) { if (on) { on = false; open = false; render(); sync(); } return; } socket.emit('admin:auth', {}, r => { on = !!(r && r.ok); render(); sync(); }); }
    function sync() { if (current) toFrame({ kind: 'admin', active: on, values: on ? vals(current.game.id) : {} }); }
    function define(id, list) { defs[id] = Array.isArray(list) ? list.slice(0, 24) : []; render(); }
    function act(a, extra = {}) { ensureSocket().emit('admin:action', { act: a, ...extra }, r => { if (r && !r.ok && r.error) toast(r.error); }); }
    function render() {
      if (!on || !open) { panel.hidden = true; return; }
      panel.hidden = false;
      const g = current && current.game, list = g ? (defs[g.id] || []) : [], v = g ? vals(g.id) : {};
      let h = '<div class="admHead"><b>🛠 MODO ADMIN</b><button data-x="close">✕</button></div>';
      if (g) {
        h += `<h5>${esc(g.name)}</h5>`;
        if (!list.length) h += '<p class="admNote">Este juego no tiene trucos todavía.</p>';
        for (const d of list) {
          if (d.type === 'button') h += `<button class="admBtn" data-press="${esc(d.id)}">${esc(d.label)}</button>`;
          else h += `<label class="admTg"><input type="checkbox" data-tg="${esc(d.id)}" ${v[d.id] ? 'checked' : ''}><span>${esc(d.label)}</span>${d.desc ? `<small>${esc(d.desc)}</small>` : ''}</label>`;
        }
      } else h += '<p class="admNote">Abrí un juego para ver sus trucos.</p>';
      if (room) {
        h += '<h5>Sala ' + esc(room.code) + '</h5><div class="admRow">';
        if (room.state === 'playing') h += '<button class="admBtn" data-act="win">🏆 Ganar esta partida</button><button class="admBtn" data-act="end">⏹ Terminar partida</button>';
        else if (room.hostId !== myId) h += '<button class="admBtn" data-act="host">⭐ Hacerme host</button>';
        h += '</div>';
        for (const p of room.players) h += `<div class="admP"><span>${esc(p.name)}${p.id === myId ? ' (vos)' : ''} · 👑${p.crowns || 0}</span><button data-act="crown" data-id="${p.id}" data-d="1">👑+</button><button data-act="crown" data-id="${p.id}" data-d="-1">👑−</button>${p.id !== myId ? `<button data-act="kick" data-id="${p.id}">Echar</button>` : ''}</div>`;
      }
      h += '<button class="admOff" data-x="off">Salir del modo admin</button>';
      panel.innerHTML = h;
    }
    panel.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      if (b.dataset.x === 'close') { open = false; render(); if (current) frame.focus(); }
      else if (b.dataset.x === 'off') { on = false; open = false; render(); sync(); toast('Modo admin desactivado'); }
      else if (b.dataset.press && current) toFrame({ kind: 'adminPress', id: b.dataset.press });
      else if (b.dataset.act) act(b.dataset.act, { id: b.dataset.id, d: +b.dataset.d || 1 });
    });
    panel.addEventListener('change', e => {
      const t = e.target; if (!t.dataset.tg || !current) return;
      const v = vals(current.game.id); v[t.dataset.tg] = t.checked; ss.set('arcade:adm:' + current.game.id, JSON.stringify(v)); sync();
    });
    window.addEventListener('keydown', e => { if (e.key === 'F7') { e.preventDefault(); f7(); } });
    return { f7, define, sync, render, reauth };
  })();

  // ---------- Cuenta ----------
  let me = null, accTab = 'login';
  async function api(path, body) {
    const r = await fetch('/api/account/' + path, body ? { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body), credentials: 'same-origin' } : { credentials: 'same-origin' });
    try { const j = await r.json(); j.status = r.status; return j; } catch { return { ok: false, status: r.status, error: 'Error del servidor' }; }
  }
  function applyName() {
    const inp = $('#inName');
    if (me) { inp.value = me.name; inp.disabled = true; inp.title = 'Jugás con tu cuenta'; }
    else { inp.disabled = false; inp.title = ''; inp.value = store.get('arcade:name') || ''; }
    $('#btnAccount').textContent = me ? `👤 ${me.name} · 👑 ${me.crowns}` : '👤 Iniciar sesión';
  }
  const fmtDate = t => new Date(t).toLocaleString('es-AR', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' });
  const pct = (a, b) => b ? Math.round(100 * a / b) + '%' : '—';
  // cabecera del perfil (la propia y la de otros usan la misma)
  function heroHTML(u) {
    const p = u.profile || {}, st = u.stats || {};
    const played = Math.max(st.played || 0, u.crowns || 0);
    return `<div class="bigAv" style="--pc:${esc(p.color)}">${esc(p.avatar || '🙂')}</div>
      <div><div class="heroName f-${esc(p.font || 'normal')}">${esc(u.name)}</div>
        ${p.title ? `<span class="heroTitle" style="--pc:${esc(p.color)}">${esc(p.title)}</span>` : ''}
        ${p.bio ? `<div class="heroBio">${esc(p.bio)}</div>` : ''}
        <div class="heroMeta">Desde ${new Date(u.created).toLocaleDateString('es-AR')}${p.fav ? ' · ❤️ ' + esc(p.fav) : ''}</div></div>
      <div class="heroStats"><div><b>${u.crowns || 0}</b><small>👑 CORONAS</small></div><div><b>${played}</b><small>PARTIDAS</small></div>
        <div><b>${pct(u.crowns || 0, played)}</b><small>VICTORIAS</small></div><div><b>${st.best || 0}</b><small>MEJOR RACHA</small></div></div>`;
  }
  function setHero(el, u) { el.className = 'card accHero bn-' + ((u.profile && u.profile.banner) || 'aurora'); el.innerHTML = heroHTML(u); }
  function applyName() {
    const inp = $('#inName');
    if (me) { inp.value = me.name; inp.disabled = true; inp.title = 'Jugás con tu cuenta'; }
    else { inp.disabled = false; inp.title = ''; inp.value = store.get('arcade:name') || ''; }
    $('#btnAccount').innerHTML = me ? `${esc((me.profile && me.profile.avatar) || '👤')}<span class="lbl"> ${esc(me.name)} · 👑 ${me.crowns}</span>` : '👤<span class="lbl"> Iniciar sesión</span>';
  }
  function histHTML(list) {
    return (list || []).length ? list.map(h => `<li><span class="cr">👑</span><b>${esc(h.game)}${h.co ? ' <small class="accTag">(compartida)</small>' : ''}</b><small>${esc(h.room || '')}${h.with && h.with.length ? ' · contra ' + h.with.map(esc).join(', ') : ''}</small><time>${fmtDate(h.t)}</time></li>`).join('')
      : '<li class="none">Todavía no ganó ningún juego online.</li>';
  }
  function byGameHTML(bg) { bg = Object.entries(bg || {}).sort((a, b) => b[1] - a[1]); return bg.length ? bg.map(([g, n]) => `<li><span>${esc(g)}</span><span>👑 ${n}</span></li>`).join('') : '<li class="none">Todavía nada</li>'; }
  function renderAccount() {
    applyName();
    if (!me) return;
    setHero($('#accHero'), me);
    const warn = me.admin && me.storage && me.storage !== 'postgres';
    $('#accWarn').hidden = !warn;
    if (warn) $('#accWarn').textContent = '⚠️ (Solo lo ves vos, admin) Las cuentas se guardan en un archivo del servidor. En Render ese disco se borra en cada deploy o reinicio, y con eso se borran todas las cuentas. Para que duren hay que conectar una base Postgres (variable DATABASE_URL).';
    $('#accByGame').innerHTML = byGameHTML(me.byGame);
    $('#accHistory').innerHTML = histHTML(me.history);
    renderEditor();
  }
  // ---------- Editor de perfil ----------
  let opts = null, draft = null;
  async function loadOpts() { if (!opts) { const r = await api('options'); if (r.ok) opts = r; } return opts; }
  function renderEditor() {
    if (!opts || !me) return;
    if (!draft) draft = { ...me.profile };
    const pick = (el, list, key, label) => { el.innerHTML = list.map(v => `<button type="button" data-k="${key}" data-v="${esc(v)}" class="${draft[key] === v ? 'on' : ''} ${key === 'banner' ? 'bn-' + v : ''} ${key === 'font' ? 'f-' + v : ''}" ${key === 'color' ? `style="background:${v}"` : ''} title="${esc(v)}">${label(v)}</button>`).join(''); };
    pick($('#pfAvatars'), opts.AVATARS, 'avatar', v => v);
    pick($('#pfColors'), opts.COLORS, 'color', () => '');
    pick($('#pfBanners'), opts.BANNERS, 'banner', v => v);
    pick($('#pfFonts'), opts.FONTS, 'font', () => 'Abc');
    if (document.activeElement !== $('#pfTitle')) $('#pfTitle').value = draft.title || '';
    if (document.activeElement !== $('#pfBio')) $('#pfBio').value = draft.bio || '';
    $('#pfBioN').textContent = `${($('#pfBio').value || '').length}/${opts.BIO_MAX}`;
    const sel = $('#pfFav'), names = [...new Set((games || []).map(g => g.name))];
    sel.innerHTML = '<option value="">—</option>' + names.map(n => `<option ${draft.fav === n ? 'selected' : ''}>${esc(n)}</option>`).join('');
  }
  const preview = () => setHero($('#accHero'), { ...me, profile: { ...draft, title: $('#pfTitle').value, bio: $('#pfBio').value, fav: $('#pfFav').value } });
  $('#profForm').addEventListener('click', e => {
    const b = e.target.closest('button[data-k]'); if (!b) return;
    draft[b.dataset.k] = b.dataset.v; renderEditor(); preview(); $('#pfMsg').textContent = 'Sin guardar';
  });
  ['#pfTitle', '#pfBio', '#pfFav'].forEach(id => $(id).addEventListener('input', () => { $('#pfBioN').textContent = `${$('#pfBio').value.length}/${opts ? opts.BIO_MAX : 120}`; preview(); $('#pfMsg').textContent = 'Sin guardar'; }));
  $('#profForm').addEventListener('submit', async e => {
    e.preventDefault();
    const body = { avatar: draft.avatar, color: draft.color, banner: draft.banner, font: draft.font, title: $('#pfTitle').value, bio: $('#pfBio').value, fav: $('#pfFav').value };
    $('#pfSave').disabled = true;
    const r = await api('profile', body);
    $('#pfSave').disabled = false;
    if (r.status === 401 || (!r.ok && /sesión/.test(r.error || ''))) return sessionLost();
    if (!r.ok) { $('#pfMsg').textContent = r.error || 'No se pudo guardar'; return; }
    me = r.user; draft = { ...me.profile }; renderAccount(); loadTop();
    $('#pfMsg').textContent = '✔ Guardado';
  });
  $('#pwForm').addEventListener('submit', async e => {
    e.preventDefault();
    const msg = $('#pwMsg');
    if ($('#pwNew').value !== $('#pwNew2').value) { msg.textContent = 'Las contraseñas nuevas no coinciden'; return; }
    const r = await api('password', { old: $('#pwOld').value, pass: $('#pwNew').value });
    if (!r.ok && /sesión se cerró/.test(r.error || '')) return sessionLost();
    msg.textContent = r.ok ? '✔ Contraseña cambiada' : (r.error || 'No se pudo');
    if (r.ok) $('#pwOld').value = $('#pwNew').value = $('#pwNew2').value = '';
  });
  // si el servidor ya no reconoce la sesión (se reinició sin base de datos, venció, etc.)
  function sessionLost() {
    me = null; draft = null; Admin.reauth(); applyName(); show('viewCatalog');
    toast('Tu sesión se cerró. Volvé a iniciar sesión.'); openAccModal('login');
  }
  // ---------- Perfil público ----------
  async function openProfile(name) {
    const r = await api('u/' + encodeURIComponent(name));
    if (!r.ok) return toast(r.error || 'No se encontró el perfil');
    const u = r.user, body = $('#profBody');
    body.innerHTML = `<div class="card accHero"></div><div class="profExtra"><div><h4>Por juego</h4><ul class="byGame">${byGameHTML(u.byGame)}</ul></div><div><h4>Últimas coronas</h4><ul class="hist">${histHTML(u.history)}</ul></div></div>`;
    setHero(body.querySelector('.accHero'), u);
    $('#profModal').hidden = false;
  }
  $('#profClose').addEventListener('click', () => { $('#profModal').hidden = true; });
  $('#profModal').addEventListener('click', e => { if (e.target === $('#profModal')) $('#profModal').hidden = true; });
  document.addEventListener('click', e => { const w = e.target.closest('[data-user]'); if (w) openProfile(w.dataset.user); });
  async function loadTop() {
    const r = await api('top');
    $('#accTop').innerHTML = r.ok && r.top.length ? r.top.map(u => `<li class="${me && u.name === me.name ? 'me' : ''}"><span class="miniAv" style="--pc:${esc(u.color || '')}">${esc(u.avatar || '🙂')}</span><span class="who" data-user="${esc(u.name)}">${esc(u.name)}</span>👑 ${u.crowns}</li>`).join('') : '<li class="none">Sin coronas todavía</li>';
  }
  function openAccModal(tab) {
    accTab = tab || 'login';
    document.querySelectorAll('.tab').forEach(t => t.classList.toggle('on', t.dataset.tab === accTab));
    $('#accPass2Row').hidden = accTab !== 'register';
    $('#accPass').autocomplete = accTab === 'register' ? 'new-password' : 'current-password';
    $('#accSubmit').textContent = accTab === 'register' ? 'Crear cuenta' : 'Entrar';
    $('#accErr').textContent = '';
    $('#accModal').hidden = false; $('#accUser').focus();
  }
  document.querySelectorAll('.tab').forEach(t => t.addEventListener('click', () => openAccModal(t.dataset.tab)));
  $('#accClose').addEventListener('click', () => { $('#accModal').hidden = true; });
  $('#accModal').addEventListener('click', e => { if (e.target === $('#accModal')) $('#accModal').hidden = true; });
  $('#accForm').addEventListener('submit', async e => {
    e.preventDefault();
    const user = $('#accUser').value.trim(), pass = $('#accPass').value;
    if (accTab === 'register' && pass !== $('#accPass2').value) { $('#accErr').textContent = 'Las contraseñas no coinciden'; return; }
    $('#accSubmit').disabled = true;
    const r = await api(accTab, { user, pass });
    $('#accSubmit').disabled = false;
    if (!r.ok) { $('#accErr').textContent = r.error || 'No se pudo'; return; }
    me = r.user; draft = null; $('#accPass').value = $('#accPass2').value = '';
    $('#accModal').hidden = true;
    // la conexión de la sala lee la sesión al conectarse: se reabre (si no estás en una sala)
    if (socket && !room) { socket.disconnect(); socket = null; }
    renderAccount();
    toast(accTab === 'register' ? `¡Bienvenido, ${me.name}!` : `Hola de nuevo, ${me.name}`);
    if (room) toast('Tu cuenta se usa desde la próxima sala en la que entres');
  });
  $('#btnAccount').addEventListener('click', () => {
    if (!me) return openAccModal('login');
    draft = null; show('viewAccount'); renderAccount(); loadTop();
    // se vuelve a pedir la cuenta: si el servidor perdió la sesión, se avisa en vez de mostrar datos viejos
    api('me').then(r => { if (r.ok) { me = r.user; renderAccount(); } else if (r.status !== 500) sessionLost(); }).catch(() => {});
    loadOpts().then(renderEditor);
  });
  $('#btnLogout').addEventListener('click', async () => {
    await api('logout', {});
    me = null; draft = null; Admin.reauth(); if (socket && !room) { socket.disconnect(); socket = null; }
    applyName(); show('viewCatalog'); toast('Cerraste sesión');
  });

  // ---------- Inicio ----------
  async function init() {
    $('#inName').value = store.get('arcade:name') || '';
    try { const r = await api('me'); if (r.ok) me = r.user; } catch { /* sin cuenta */ }
    applyName();
    try {
      games = await (await fetch('/api/games')).json();
    } catch {
      games = [];
      toast('No se pudo cargar el catálogo');
    }
    renderGrid(); renderHero(); restartHero();
    $('#search').addEventListener('input', renderGrid);
    const sala = new URLSearchParams(location.search).get('sala');
    if (sala) {
      $('#inCode').value = sala.toUpperCase().slice(0, 5);
      show('viewOnline');
      if ($('#inName').value) $('#btnJoin').click();
    }
  }
  init();
})();

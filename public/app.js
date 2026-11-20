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
      `<div class="thumb"><img src="${esc(g.thumbnail)}" alt="${esc(g.name)}" loading="lazy"></div>` +
      `<div class="meta"><b>${esc(g.name)}</b><small>${players} · ${esc(g.author)}</small></div>`;
    el.addEventListener('click', onClick);
    return el;
  }

  // ---------- Catálogo ----------
  function renderGrid() {
    const grid = $('#grid');
    grid.innerHTML = '';
    const list = games.filter(g => filter === 'all' || g.mode === filter);
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
  function ensureSocket() {
    if (socket) return socket;
    socket = io({ transports: ['websocket', 'polling'] });
    socket.on('room:update', r => { room = r; renderLobby(); Admin.render(); });
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
    socket.on('account:update', u => { me = u; renderAccount(); toast('👑 ¡Corona guardada en tu cuenta! Total: ' + u.crowns); });
    socket.on('relay', m => toFrame({ kind: 'msg', type: m.type, data: m.data, from: m.from, adm: m.adm ? 1 : 0 }));
    socket.on('room:kicked', () => { toast('Un admin te sacó de la sala'); });
    socket.on('connect', () => Admin.reauth());
    socket.on('game:playerLeft', p => {
      if (!current) return;
      current.ctx.players = current.ctx.players.filter(x => x.id !== p.id);
      current.ctx.hostId = p.hostId;
      toFrame({ kind: 'playerLeft', id: p.id, hostId: p.hostId });
    });
    socket.on('disconnect', () => {
      if (!room) return;
      room = null;
      closeFrame();
      renderBadge();
      show('viewOnline');
      $('#onlineErr').textContent = 'Se cortó la conexión con la sala. Volvé a entrar.';
    });
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

  function onJoined(res) {
    if (!res.ok) { $('#onlineErr').textContent = res.error; return; }
    $('#onlineErr').textContent = '';
    myId = res.me;
    room = res.room;
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
    room = null;
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
      const crowns = p.crowns ? `<span class="crowns" title="Juegos ganados">👑 ${p.crowns}</span>` : '<span class="crowns zero">👑 0</span>';
      li.innerHTML = `<span class="pname">${esc(p.name)}${accTag}${p.id === room.hostId ? ' <small class="host">HOST</small>' : ''}${p.id === myId ? ' <small class="you">VOS</small>' : ''}</span>${crowns}`;
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
    const box = document.createElement('div'); box.id = 'admPrompt'; box.hidden = true;
    box.innerHTML = '<form><input id="admCode" type="password" autocomplete="off" spellcheck="false" placeholder="código"><button>OK</button></form><small id="admMsg"></small>';
    const panel = document.createElement('div'); panel.id = 'admPanel'; panel.hidden = true;
    document.body.append(box, panel);
    box.querySelector('form').addEventListener('submit', e => {
      e.preventDefault();
      const code = $('#admCode').value.trim(); if (!code) return;
      ensureSocket().emit('admin:auth', { code }, res => {
        if (res && res.ok) { ss.set('arcade:admcode', code); on = true; box.hidden = true; $('#admCode').value = ''; toast('🛠 Modo admin activado'); open = true; render(); sync(); }
        else { $('#admMsg').textContent = (res && res.error) || 'Código incorrecto'; box.classList.remove('shake'); void box.offsetWidth; box.classList.add('shake'); }
      });
    });
    box.addEventListener('keydown', e => { if (e.key === 'Escape') box.hidden = true; e.stopPropagation(); });
    function f7() {
      if (!on) { box.hidden = !box.hidden; $('#admMsg').textContent = ''; if (!box.hidden) setTimeout(() => $('#admCode').focus(), 30); else if (current) frame.focus(); return; }
      open = !open; render();
      if (!open && current) frame.focus();
    }
    function reauth() { const c = ss.get('arcade:admcode'); if (c && socket) socket.emit('admin:auth', { code: c }, r => { on = !!(r && r.ok); render(); sync(); }); }
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
      else if (b.dataset.x === 'off') { on = false; open = false; ss.set('arcade:admcode', null); render(); sync(); toast('Modo admin desactivado'); }
      else if (b.dataset.press && current) toFrame({ kind: 'adminPress', id: b.dataset.press });
      else if (b.dataset.act) act(b.dataset.act, { id: b.dataset.id, d: +b.dataset.d || 1 });
    });
    panel.addEventListener('change', e => {
      const t = e.target; if (!t.dataset.tg || !current) return;
      const v = vals(current.game.id); v[t.dataset.tg] = t.checked; ss.set('arcade:adm:' + current.game.id, JSON.stringify(v)); sync();
    });
    window.addEventListener('keydown', e => { if (e.key === 'F7') { e.preventDefault(); f7(); } });
    if (ss.get('arcade:admcode')) { ensureSocket(); }
    return { f7, define, sync, render, reauth };
  })();

  // ---------- Cuenta ----------
  let me = null, accTab = 'login';
  async function api(path, body) {
    const r = await fetch('/api/account/' + path, body ? { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body), credentials: 'same-origin' } : { credentials: 'same-origin' });
    try { return await r.json(); } catch { return { ok: false, error: 'Error del servidor' }; }
  }
  function applyName() {
    const inp = $('#inName');
    if (me) { inp.value = me.name; inp.disabled = true; inp.title = 'Jugás con tu cuenta'; }
    else { inp.disabled = false; inp.title = ''; inp.value = store.get('arcade:name') || ''; }
    $('#btnAccount').textContent = me ? `👤 ${me.name} · 👑 ${me.crowns}` : '👤 Iniciar sesión';
  }
  const fmtDate = t => new Date(t).toLocaleString('es-AR', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' });
  function renderAccount() {
    applyName();
    if (!me) return;
    $('#accName').textContent = me.name;
    $('#accSince').textContent = 'Cuenta creada el ' + new Date(me.created).toLocaleDateString('es-AR');
    $('#accCrowns').textContent = me.crowns;
    const bg = Object.entries(me.byGame || {}).sort((a, b) => b[1] - a[1]);
    $('#accByGame').innerHTML = bg.length ? bg.map(([g, n]) => `<li><span>${esc(g)}</span><span>👑 ${n}</span></li>`).join('') : '<li class="none">Todavía nada</li>';
    $('#accHistory').innerHTML = (me.history || []).length ? me.history.map(h => `<li><span class="cr">👑</span><b>${esc(h.game)}${h.co ? ' <small class="accTag">(compartida)</small>' : ''}</b><small>${esc(h.room || '')}${h.with && h.with.length ? ' · contra ' + h.with.map(esc).join(', ') : ''}</small><time>${fmtDate(h.t)}</time></li>`).join('')
      : '<li class="none">Ganá un juego online para sumar tu primera corona.</li>';
  }
  async function loadTop() {
    const r = await api('top');
    $('#accTop').innerHTML = r.ok && r.top.length ? r.top.map(u => `<li class="${me && u.name === me.name ? 'me' : ''}"><span>${esc(u.name)}</span>👑 ${u.crowns}</li>`).join('') : '<li class="none">Sin coronas todavía</li>';
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
    me = r.user; $('#accPass').value = $('#accPass2').value = '';
    $('#accModal').hidden = true;
    // la conexión de la sala lee la sesión al conectarse: se reabre (si no estás en una sala)
    if (socket && !room) { socket.disconnect(); socket = null; }
    renderAccount();
    toast(accTab === 'register' ? `¡Bienvenido, ${me.name}!` : `Hola de nuevo, ${me.name}`);
    if (room) toast('Tu cuenta se usa desde la próxima sala en la que entres');
  });
  $('#btnAccount').addEventListener('click', () => {
    if (!me) return openAccModal('login');
    renderAccount(); loadTop(); show('viewAccount');
  });
  $('#btnLogout').addEventListener('click', async () => {
    await api('logout', {});
    me = null; if (socket && !room) { socket.disconnect(); socket = null; }
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
    renderGrid();
    const sala = new URLSearchParams(location.search).get('sala');
    if (sala) {
      $('#inCode').value = sala.toUpperCase().slice(0, 5);
      show('viewOnline');
      if ($('#inName').value) $('#btnJoin').click();
    }
  }
  init();
})();

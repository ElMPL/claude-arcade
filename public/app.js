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
    ['viewCatalog', 'viewOnline', 'viewLobby'].forEach(id => { $('#' + id).hidden = id !== view; });
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
    store.set('arcade:name', n);
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
    if (name) ensureSocket().emit('room:create', { name }, onJoined);
  });
  $('#btnJoin').addEventListener('click', () => {
    const name = myName();
    if (!name) return;
    const code = $('#inCode').value.trim().toUpperCase();
    if (code.length !== 5) { $('#onlineErr').textContent = 'El código tiene 5 letras'; return; }
    ensureSocket().emit('room:join', { code, name }, onJoined);
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

    const ul = $('#playerList');
    ul.innerHTML = '';
    [...room.players].sort((a, b) => (b.crowns || 0) - (a.crowns || 0)).forEach(p => {
      const li = document.createElement('li');
      const crowns = p.crowns ? `<span class="crowns" title="Juegos ganados">👑 ${p.crowns}</span>` : '<span class="crowns zero">👑 0</span>';
      li.innerHTML = `<span class="pname">${esc(p.name)}${p.id === room.hostId ? ' <small class="host">HOST</small>' : ''}${p.id === myId ? ' <small class="you">VOS</small>' : ''}</span>${crowns}`;
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

  // ---------- Inicio ----------
  async function init() {
    $('#inName').value = store.get('arcade:name') || '';
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

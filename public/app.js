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
    socket.on('room:update', r => { room = r; renderLobby(); });
    socket.on('game:start', startOnline);
    socket.on('game:end', ({ results }) => {
      closeFrame();
      if (results && results.text) {
        $('#lastResult').textContent = results.text;
        $('#lastResult').hidden = false;
      }
      if (room) show('viewLobby');
    });
    socket.on('relay', m => toFrame({ kind: 'msg', type: m.type, data: m.data, from: m.from }));
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
    room.players.forEach(p => {
      const li = document.createElement('li');
      li.innerHTML = `<span>${p.id === room.hostId ? '👑 ' : ''}${esc(p.name)}</span>${p.id === myId ? '<span class="you">VOS</span>' : ''}`;
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
    if (m.kind === 'hello') {
      toFrame({ kind: 'init', ctx: current.ctx });
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

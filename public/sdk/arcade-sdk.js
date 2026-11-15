/*!
 * ClaudeArcade SDK v1
 * Incluilo en tu juego con:  <script src="/sdk/arcade-sdk.js"></script>
 * (o con la URL completa de la plataforma si tu juego está hosteado afuera)
 *
 * API:
 *   Arcade.ready()            -> Promise<ctx>   ctx = { online, roomCode, gameId, me:{id,name,slot}, players:[...], hostId, isHost }
 *   Arcade.send(type, data, { to, volatile })  manda a los DEMÁS jugadores (no te llega a vos)
 *   Arcade.on(type, (data, fromId) => {})      escucha mensajes
 *   Arcade.off(type, fn)
 *   Arcade.onPlayerLeft(id => {})
 *   Arcade.onHostChanged(newHostId => {})
 *   Arcade.isHost(), Arcade.isOnline(), Arcade.me, Arcade.players, Arcade.ctx
 *   Arcade.end({ winners, text })  termina la partida (solo cuenta si lo llama el host) y vuelve al lobby.
 *                            winners: ids de los ganadores (cada uno suma 1 corona 👑 en la sala). text: opcional.
 *
 * Si abrís el juego directo (sin la plataforma), funciona en modo solo: online=false, 1 jugador.
 */
(function () {
  'use strict';
  if (window.Arcade) return;

  var listeners = {};
  var ctx = null;
  var readyResolve;
  var readyPromise = new Promise(function (r) { readyResolve = r; });
  var inFrame = window.parent && window.parent !== window;

  function emit(type) {
    var args = Array.prototype.slice.call(arguments, 1);
    (listeners[type] || []).slice().forEach(function (fn) {
      try { fn.apply(null, args); } catch (e) { console.error('[Arcade] error en handler de "' + type + '":', e); }
    });
  }
  function post(msg) {
    if (!inFrame) return;
    msg.__arcade = 1;
    window.parent.postMessage(msg, '*');
  }
  function finish(c) {
    if (ctx) return;
    ctx = c;
    ctx.isHost = ctx.me.id === ctx.hostId;
    readyResolve(ctx);
  }
  function soloCtx() {
    var me = { id: 'local', name: 'Jugador', slot: 0 };
    return { online: false, roomCode: null, gameId: null, me: me, players: [me], hostId: 'local' };
  }

  window.addEventListener('message', function (e) {
    if (e.source !== window.parent) return;
    var m = e.data;
    if (!m || m.__arcade !== 1) return;
    if (m.kind === 'init') return finish(m.ctx);
    if (!ctx) return;
    if (m.kind === 'msg') {
      emit(m.type, m.data, m.from);
    } else if (m.kind === 'playerLeft') {
      ctx.players = ctx.players.filter(function (p) { return p.id !== m.id; });
      var changed = m.hostId && m.hostId !== ctx.hostId;
      if (m.hostId) ctx.hostId = m.hostId;
      ctx.isHost = ctx.me.id === ctx.hostId;
      emit('$playerLeft', m.id);
      if (changed) emit('$hostChanged', ctx.hostId);
    }
  });

  if (inFrame) {
    var tries = 0;
    post({ kind: 'hello' });
    var t = setInterval(function () {
      if (ctx || ++tries > 10) {
        clearInterval(t);
        if (!ctx) finish(soloCtx()); // no hay plataforma arriba -> modo solo
        return;
      }
      post({ kind: 'hello' });
    }, 150);
  } else {
    finish(soloCtx());
  }

  window.Arcade = {
    version: 1,
    ready: function () { return readyPromise; },
    get ctx() { return ctx; },
    get me() { return ctx && ctx.me; },
    get players() { return ctx ? ctx.players.slice() : []; },
    isHost: function () { return !!ctx && ctx.isHost; },
    isOnline: function () { return !!ctx && ctx.online; },
    send: function (type, data, opts) {
      if (typeof type !== 'string' || !type || type.charAt(0) === '$' || type.length > 32) {
        throw new Error('[Arcade] type inválido: usá un string corto que no empiece con $');
      }
      if (!ctx || !ctx.online) return;
      opts = opts || {};
      post({ kind: 'send', type: type, data: data, to: opts.to || null, volatile: !!opts.volatile });
    },
    on: function (type, fn) { (listeners[type] = listeners[type] || []).push(fn); },
    off: function (type, fn) { listeners[type] = (listeners[type] || []).filter(function (f) { return f !== fn; }); },
    onPlayerLeft: function (fn) { this.on('$playerLeft', fn); },
    onHostChanged: function (fn) { this.on('$hostChanged', fn); },
    end: function (results) {
      if (!inFrame) { console.log('[Arcade] fin de partida', results); return; }
      post({ kind: 'end', results: results || null });
    }
  };
})();

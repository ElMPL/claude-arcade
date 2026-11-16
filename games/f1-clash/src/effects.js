// Efectos: partículas (humo, polvo, chispas, fuegos artificiales), marcas de frenada,
// escombros de las partes rotas y objetos de pista que se pueden voltear.
import * as THREE from 'three';
import { CAR, speed } from './physics.js';
import { worldVel, setWorldVel } from './world.js';

// ---------- Partículas ----------
export function makeFX(N = 420) {
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(N * 3), col = new Float32Array(N * 3), size = new Float32Array(N), alpha = new Float32Array(N);
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  geo.setAttribute('size', new THREE.BufferAttribute(size, 1)); geo.setAttribute('alpha', new THREE.BufferAttribute(alpha, 1));
  const tex = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d'); const g = x.createRadialGradient(32, 32, 0, 32, 32, 32); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.4, 'rgba(255,255,255,0.55)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c); })();
  const mk = blending => new THREE.ShaderMaterial({
    uniforms: { map: { value: tex } }, transparent: true, depthWrite: false, vertexColors: true, blending,
    vertexShader: 'attribute float size; attribute float alpha; varying vec3 vC; varying float vA; void main(){ vC = color; vA = alpha; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = size * 3.0 * (600.0 / -mv.z); gl_Position = projectionMatrix * mv; }',
    fragmentShader: 'uniform sampler2D map; varying vec3 vC; varying float vA; void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(vC, t.a * vA); }',
  });
  const pts = new THREE.Points(geo, mk(THREE.NormalBlending)); pts.frustumCulled = false;
  // brillantes (chispas, fuegos) con mezcla aditiva
  const geo2 = geo.clone();
  const P = []; for (let i = 0; i < N; i++) P.push({ life: 0 });
  let k = 0;
  return {
    obj: pts,
    emit(x, y, z, vx, vy, vz, r, g, b, s, life, a = 0.4, grav = 0) { const p = P[k]; k = (k + 1) % N; Object.assign(p, { x, y, z, vx, vy, vz, r, g, b, s, life, max: life, a, grav }); },
    update(dt) {
      for (let i = 0; i < N; i++) {
        const p = P[i];
        if (p.life > 0) {
          p.life -= dt; p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
          const drag = Math.pow(0.35, dt); p.vx *= drag; p.vz *= drag; p.vy = p.vy * (p.grav ? 1 : drag) + (p.grav ? -9.8 * p.grav : 0.8) * dt;
          if (p.y < 0.05 && p.grav) { p.y = 0.05; p.vy = -p.vy * 0.3; }
        }
        const a = Math.max(0, p.life / (p.max || 1));
        pos[i * 3] = p.x || 0; pos[i * 3 + 1] = p.life > 0 ? p.y : -999; pos[i * 3 + 2] = p.z || 0;
        col[i * 3] = p.r || 0; col[i * 3 + 1] = p.g || 0; col[i * 3 + 2] = p.b || 0;
        size[i] = p.life > 0 ? p.s * (p.grav ? 1 : 1.9 - a * 0.9) : 0; alpha[i] = a * (p.a || 0.4);
      }
      for (const n of ['position', 'color', 'size', 'alpha']) geo.attributes[n].needsUpdate = true;
    },
  };
}

// ---------- Marcas de frenada ----------
export function makeSkids(scene, MAX = 2400) {
  const pos = new Float32Array(MAX * 6 * 3), al = new Float32Array(MAX * 6);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setAttribute('alpha', new THREE.BufferAttribute(al, 1));
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4,
    vertexShader: 'attribute float alpha; varying float vA; void main(){ vA = alpha; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: 'varying float vA; void main(){ gl_FragColor = vec4(0.04,0.04,0.045, vA); }',
  });
  const mesh = new THREE.Mesh(geo, mat); mesh.frustumCulled = false; scene.add(mesh);
  let k = 0;
  const last = new Map();
  return {
    mesh,
    // marca para la rueda (key) desde su última posición
    add(key, x, z, hx, hz, w, a) {
      const p = last.get(key);
      last.set(key, [x, z]);
      if (!p || a <= 0) return;
      const dx = x - p[0], dz = z - p[1], d = Math.hypot(dx, dz);
      if (d < 0.05 || d > 3) return;
      const nx = -dz / d * w / 2, nz = dx / d * w / 2, y = 0.02;
      const v = [p[0] + nx, y, p[1] + nz, p[0] - nx, y, p[1] - nz, x + nx, y, z + nz, p[0] - nx, y, p[1] - nz, x - nx, y, z - nz, x + nx, y, z + nz];
      pos.set(v, k * 18); for (let q = 0; q < 6; q++) al[k * 6 + q] = Math.min(0.55, a);
      k = (k + 1) % MAX;
      geo.attributes.position.needsUpdate = true; geo.attributes.alpha.needsUpdate = true;
    },
    cut(key) { last.delete(key); },
  };
}

// ---------- Escombros (partes desprendidas) ----------
export function makeDebris(scene) {
  const list = [];
  return {
    list,
    spawn(carMesh, partObj, c, impulse = [0, 0]) {
      carMesh.updateMatrixWorld(true);
      const o = partObj.clone(true); o.visible = true;
      const m = new THREE.Matrix4().copy(partObj.matrixWorld);
      m.decompose(o.position, o.quaternion, o.scale);
      // reubicar el pivote al centro de la pieza
      const box = new THREE.Box3().setFromObject(partObj), ctr = box.getCenter(new THREE.Vector3());
      const holder = new THREE.Group(); holder.position.copy(ctr); scene.add(holder);
      o.position.sub(ctr); holder.add(o);
      o.traverse(n => { if (n.isMesh) n.castShadow = true; });
      const [wx, wz] = worldVel(c);
      const d = { obj: holder, x: ctr.x, y: ctr.y, z: ctr.z, vx: wx * 0.75 + impulse[0] + (Math.random() - 0.5) * 6, vy: 2 + Math.random() * 5, vz: wz * 0.75 + impulse[1] + (Math.random() - 0.5) * 6, ax: (Math.random() - 0.5) * 14, ay: (Math.random() - 0.5) * 14, az: (Math.random() - 0.5) * 14, life: 45, r: Math.max(0.35, box.getSize(new THREE.Vector3()).length() * 0.35), rest: false };
      list.push(d);
      if (list.length > 40) { const old = list.shift(); scene.remove(old.obj); }
      return d;
    },
    update(dt, cars) {
      for (let i = list.length - 1; i >= 0; i--) {
        const d = list[i];
        d.life -= dt;
        if (d.life <= 0) { scene.remove(d.obj); list.splice(i, 1); continue; }
        if (!d.rest) {
          d.vy -= 9.8 * dt; d.x += d.vx * dt; d.y += d.vy * dt; d.z += d.vz * dt;
          if (d.y < d.r * 0.4) {
            d.y = d.r * 0.4;
            if (d.vy < 0) d.vy = -d.vy * 0.25;
            const f = Math.pow(0.12, dt); d.vx *= f; d.vz *= f; d.ax *= f; d.ay *= f; d.az *= f;
            if (Math.hypot(d.vx, d.vz) < 0.3 && Math.abs(d.vy) < 0.5) d.rest = true;
          }
          d.obj.rotation.x += d.ax * dt; d.obj.rotation.y += d.ay * dt; d.obj.rotation.z += d.az * dt;
          d.obj.position.set(d.x, d.y, d.z);
        }
        // los autos que pasan por encima las patean
        for (const car of cars) {
          const c = car.c; if (Math.abs(c.x - d.x) > 3 || Math.abs(c.z - d.z) > 3) continue;
          if (Math.hypot(c.x - d.x, c.z - d.z) < 1.6 && speed(c) > 3) {
            const [wx, wz] = worldVel(c);
            d.vx = wx * 1.1 + (Math.random() - 0.5) * 4; d.vz = wz * 1.1 + (Math.random() - 0.5) * 4; d.vy = 2 + Math.random() * 3; d.rest = false;
            d.ax = (Math.random() - 0.5) * 20; d.az = (Math.random() - 0.5) * 20;
            if (car.own && speed(c) > 20 && !car.hitDebris) { car.hitDebris = 0.5; c.dmg[0 + (Math.random() < 0.5 ? 0 : 1)] += 0.06; }
          }
        }
      }
    },
    clear() { for (const d of list) scene.remove(d.obj); list.length = 0; },
  };
}

// ---------- Conos y carteles ----------
export function updateProps(props, cars, dt) {
  for (const p of props) {
    for (const car of cars) {
      const c = car.c; if (Math.abs(c.x - p.x) > 4 || Math.abs(c.z - p.z) > 4) continue;
      const fx = Math.sin(c.h), fz = Math.cos(c.h);
      for (const off of [1.6, -0.6]) {
        const cx = c.x + fx * off, cz = c.z + fz * off, dx = p.x - cx, dz = p.z - cz, d = Math.hypot(dx, dz);
        if (d < p.r + 0.95 && p.y < 1.5) {
          const [wx, wz] = worldVel(c);
          const sp = Math.hypot(wx, wz);
          if (sp > 1) {
            p.vx = wx * 1.15 + dx / (d || 1) * sp * 0.3; p.vz = wz * 1.15 + dz / (d || 1) * sp * 0.3; p.vy = 1.5 + sp * 0.12;
            p.wx = (Math.random() - 0.5) * 16; p.wz = (Math.random() - 0.5) * 16; p.moved = true;
            if (car.own && p.type === 'board') setWorldVel(c, wx * 0.985, wz * 0.985);
          }
        }
      }
    }
    if (p.moved) {
      p.vy -= 9.8 * dt; p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
      if (p.y < 0) { p.y = 0; p.vy = p.vy < -1 ? -p.vy * 0.3 : 0; const f = Math.pow(0.08, dt); p.vx *= f; p.vz *= f; p.wx *= f; p.wz *= f; if (Math.hypot(p.vx, p.vz) < 0.2 && p.vy === 0) { p.moved = false; } }
      p.obj.position.set(p.x, p.y, p.z);
      p.obj.rotation.x += p.wx * dt; p.obj.rotation.z += p.wz * dt;
      // al caer, quedan acostados
      if (!p.moved) { p.obj.rotation.x = Math.round(p.obj.rotation.x / (Math.PI / 2)) * Math.PI / 2 || Math.PI / 2; }
    }
  }
}
export function resetProps(props) {
  for (const p of props) { p.x = p.x0; p.z = p.z0; p.y = 0; p.vx = p.vy = p.vz = 0; p.moved = false; p.obj.position.set(p.x, 0, p.z); p.obj.rotation.set(0, p.h0, 0); }
}

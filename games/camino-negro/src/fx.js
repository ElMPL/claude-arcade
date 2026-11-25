// Camino Negro — efectos: monedas que vuelan, papelitos, anillos, sirena, sacudón y "pop" de casas.
import * as THREE from 'three';

export function createFX(SC) {
  const { scene, cam } = SC;
  const live = [];
  const coinGeo = new THREE.CylinderGeometry(0.09, 0.09, 0.025, 14), coinM = new THREE.MeshStandardMaterial({ color: '#ffd23f', metalness: 0.6, roughness: 0.3, emissive: '#7a5400', emissiveIntensity: 0.25 });
  const billM = new THREE.MeshStandardMaterial({ color: '#7fd88a', roughness: 0.6, side: THREE.DoubleSide });
  const billGeo = new THREE.PlaneGeometry(0.22, 0.11);
  const confGeo = new THREE.PlaneGeometry(0.07, 0.11);
  const CONF = ['#e8352f', '#2f7be8', '#2bbd4e', '#f2c21b', '#a54de8', '#ff8a1f', '#ffffff'].map(c => new THREE.MeshBasicMaterial({ color: c, side: THREE.DoubleSide }));
  const ringGeo = new THREE.RingGeometry(0.35, 0.45, 32);

  // monedas (y algún billete) de un punto a otro en arco
  function coins(from, to, n = 8) {
    for (let k = 0; k < n; k++) {
      const bill = k % 3 === 2, m = new THREE.Mesh(bill ? billGeo : coinGeo, bill ? billM : coinM);
      m.castShadow = true; m.position.copy(from); scene.add(m);
      const delay = k * 0.05, T = 0.65 + Math.random() * 0.25, h = 1.2 + Math.random() * 0.8;
      const jit = new THREE.Vector3((Math.random() - 0.5) * 0.4, 0, (Math.random() - 0.5) * 0.4);
      const spin = new THREE.Vector3(Math.random() * 12, Math.random() * 12, Math.random() * 12);
      live.push({ m, t: -delay, upd(dt) {
        this.t += dt; if (this.t < 0) { m.visible = false; return true; } m.visible = true;
        const u = Math.min(1, this.t / T), e = u * u * (3 - 2 * u);
        m.position.lerpVectors(from, to.clone().add(jit), e); m.position.y += Math.sin(u * Math.PI) * h;
        m.rotation.x += spin.x * dt; m.rotation.y += spin.y * dt; m.rotation.z += spin.z * dt;
        if (u >= 1) { scene.remove(m); return false; } return true;
      } });
    }
  }
  function confetti(at, n = 70, up = 3.2) {
    for (let k = 0; k < n; k++) {
      const m = new THREE.Mesh(confGeo, CONF[k % CONF.length]); m.position.copy(at); scene.add(m);
      const v = new THREE.Vector3((Math.random() - 0.5) * 3, up * (0.6 + Math.random() * 0.6), (Math.random() - 0.5) * 3);
      const r = new THREE.Vector3(Math.random() * 10, Math.random() * 10, Math.random() * 10);
      live.push({ m, t: 0, upd(dt) {
        this.t += dt; v.y -= 5.5 * dt; v.multiplyScalar(1 - dt * 1.2);
        m.position.addScaledVector(v, dt); m.rotation.x += r.x * dt; m.rotation.y += r.y * dt;
        if (m.position.y < SC.BH + 0.01) { m.position.y = SC.BH + 0.01; v.set(0, 0, 0); }
        if (this.t > 2.6) { m.material = m.material; m.scale.multiplyScalar(0.9); }
        if (this.t > 3.2) { scene.remove(m); return false; } return true;
      } });
    }
  }
  // anillo que se expande sobre un casillero
  function ring(x, z, col = '#ffffff', size = 1) {
    const m = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthWrite: false }));
    m.rotation.x = -Math.PI / 2; m.position.set(x, SC.BH + 0.03, z); scene.add(m);
    live.push({ m, t: 0, upd(dt) { this.t += dt; const u = this.t / 0.7; m.scale.setScalar(size * (0.6 + u * 1.6)); m.material.opacity = 0.9 * (1 - u); if (u >= 1) { scene.remove(m); m.material.dispose(); return false; } return true; } });
  }
  // aparece con rebote
  function pop(obj, delay = 0) {
    const s0 = obj.scale.clone(); obj.scale.setScalar(0.001);
    live.push({ t: -delay, upd(dt) { this.t += dt; if (this.t < 0) return true; const u = Math.min(1, this.t / 0.45), k = 1 + Math.sin(u * Math.PI) * 0.35 * (1 - u); obj.scale.set(s0.x * u * k || 0.001, s0.y * u * k || 0.001, s0.z * u * k || 0.001); return u < 1; } });
  }
  // sirena de policía en la cárcel
  const sirens = [];
  for (const c of ['#ff2a2a', '#2a6bff']) {
    const l = new THREE.PointLight(c, 0, 5, 1.5); scene.add(l);
    const b = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.1, 0.14), new THREE.MeshBasicMaterial({ color: c })); b.visible = false; scene.add(b);
    sirens.push({ l, b });
  }
  let sirenT = 0, sirenAt = [0, 0];
  function siren(x, z, t = 2.4) { sirenT = t; sirenAt = [x, z]; }
  let shakeA = 0;
  function shake(a = 0.25) { shakeA = Math.max(shakeA, a); }

  function update(dt) {
    for (let i = live.length - 1; i >= 0; i--) if (!live[i].upd(dt)) live.splice(i, 1);
    if (sirenT > 0) {
      sirenT -= dt; const ph = Math.floor(sirenT * 8) % 2;
      sirens.forEach((s, k) => { const on = (k === ph) && sirenT > 0; s.l.intensity = on ? 6 : 0; s.b.visible = sirenT > 0; s.l.position.set(sirenAt[0] + (k ? 0.25 : -0.25), SC.BH + 0.9, sirenAt[1]); s.b.position.set(sirenAt[0] + (k ? 0.12 : -0.12), SC.BH + 0.75, sirenAt[1]); s.b.material.color.set(on ? (k ? '#4f8bff' : '#ff4a4a') : '#222'); });
    } else sirens.forEach(s => { s.l.intensity = 0; s.b.visible = false; });
    if (shakeA > 0.002) { cam.shx = (Math.random() - 0.5) * shakeA; cam.shz = (Math.random() - 0.5) * shakeA; shakeA *= Math.pow(0.02, dt); } else { cam.shx = cam.shz = 0; }
  }
  return { coins, confetti, ring, pop, siren, shake, update };
}

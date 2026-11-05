/* Pantalla de carga: el porcentaje sube de a poco (simula la carga aunque la página ya esté lista) y la especialidad cambia cada 1,3 s.
   Dura al menos 4 s para que se lean varias frases; si la conexión es lenta, espera a la portada (máx. 7 s). */
(() => {
  const ld = document.getElementById('ld'), bar = document.getElementById('ld-i'), pc = document.getElementById('ld-p'), rot = document.getElementById('ld-rot');
  let seen = false; try { seen = sessionStorage.getItem('ld-seen') === '1'; } catch (_) {}
  if (seen) { ld.remove(); return; }
  // tres especialidades a la vez; cada 1,3 s cambia el trío
  const WORDS = ['Diseñadora integral · Branding · UX/UI', 'Experiencias inmersivas · Motion · Editorial', 'Diseño industrial · Señalética · Visuales en vivo'];
  const MIN = 4000, MAX = 7000, STEP = 1300, t0 = performance.now();
  let ready = false, done = false, k = 0, shown = 0;
  addEventListener('load', () => { ready = true; });
  const swap = () => {
    if (done) return; k = (k + 1) % WORDS.length;
    const old = rot.querySelector('.ld-w.is-on'), w = document.createElement('span'); w.className = 'ld-w'; w.textContent = WORDS[k];
    rot.appendChild(w); requestAnimationFrame(() => requestAnimationFrame(() => { w.classList.add('is-on'); if (old) { old.classList.remove('is-on'); old.classList.add('is-out'); setTimeout(() => old.remove(), 500); } }));
  };
  const timer = setInterval(swap, STEP);
  const ease = x => Math.pow(x, 1.15);
  const frame = now => {
    if (done) return;
    const t = now - t0;
    // avanza con pequeños saltos irregulares; frena en 94 % hasta que la portada esté lista
    let target = 100 * ease(Math.min(1, t / MIN));
    if (!ready && t < MAX) target = Math.min(target, 94);
    if (target > shown && (Math.random() > 0.18 || target - shown > 6)) shown = target; // a veces se queda un instante, como una carga real
    bar.style.width = shown + '%'; pc.textContent = Math.floor(shown) + '%';
    if (t >= MIN && (ready || t >= MAX)) { finish(); return; }
    requestAnimationFrame(frame);
  };
  const finish = () => {
    done = true; clearInterval(timer); bar.style.width = '100%'; pc.textContent = '100%';
    setTimeout(() => { ld.classList.add('out'); try { sessionStorage.setItem('ld-seen', '1'); } catch (_) {} setTimeout(() => ld.remove(), 700); }, 350);
  };
  requestAnimationFrame(frame);
})();

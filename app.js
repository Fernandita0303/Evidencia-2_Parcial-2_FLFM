// ===== Tema persistente + micro-animación en el botón =====
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const saved = localStorage.getItem('theme');
if ((saved === 'dark') || (!saved && prefersDark)) document.body.classList.add('dark');

const swapBtn = document.getElementById('swap');
swapBtn.addEventListener('click', () => {
  // animación ligera del botón
  swapBtn.style.transform = 'rotate(-8deg) scale(0.98)';
  setTimeout(()=> swapBtn.style.transform = '', 180);

  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// ===== Envío simulado =====
const form = document.getElementById('contacto');
const toast = document.getElementById('toast');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = (document.getElementById('nombre').value || '').trim();
  const correo = (document.getElementById('correo').value || '').trim();

  if (!nombre || !correo || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)){
    toast.textContent = 'Por favor completa nombre y un correo válido.';
    toast.classList.add('error');
    toast.style.display='block';
    setTimeout(()=>{ toast.style.display='none'; toast.classList.remove('error'); }, 3200);
    return;
  }

  // “Simular” envío con pequeño delay opcional
  toast.textContent = '¡Mensaje enviado! Te contactaré pronto.';
  toast.classList.remove('error');
  toast.style.display='block';
  form.reset();
  setTimeout(()=>{ toast.style.display='none'; }, 3200);
});

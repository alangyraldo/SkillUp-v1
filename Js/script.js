function marcarElementos() {
  document.querySelectorAll('a, button').forEach((el) => {
    if (el.textContent.toLowerCase().includes('agendar tutor')) {
      el.classList.add('btn-agendar');
    }
  });

  const titulo = [...document.querySelectorAll('h1, h2, h3')]
    .find((h) => h.textContent.toLowerCase().includes('camino solitario'));
  const img = titulo?.closest('section, .row')?.querySelector('img');
  if (img) img.classList.add('img-historia');
}

function iniciarAnimaciones() {
    marcarElementos();
  const items = document.querySelectorAll('.card, .valor-card, .img-historia');
  items.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach((el) => observer.observe(el));
}

window.iniciarAnimaciones = iniciarAnimaciones;

const btnSubir = document.createElement('button');
btnSubir.className = 'btn-subir';
btnSubir.setAttribute('aria-label', 'volver arriba');
btnSubir.innerHTML = '<i class="bi bi-arrow-up"></i>';
document.body.appendChild(btnSubir);

window.addEventListener('scroll', () => {
  btnSubir.classList.toggle('visible', window.scrollY > 300);
});

btnSubir.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function iniciarBanner() {
  const imagenes = document.querySelectorAll("#banner-fondo img");
  if (imagenes.length === 0) return; // si la página no tiene banner, no hace nada

  let actual = 0;

  setInterval(() => {
    imagenes[actual].classList.remove("activa");
    actual = (actual + 1) % imagenes.length;
    imagenes[actual].classList.add("activa");
  }, 5000); // cambia cada 5 segundos
}

async function cargarBanner() {
  const contenedor = document.querySelector("#banner");
  if (!contenedor) return;

  const respuesta = await fetch("banner.html");
  contenedor.innerHTML = await respuesta.text();
  iniciarBanner(); // arranca DESPUÉS de que el banner ya existe en la página
}

cargarBanner();
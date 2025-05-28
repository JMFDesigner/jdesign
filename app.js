const bocadillo = document.getElementById("aboutBocadillo");
const avatarImg = document.querySelector(".about_me_avatar img");
const avatarOriginal = avatarImg ? avatarImg.src : "";


bocadillo.innerHTML = `<p class="inicialt">Haz clic en los iconos que están debajo de mi avatar para saber más sobre mí 👇</p>`;


function asignarCierre(idBotonCerrar) {
  setTimeout(() => {
    const cerrarBtn = document.getElementById(idBotonCerrar);
    if (cerrarBtn) {
      cerrarBtn.addEventListener("click", () => {
        bocadillo.innerHTML = `<p class="inicialt">Haz clic en los iconos que están debajo de mi avatar para saber más sobre mí 👇</p>`;
        bocadillo.parentElement.classList.remove("visible");
        if (avatarImg) avatarImg.src = avatarOriginal;
      });
    }
  }, 100);
}


const conocemeBtn = document.getElementById("aboutConoceme");
if (conocemeBtn) {
  conocemeBtn.addEventListener("click", () => {
    bocadillo.innerHTML = `
      <h3>¡Hola!</h3>
      Me presento, soy <b>Jesús Muñoz Fernández</b>!<br>
      Supongo que te interesa saber un poco sobre mí. Soy un apasionado del <b>diseño</b>, la <b>ilustración</b> y la <b>maquetación web</b>. Persona altruista que le gusta trabajar en equipo. Diseño <b>experiencias visuales dinámicas</b> para entornos <b>digitales</b> y <b>offline (offset)</b>.<br> Me siento más cómodo trabajando híbrido y online. Me encanta el mundo de los videojuegos, del que obtengo mucha inspiración para crear diseños de todo tipo.
      <br><br>
      <button id="cerrarConoceme" style="background: none; border: none; color: red; font-size: 20px; cursor: pointer;">✖</button>
    `;
    bocadillo.parentElement.classList.add("visible");
 if (avatarImg) avatarImg.src = "Assets/Img/Avatar/Avatar_1hablando.png";
    asignarCierre("cerrarConoceme");
  });
}


const estudiosBtn = document.getElementById("aboutEstudios");
if (estudiosBtn) {
  estudiosBtn.addEventListener("click", () => {
    bocadillo.innerHTML = `
      <h3>Mis estudios.</h3>
      Cuento con un <b>Ciclo Formativo de Grado Superior en Ilustración</b>, complementado con <b>Másteres en Concept Art y Cómic</b>, donde he desarrollado una sólida base artística y narrativa.
      Además, me he <b>especializado en el ámbito digital</b> mediante <b>cursos de diseño gráfico y maquetación Front-End</b>, lo que me permite unir estética y funcionalidad en cada proyecto.
      Mi trayectoria incluye una <b>amplia experiencia en diseño gráfico</b>, trabajando en entornos creativos donde la versatilidad y la atención al detalle son clave.
      Domino a nivel profesional todo el <b>paquete Adobe Creative Cloud</b> (Photoshop, Illustrator, InDesign, After Effects, etc.), herramientas de productividad como <b>Microsoft Office</b> y <b>programacion web con Html, Css y JavaScript.</b>
      <br><br>
      <button id="cerrarEstudios" style="background: none; border: none; color: red; font-size: 20px; cursor: pointer;">✖</button>
    `;
    bocadillo.parentElement.classList.add("visible");
    if (avatarImg) avatarImg.src = "Assets/Img/Avatar/Avatar_1hablando.png";
    asignarCierre("cerrarEstudios");
  });
}


const experienciaBtn = document.getElementById("aboutExperiencia");
if (experienciaBtn) {
  experienciaBtn.addEventListener("click", () => {
    bocadillo.innerHTML = `
      <h3>Experiencia</h3>
      Tengo experiencia en <b>diseño gráfico</b>, <b>ilustración</b> y <b>maquetación web</b>.
      He participado en proyectos de <b>branding</b>, <b>diseño editorial</b>, <b>eventos</b> tanto online como impresos, y en el <b>desarrollo de interfaces digitales</b>.
      Cuento con más de <b>3 años de experiencia</b> en diseño gráfico, especialmente en el sector de eventos, donde me he desempeñado como diseñador visual.
      En cuanto a maquetación web, puedes ver una muestra en esta misma página.
      <br><br>
      <button id="cerrarExperiencia" style="background: none; border: none; color: red; font-size: 20px; cursor: pointer;">✖</button>
    `;
    bocadillo.parentElement.classList.add("visible");
   if (avatarImg) avatarImg.src = "Assets/Img/Avatar/Avatar_1hablando.png";
    asignarCierre("cerrarExperiencia");
  });
}


const contactoBtn = document.getElementById("aboutContacto");
if (contactoBtn) {
  contactoBtn.addEventListener("click", () => {
    bocadillo.innerHTML = `
      <h3>Contacto</h3>
      ¿Quieres ponerte en contacto conmigo?<br>
      Escríbeme a <b>j.munozfernandez96@gmail.com</b>. Allí podremos hablar y pasarte mi curriculum si estas interesado.
      <br><br>
      <button id="cerrarContacto" style="background: none; border: none; color: red; font-size: 20px; cursor: pointer;">✖</button>
    `;
    bocadillo.parentElement.classList.add("visible");
   if (avatarImg) avatarImg.src = "Assets/Img/Avatar/Avatar_1hablando.png";
    asignarCierre("cerrarContacto");
  });
}




const categorias = {
  diseñografico: [
    {imagen: "Assets/Img/Galeria/diseño1.png",  texto: "Diseño completo de escenario realizado con el paquete Adobe, incluyendo atriles, photocall, fondos para pantallas y mucho más." },

      {imagen: "Assets/Img/Galeria/diseño2.png",  texto: "Diseño de carteles para redes sociales, especialmente creados para la promoción de un evento a través de Instagram." },
      
    { imagen: "Assets/Img/Galeria/diseño3.png", texto: "Diseño de carteles en formatos digitales e imprimibles, adaptados al tamaño y a las necesidades específicas de cada cliente." },

    { imagen: "Assets/Img/Galeria/diseño4.png", texto: "Diseño de carteles en formatos digitales e imprimibles, adaptados al tamaño y a las necesidades específicas de cada cliente."}
  ],
  maquetacionweb: [
    { imagen: "Assets/Img/Galeria/Web1.png", texto: "Sitio web desarrollado para presentar y difundir mi portafolio profesional a nivel global. Desarrollado con HTML, CSS y JavaScript" },
    { imagen: "Assets/Img/Galeria/Web2.png", texto: "Videojuego de Mario desarrollado únicamente con JavaScript." }
  ],
  ilustracion: [
    { imagen: "Assets/Img/Galeria/ilustracion-1.png", texto: "Obra trazada con rotrings, construida íntegramente a partir de líneas." },
    { imagen: "Assets/Img/Galeria/ilustracion-2.png", texto: "Ilustración estilo cómic basada en el universo de League of Legends, creada completamente en Adobe Photoshop." },
    { imagen: "Assets/Img/Galeria/ilustracion-3.png", texto: "Ilustración desarrollada como parte del Trabajo de Fin de Grado, inspirada en la saga de videojuegos Dark Souls y realizada íntegramente con Adobe Photoshop." },
    { imagen: "Assets/Img/Galeria/ilustracion-4.png", texto: "Ilustración realizada con pinceladas digitales en Adobe Photoshop." }
  ],
  logo: [
    { imagen: "Assets/Img/Galeria/Logosjdesing.png", texto: "Exploración de distintos diseños para un mismo logotipo, variando estilos tipográficos y paletas de color hasta alcanzar la propuesta final." },
    { imagen: "Assets/Img/Galeria/Manual1.png", texto: "Manual de imagen corporativo" },
      { imagen: "Assets/Img/Galeria/Manual2.png", texto: "Manual de imagen corporativo" },
        { imagen: "Assets/Img/Galeria/Manual3.png", texto: "Manual de imagen corporativo" },
          { imagen: "Assets/Img/Galeria/Manual4.png", texto: "Manual de imagen corporativo" }
  
  ]
};

const slideshow = document.getElementById('slideshow');
const tabButtons = document.querySelectorAll('.tab-button');

function mostrarCategoria(nombre) {
  slideshow.innerHTML = ''; 

  const slides = categorias[nombre];
  slides.forEach((item, index) => {
    const slide = document.createElement('div');
    slide.className = 'mySlides fade';

    slide.innerHTML = `
      <div class="imagen-con-overlay">
        <img src="${item.imagen}" alt="Imagen ${index + 1}">
        <div class="overlay-text">${item.texto}</div>
      </div>
    `;
    slideshow.appendChild(slide);
  });


  const prev = document.createElement('a');
  prev.className = 'prev';
  prev.innerHTML = '❮';
  prev.onclick = () => plusSlides(-1);

  const next = document.createElement('a');
  next.className = 'next';
  next.innerHTML = '❯';
  next.onclick = () => plusSlides(1);

  slideshow.appendChild(prev);
  slideshow.appendChild(next);

 
  slideIndex = 1;
  showSlides(slideIndex);
}


let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  if (!slides.length) return;

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}


tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    mostrarCategoria(btn.dataset.categoria);
  });
});


mostrarCategoria('diseñografico');



let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {

    navbar.style.transform = 'translateY(-100%)';
    navbar.style.transition = 'transform 0.3s';
  } else {
 
    navbar.style.transform = 'translateY(0)';
    navbar.style.transition = 'transform 0.3s';
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
}, false);

window.addEventListener('scroll', function () {
  const title = document.querySelector('.parallax-title');
  const subtitle = document.querySelector('.hero-content p');
  const heroContent = document.querySelector('.hero-content');
  if (!title || !subtitle || !heroContent) return;

  const scrollY = window.scrollY || window.pageYOffset;

  
  const translateYTitle = Math.min(scrollY * 0.4, 200);
  const opacityTitle = Math.max(1 - scrollY / 400, 0);
  title.style.transform = `translateY(${translateYTitle}px)`;
  title.style.opacity = opacityTitle;

  
  const translateYSubtitle = Math.min(scrollY * 0.6, 250);
  const opacitySubtitle = Math.max(1 - scrollY / 300, 0);
  subtitle.style.transform = `translateY(${translateYSubtitle}px)`;
  subtitle.style.opacity = opacitySubtitle;

 
  const translateYHeroContent = translateYTitle;
  const opacityHeroContent = opacityTitle;
  heroContent.style.transform = `translateY(${translateYHeroContent}px)`;
  heroContent.style.opacity = opacityHeroContent;
});


window.addEventListener('scroll', function () {
  const heroContent = document.querySelector('.hero-content');
  if (!heroContent) return;

  const scrollY = window.scrollY || window.pageYOffset;

});




window.addEventListener('load', () => {
  setTimeout(() => {
    const title = document.querySelector('.parallax-title');
    const subtitle = document.querySelector('.hero-content p');
    if (!title || !subtitle) return;

   
    title.style.transition = 'transform 0.8s ease, opacity 0.8s ease';
    subtitle.style.transition = 'transform 0.8s ease 0.2s, opacity 0.8s ease 0.2s';

    title.style.transform = 'translateX(0)';
    title.style.opacity = '1';

    subtitle.style.transform = 'translateX(0)';
    subtitle.style.opacity = '1';
  }, 1000); 
});


window.addEventListener('load', () => {
  setTimeout(() => {
    const imgHero = document.getElementById('img-hero');
    if (!imgHero) return;

    imgHero.style.transform = 'translateX(0)';
    imgHero.style.opacity = '1';
  }, 1000); 
});

window.addEventListener('scroll', function () {
  const imgHero = document.getElementById('img-hero');
  if (!imgHero) return;

  const scrollY = window.scrollY || window.pageYOffset;


  const translateYImg = Math.min(scrollY * 0.4, 200);
  const opacityImg = Math.max(1 - scrollY / 400, 0);

  imgHero.style.transform = `translateY(${translateYImg}px)`;
  imgHero.style.opacity = opacityImg;
});




window.addEventListener('scroll', function () {
  const introd = document.getElementById('introd');

  if (!introd) return;

  const introdPosition = introd.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (introdPosition < windowHeight * 0.8 && !introd.classList.contains("visible")) {
    introd.classList.add("visible"); 
  }
});

window.addEventListener('scroll', function () {
  const elements = document.querySelectorAll('.text, #introi1, #introi2');

  elements.forEach(element => {
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight * 0.8 && !element.classList.contains("visible")) {
      element.classList.add("visible"); 
    }
  });
});




if (window.innerWidth <= 600) {
  const images = document.querySelectorAll('#introd, #introi1, #introi2');
  const overlay = document.getElementById('overlay');

  let isOpen = false;

  images.forEach(img => {
    img.addEventListener('click', () => {
      if (!isOpen) {
        const clone = img.cloneNode();
        overlay.innerHTML = '';
        overlay.appendChild(clone);
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        isOpen = true;


        overlay.addEventListener('click', () => {
          overlay.style.display = 'none';
          overlay.innerHTML = '';
          document.body.style.overflow = '';
          isOpen = false;
        }, { once: true });
      }
    });
  });

  // Esta parte es para las imágenes de la galería con overlay-text
  document.querySelectorAll('.imagen-con-overlay').forEach(container => {
    const overlayText = container.querySelector('.overlay-text');
    if (overlayText) {
      container.addEventListener('click', () => {
 
        overlayText.style.opacity = (overlayText.style.opacity === '1') ? '0' : '1';
      });
    }
  });
}

 document.addEventListener('DOMContentLoaded', () => {
    const seccion = document.querySelector('.about_me_seccion');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible-scroll');
          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0.2 
    });

    observer.observe(seccion);
  });

document.addEventListener('DOMContentLoaded', () => {
  const btnCopiar = document.getElementById('copiarCorreo');
  const mensaje = document.getElementById('mensajeCopiadoFlotante');
  if (btnCopiar && mensaje) {
    btnCopiar.addEventListener('click', () => {
      navigator.clipboard.writeText('j.munozfernandez96@gmail.com').then(() => {
        mensaje.style.display = 'block';
        setTimeout(() => {
          mensaje.style.display = 'none';
        }, 1000);
      });
    });
  }
});


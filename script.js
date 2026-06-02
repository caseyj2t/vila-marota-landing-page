const translations = {
  pt: {
    lang: 'pt-BR',
    title: 'Marota — Pindobaçu, Bahia',
    navHome: 'Início',
    navReviews: 'Avaliações',
    navGallery: 'Galeria',
    navInfo: 'Informações',
    navContact: 'Contato',
    heroDescription: 'Apenas um simples Povoado no interior do nordeste da Bahia.',
    reviewsEyebrow: 'Avaliado pela comunidade',
    reviewsTitle: 'O que dizem sobre a Marota',
    ratingTitle: 'Excelente conforme o Google',
    ratingDescription: 'Visitantes e moradores aprovam a hospitalidade e o charme deste pedacinho da Bahia.',
    googleBadge: 'Avaliações no Google',
    galleryEyebrow: 'Galeria de imagens',
    galleryTitle: 'Um passeio pela Vila',
    galleryDescription: 'Conheça a beleza simples e o charme rústico do nosso povoado através de imagens.',
    infoEyebrow: 'Informações úteis',
    infoTitle: 'Como nos encontrar',
    addressTitle: 'Endereço',
    addressLine: 'Rua Itiúba, 1 — Marota,<br>Pindobaçu — BA, 44774-300',
    ctaTitle: 'Venha conhecer a Marota',
    ctaDescription: 'Um cantinho simples e acolhedor no interior da Bahia, esperando por você. Entre em contato ou venha nos visitar.',
    mapButton: '🗺️ Ver no Google Maps',
    footerLocation: 'Pindobaçu — Bahia, Brasil',
    footerCopyright: '© 2026 Comunidade de Marota. Feito com <span class="heart">♥</span> para o nosso povoado.',
  },
  en: {
    lang: 'en',
    title: 'Marota — Pindobaçu, Bahia',
    navHome: 'Home',
    navReviews: 'Reviews',
    navGallery: 'Gallery',
    navInfo: 'Info',
    navContact: 'Contact',
    heroDescription: 'Just a simple village in the interior of northeastern Bahia.',
    reviewsEyebrow: 'Rated by the community',
    reviewsTitle: 'What people say about Marota',
    ratingTitle: 'Excellent according to Google',
    ratingDescription: 'Visitors and residents approve the hospitality and charm of this little piece of Bahia.',
    googleBadge: 'Google reviews',
    galleryEyebrow: 'Image gallery',
    galleryTitle: 'A stroll through the village',
    galleryDescription: 'Discover the simple beauty and rustic charm of our village through pictures.',
    infoEyebrow: 'Useful information',
    infoTitle: 'How to find us',
    addressTitle: 'Address',
    addressLine: 'Rua Itiúba, 1 — Marota,<br>Pindobaçu — BA, 44774-300',
    ctaTitle: 'Come visit Marota',
    ctaDescription: 'A simple and welcoming corner in the interior of Bahia, waiting for you. Get in touch or come visit us.',
    mapButton: '🗺️ View on Google Maps',
    footerLocation: 'Pindobaçu — Bahia, Brazil',
    footerCopyright: '© 2026 Marota community. Made with <span class="heart">♥</span> for our village.',
  },
  es: {
    lang: 'es',
    title: 'Marota — Pindobaçu, Bahia',
    navHome: 'Inicio',
    navReviews: 'Reseñas',
    navGallery: 'Galería',
    navInfo: 'Información',
    navContact: 'Contacto',
    heroDescription: 'Solo una aldea simple en el interior del noreste de Bahía.',
    reviewsEyebrow: 'Calificado por la comunidad',
    reviewsTitle: 'Qué dicen sobre Marota',
    ratingTitle: 'Excelente según Google',
    ratingDescription: 'Visitantes y residentes aprueban la hospitalidad y el encanto de este pequeño rincón de Bahía.',
    googleBadge: 'Reseñas en Google',
    galleryEyebrow: 'Galería de imágenes',
    galleryTitle: 'Un paseo por la aldea',
    galleryDescription: 'Descubre la belleza sencilla y el encanto rústico de nuestra aldea a través de imágenes.',
    infoEyebrow: 'Información útil',
    infoTitle: 'Cómo encontrarnos',
    addressTitle: 'Dirección',
    addressLine: 'Rua Itiúba, 1 — Marota,<br>Pindobaçu — BA, 44774-300',
    ctaTitle: 'Ven a conocer Marota',
    ctaDescription: 'Un rincón simple y acogedor en el interior de Bahía, esperando por ti. Contáctanos o ven a visitarnos.',
    mapButton: '🗺️ Ver en Google Maps',
    footerLocation: 'Pindobaçu — Bahía, Brasil',
    footerCopyright: '© 2026 Comunidad de Marota. Hecho con <span class="heart">♥</span> para nuestra aldea.',
  }
};

const langSelect = document.getElementById('langSelect');

function applyLanguage(lang) {
  const data = translations[lang] || translations.pt;
  document.documentElement.lang = data.lang;
  document.title = data.title;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (data[key]) el.innerHTML = data[key];
  });
  if (langSelect) langSelect.value = lang;
  localStorage.setItem('siteLang', lang);
}

const savedLang = localStorage.getItem('siteLang') || 'pt';
if (langSelect) {
  langSelect.value = savedLang;
  langSelect.addEventListener('change', (e) => applyLanguage(e.target.value));
}
applyLanguage(savedLang);

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
});
// Close menu after click on link (mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// Navbar shadow on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
reveals.forEach(el => io.observe(el));

// Lightbox da Galeria
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

function isValidGalleryImageSrc(src) {
  if (typeof src !== 'string') return false;
  try {
    const url = new URL(src, window.location.href);
    return url.origin === window.location.origin && /^\/img\/[A-Za-z0-9._-]+\.(?:jpe?g|png|webp|gif)$/i.test(url.pathname);
  } catch {
    return false;
  }
}

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const imgEl = item.querySelector('img');
    const full = imgEl.src;
    const alt = imgEl.getAttribute('alt') || 'Imagem da galeria';
    if (!isValidGalleryImageSrc(full)) return;

    lightboxImg.src = full;
    lightboxImg.alt = alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

function closeLightbox() {
  lightbox.classList.remove('open');
  lightboxImg.src = '';
  document.body.style.overflow = '';
}
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
});

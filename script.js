// ── HERO VIDEO AUTOPLAY ──
const heroVideo = document.querySelector('.hero-bg-video');
if (heroVideo) {
  heroVideo.muted = true;
  heroVideo.playsInline = true;
  const playPromise = heroVideo.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // Retry on first user interaction if browser blocked autoplay
      document.addEventListener('click', () => heroVideo.play(), { once: true });
      document.addEventListener('touchstart', () => heroVideo.play(), { once: true });
    });
  }
}

// ── NAVIGATION ──
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const dropdowns = document.querySelectorAll('.dropdown');

hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Mobile dropdown toggle
dropdowns.forEach(dropdown => {
  const link = dropdown.querySelector('a');
  link?.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      dropdown.classList.toggle('open');
    }
  });
});

// Close menu on outside click
document.addEventListener('click', (e) => {
  if (!e.target.closest('nav')) {
    navLinks?.classList.remove('open');
    hamburger?.classList.remove('open');
    dropdowns.forEach(d => d.classList.remove('open'));
  }
});

// ── LIGHTBOX ──
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const galleryItems = document.querySelectorAll('.gallery-item, .sg-item');
let currentIndex = 0;

const images = Array.from(galleryItems).map(item => item.querySelector('img'));

function openLightbox(index) {
  currentIndex = index;
  lightboxImg.src = images[index].src;
  lightboxImg.alt = images[index].alt;
  lightbox?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox?.classList.remove('active');
  document.body.style.overflow = '';
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
  lightboxImg.alt = images[currentIndex].alt;
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
  lightboxImg.alt = images[currentIndex].alt;
}

galleryItems.forEach((item, i) => {
  item.addEventListener('click', () => openLightbox(i));
});

document.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
document.querySelector('.lightbox-prev')?.addEventListener('click', showPrev);
document.querySelector('.lightbox-next')?.addEventListener('click', showNext);

lightbox?.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (!lightbox?.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') showPrev();
  if (e.key === 'ArrowRight') showNext();
});

// ── CONTACT FORM ──
const form = document.getElementById('contact-form');
const formSuccess = document.querySelector('.form-success');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = 'Odesílám…';

  setTimeout(() => {
    form.reset();
    btn.disabled = false;
    btn.textContent = 'Odeslat zprávu';
    formSuccess?.classList.add('visible');
    setTimeout(() => formSuccess?.classList.remove('visible'), 5000);
  }, 1200);
});

// ── SCROLL ANIMATIONS ──
const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Inject fade-in class on relevant elements
document.querySelectorAll('.service-card, .gallery-item, .about-grid, .contact-grid, .subpage-feature').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
  el.classList.add('fade-in');
});

const animObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      animObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => animObserver.observe(el));

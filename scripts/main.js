/* ══════════════════════════════════════════════
   CÓDIGO IA — MAIN SCRIPT
══════════════════════════════════════════════ */

// ── NAVBAR SCROLL ──
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (scrollY > 60) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
  lastScroll = scrollY;

  // Scroll top button
  const scrollBtn = document.getElementById('scrollTop');
  if (scrollY > 400) scrollBtn.classList.add('visible');
  else scrollBtn.classList.remove('visible');
});

// ── HAMBURGER MENU ──
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });
}

// ── SEARCH BAR ──
const searchToggle = document.getElementById('searchToggle');
const searchBar = document.getElementById('searchBar');
const searchClose = document.getElementById('searchClose');
const searchInput = document.getElementById('searchInput');

if (searchToggle) {
  searchToggle.addEventListener('click', () => {
    searchBar.classList.add('open');
    searchInput.focus();
  });
}

if (searchClose) {
  searchClose.addEventListener('click', () => {
    searchBar.classList.remove('open');
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && searchBar) searchBar.classList.remove('open');
});

// ── SCROLL TO TOP ──
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── COUNTER ANIMATION ──
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-count'));
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;

  const interval = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    el.textContent = Math.floor(current).toLocaleString();
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

// ── TOOLS FILTER ──
const filterBtns = document.querySelectorAll('.filter-btn');
const toolCards = document.querySelectorAll('.tool-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    toolCards.forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.style.display = 'block';
        card.style.animation = 'fade-in 0.3s ease';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ── COPY PROMPT ──
window.copyPrompt = function(btn) {
  const promptText = btn.closest('.prompt-card').querySelector('.prompt-text').textContent.trim();

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(promptText).then(() => {
      showToast('✅ Prompt copiado al portapapeles');
      btn.textContent = '✓ Copiado';
      setTimeout(() => { btn.textContent = '📋 Copiar'; }, 2000);
    });
  } else {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = promptText;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('✅ Prompt copiado');
    btn.textContent = '✓ Copiado';
    setTimeout(() => { btn.textContent = '📋 Copiar'; }, 2000);
  }
};

// ── NEWSLETTER ──
window.subscribeNewsletter = function() {
  const email = document.getElementById('newsletterEmail')?.value;
  if (!email || !email.includes('@')) {
    showToast('⚠️ Introduce un email válido');
    return;
  }
  showToast('🎉 ¡Suscrito! Revisa tu email para confirmar');
  document.getElementById('newsletterEmail').value = '';
};

// ── TOAST ──
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ── INTERSECTION OBSERVER - FADE IN ──
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fade-up 0.6s ease both';
      entry.target.style.opacity = '1';
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.article-card, .article-card-v2, .tool-card, .prompt-card, .aff-card, .news-item').forEach(el => {
  el.style.opacity = '0';
  fadeObserver.observe(el);
});

// ── PARTICLES ──
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  for (let i = 0; i < 40; i++) {
    const particle = document.createElement('div');
    const size = Math.random() * 3 + 1;
    const isCyan = Math.random() > 0.5;

    particle.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: ${isCyan ? '#00d4ff' : '#7c3aed'};
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      opacity: ${Math.random() * 0.4 + 0.1};
      box-shadow: 0 0 ${size * 3}px ${isCyan ? '#00d4ff' : '#7c3aed'};
      animation: particle-float ${Math.random() * 10 + 8}s ease-in-out infinite;
      animation-delay: -${Math.random() * 10}s;
    `;
    container.appendChild(particle);
  }

  const style = document.createElement('style');
  style.textContent = `
    @keyframes particle-float {
      0%, 100% { transform: translateY(0) translateX(0); }
      25% { transform: translateY(-20px) translateX(10px); }
      50% { transform: translateY(-10px) translateX(-10px); }
      75% { transform: translateY(-30px) translateX(5px); }
    }
  `;
  document.head.appendChild(style);
}

createParticles();

// ── SMOOTH ANCHOR SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offset = 120;
      const y = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      // Close mobile menu if open
      if (navLinks) navLinks.classList.remove('open');
    }
  });
});

// ── LAZY LOAD IMAGES ──
if ('IntersectionObserver' in window) {
  const lazyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          lazyObserver.unobserve(img);
        }
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => lazyObserver.observe(img));
}

console.log('%c🤖 CÓDIGO IA', 'color: #00d4ff; font-family: monospace; font-size: 20px; font-weight: bold;');
console.log('%cEl portal #1 en español sobre Inteligencia Artificial', 'color: #7c3aed; font-size: 12px;');

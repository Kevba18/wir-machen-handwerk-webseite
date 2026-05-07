/* WMH – Main JS v2.0 */

// Nav: transparent → white on scroll, auto-scrolled for non-hero pages
const nav = document.querySelector('.nav');
if (nav) {
  const hasHero = document.querySelector('.hero');
  const updateNav = () => {
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else if (hasHero) {
      nav.classList.remove('scrolled');
    }
  };
  if (!hasHero) nav.classList.add('scrolled');
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
}

// Mobile Nav
const toggle    = document.querySelector('.nav__toggle');
const mobileNav = document.querySelector('.nav__mobile');
if (toggle && mobileNav) {
  toggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

// FAQ Accordion
document.querySelectorAll('.faq__question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item   = btn.closest('.faq__item');
    const isOpen = item.classList.contains('is-open');
    document.querySelectorAll('.faq__item.is-open').forEach(el => {
      el.classList.remove('is-open');
      el.querySelector('.faq__question')?.setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

// Active nav link
const currentPath = window.location.pathname;
document.querySelectorAll('.nav__links a, .nav__mobile a').forEach(link => {
  const href = link.getAttribute('href');
  if (href && (currentPath === href || (href !== '/' && currentPath.startsWith(href)))) {
    link.classList.add('active');
  }
});

// Scroll animations via Intersection Observer
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.animate, .animate-fade, .animate-scale').forEach(el => {
    observer.observe(el);
  });
}

// Dynamisches Copyright-Jahr
const copyrightEl = document.querySelector('.footer__copy');
if (copyrightEl) {
  copyrightEl.textContent = `© ${new Date().getFullYear()} Wir machen Handwerk. Alle Rechte vorbehalten.`;
}

// Cookie Banner
(function () {
  if (localStorage.getItem('wmh-cookie-ok')) return;
  const banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.setAttribute('role', 'region');
  banner.setAttribute('aria-label', 'Cookie-Hinweis');
  banner.innerHTML =
    '<div class="cookie-banner__inner">' +
      '<p class="cookie-banner__text">Diese Website verwendet ausschließlich technisch notwendige Cookies für den Betrieb und die Formularfunktion. ' +
        '<a href="/datenschutz/">Datenschutzerklärung lesen</a>' +
      '</p>' +
      '<button class="btn btn--orange btn--sm" id="cookie-ok">Verstanden</button>' +
    '</div>';
  document.body.appendChild(banner);
  document.getElementById('cookie-ok').addEventListener('click', function () {
    localStorage.setItem('wmh-cookie-ok', '1');
    banner.style.animation = 'cookieFadeIn 0.25s ease reverse both';
    setTimeout(function () { banner.remove(); }, 260);
  });
}());

// Dropdown keyboard accessibility
document.querySelectorAll('.nav__dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const dropdown = toggle.closest('.nav__dropdown');
      dropdown?.classList.toggle('is-active');
    }
  });
});

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

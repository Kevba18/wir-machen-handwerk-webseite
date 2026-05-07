/* WMH – Main JS */

// Mobile Nav
const toggle = document.querySelector('.nav__toggle');
const mobileNav = document.querySelector('.nav__mobile');

if (toggle && mobileNav) {
  toggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
}

// FAQ Accordion
document.querySelectorAll('.faq__question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq__item');
    const isOpen = item.classList.contains('is-open');
    document.querySelectorAll('.faq__item.is-open').forEach(el => el.classList.remove('is-open'));
    if (!isOpen) item.classList.add('is-open');
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

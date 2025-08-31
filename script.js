// Smooth scrolling + close mobile menu after click
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile menu if open
      navLinks.classList.remove('open');
      hamburger.classList.remove('is-active');
      document.body.classList.remove('menu-open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
});

// Navbar shadow on scroll
const nav = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Mobile dropdown toggle
document.querySelectorAll(".dropdown > a").forEach(link => {
  link.addEventListener("click", (e) => {
    if (window.innerWidth <= 900) { // only on mobile
      e.preventDefault();
      const parent = link.parentElement;
      parent.classList.toggle("open");
    }
  });
});

// Reset state on resize (prevents stuck states)
const BP = 1000;
window.addEventListener('resize', () => {
  if (window.innerWidth > BP) {
    navLinks.classList.remove('open');
    hamburger.classList.remove('is-active');
    document.body.classList.remove('menu-open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

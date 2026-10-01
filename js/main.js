// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Scroll-triggered fade-ins
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// ---------- Language toggle (ES default / EN) ----------
const translations = {
  en: {
    'meta.title': 'Conecta2 — Websites for Small Businesses',
    'meta.description': 'I design and build fast, modern websites for small businesses and brands — landing pages, business sites, and redesigns.',
    'nav.services': 'Services',
    'nav.work': 'Work',
    'nav.process': 'Process',
    'nav.about': 'About',
    'nav.contact': 'Get in touch',
    'hero.eyebrow': 'Web design & development',
    'hero.title': 'Websites that make your business look as good as it actually is.',
    'hero.sub': 'I design and build fast, modern websites for small businesses and brands — from single-page landing sites to full multi-page builds. No templates, no bloat, no waiting three months.',
    'hero.ctaWork': 'See the work',
    'hero.ctaStart': 'Start a project',
    'strip.landing': 'Landing pages',
    'strip.business': 'Business websites',
    'strip.redesign': 'Site redesigns',
    'strip.mobile': 'Mobile-first',
    'strip.seo': 'SEO basics included',
    'services.title': 'Services',
    'services.sub': 'Three ways to work together, depending on where your business is right now.',
    'services.landing.name': 'Landing Page',
    'services.landing.desc': 'A focused, single-page site built to convert visitors into customers. Perfect for launches, campaigns, or a simple online presence.',
    'services.landing.list': '<li>Custom design, not a template</li><li>Mobile responsive</li><li>Contact form built in</li><li>Delivered in 1–2 weeks</li>',
    'services.business.name': 'Business Website',
    'services.business.desc': 'A full multi-page site — home, about, services, contact, and more. Built to represent your brand and get found on Google.',
    'services.business.list': '<li>Up to 5 pages</li><li>Basic on-page SEO</li><li>Mobile responsive</li><li>Delivered in 2–4 weeks</li>',
    'services.refresh.name': 'Website Refresh',
    'services.refresh.desc': "Already have a site but it feels outdated or isn't converting? I'll redesign and rebuild it with modern design and better performance.",
    'services.refresh.list': '<li>Full redesign, your content</li><li>Performance & SEO audit</li><li>Mobile responsive</li><li>Delivered in 2–3 weeks</li>',
    'services.note': 'Every project includes mobile-first design, basic on-page SEO, and a short walkthrough so you can update the site yourself.',
    'services.noteCta': 'Get in touch for a personalized quote.',
    'work.title': 'Selected work',
    'work.sub': 'Concept projects shown below — real client work coming soon.',
    'work.a.tag': 'Landing page concept',
    'work.a.title': 'Local bakery launch site',
    'work.a.desc': 'A single-page site built around one goal: get people to walk in the door. Menu highlights, hours, and a map front and center.',
    'work.b.tag': 'Business site concept',
    'work.b.title': 'Independent fitness coach',
    'work.b.desc': 'A 5-page site with booking info, program details, and a clear path from "just looking" to "signed up."',
    'work.c.tag': 'Redesign concept',
    'work.c.title': 'Boutique store refresh',
    'work.c.desc': 'A dated, slow site rebuilt for speed and mobile shoppers, with the same content and a much clearer layout.',
    'process.title': 'How it works',
    'process.sub': 'Same process every time, so there are no surprises.',
    'process.discover.title': 'Discover',
    'process.discover.desc': 'A short call to talk through your business, goals, and what the site needs to do for you.',
    'process.design.title': 'Design',
    'process.design.desc': "I put together a design direction for your review before any code is written, so there's no guessing.",
    'process.build.title': 'Build',
    'process.build.desc': 'The site gets built, tested on real devices, and checked for speed and SEO basics.',
    'process.launch.title': 'Launch & support',
    'process.launch.desc': 'I handle the launch and walk you through how to make simple updates yourself going forward.',
    'about.title': 'About',
    'about.p1': "Hi, I'm [Your Name] — I design and build websites for small businesses and independent brands. I care about sites that load fast, look sharp on a phone, and actually help you get customers, not just look nice in a portfolio.",
    'about.p2': "[Add a sentence or two here about your background, why you started this, or what makes your approach different.]",
    'contact.title': "Let's build something",
    'contact.sub': "Tell me a bit about your business and what you need — I'll get back to you within a day or two.",
  },
};

const langToggle = document.getElementById('lang-toggle');
const i18nEls = document.querySelectorAll('[data-i18n]');

// Capture the original Spanish copy so we can switch back to it later.
i18nEls.forEach((el) => {
  const attr = el.dataset.i18nAttr;
  el.dataset.i18nEs = attr ? el.getAttribute(attr) : el.innerHTML;
});

function applyLanguage(lang) {
  i18nEls.forEach((el) => {
    const key = el.dataset.i18n;
    const attr = el.dataset.i18nAttr;
    const value = lang === 'en' && translations.en[key] !== undefined
      ? translations.en[key]
      : el.dataset.i18nEs;

    if (attr) {
      el.setAttribute(attr, value);
    } else {
      el.innerHTML = value;
    }
  });

  document.documentElement.lang = lang;
  langToggle.textContent = lang === 'en' ? 'ES' : 'EN';
  langToggle.setAttribute(
    'aria-label',
    lang === 'en' ? 'Cambiar a español' : 'Switch to English'
  );
  localStorage.setItem('site-lang', lang);
}

langToggle.addEventListener('click', () => {
  const nextLang = document.documentElement.lang === 'en' ? 'es' : 'en';
  applyLanguage(nextLang);
});

applyLanguage(localStorage.getItem('site-lang') || 'es');

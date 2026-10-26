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
    'nav.menu': 'Toggle menu',
    'hero.eyebrow': 'Web design & development',
    'hero.title': 'Websites that make your business look as good as it actually is.',
    'hero.sub': 'I design and build fast, modern websites for small businesses and brands — from single-page landing sites to full multi-page builds. No templates, no bloat, no waiting three months.',
    'hero.ctaWork': 'See the work',
    'hero.ctaStart': 'Start a project',
    'strip.landing': 'Landing pages',
    'strip.business': 'Business websites',
    'strip.redesign': 'Site redesigns',
    'strip.mobile': 'Mobile-first',
    'strip.invites': 'Digital invitations',
    'strip.seo': 'SEO basics included',
    'services.title': 'Services',
    'services.sub': "Four ways to work together, depending on where your business is right now — or what you're celebrating.",
    'services.landing.name': 'Landing Page',
    'services.landing.desc': 'A focused, single-page site built to convert visitors into customers. Perfect for launches, campaigns, or a simple online presence.',
    'services.landing.list': '<li>Custom design, not a template</li><li>Mobile responsive</li><li>Contact form built in</li><li>Delivered in 1–2 weeks</li>',
    'services.business.name': 'Business Website',
    'services.business.desc': 'A full multi-page site — home, about, services, contact, and more. Built to represent your brand and get found on Google.',
    'services.business.list': '<li>Up to 5 pages</li><li>Basic on-page SEO</li><li>Mobile responsive</li><li>Delivered in 2–4 weeks</li>',
    'services.refresh.name': 'Website Refresh',
    'services.refresh.desc': "Already have a site but it feels outdated or isn't converting? I'll redesign and rebuild it with modern design and better performance.",
    'services.refresh.list': '<li>Full redesign, your content</li><li>Performance & SEO audit</li><li>Mobile responsive</li><li>Delivered in 2–3 weeks</li>',
    'services.invites.name': 'Digital Invitations',
    'services.invites.desc': 'An interactive web invitation for your wedding, quinceañera, birthday, or any special event — easy to share with all your guests on WhatsApp.',
    'services.invites.list': '<li>Custom design for your event</li><li>Online RSVP</li><li>Countdown, maps, and music</li><li>Delivered in 2–3 weeks</li>',
    'services.note': 'Every project includes mobile-first design, basic on-page SEO, and a short walkthrough so you can update the site yourself.',
    'services.noteCta': 'Get in touch for a personalized quote.',
    'work.title': 'Selected work',
    'work.sub': "Sites I designed and built, for a real business and as sample projects, to show what I can do for your business. They all actually work — click any of them to try it live.",
    'work.viewSite': 'View site ↗',
    'work.aurea.tag': 'Restaurant · Demo',
    'work.aurea.title': 'Aurea — Italian restaurant',
    'work.aurea.desc': 'A fictional Italian restaurant, built to show everything a restaurant website can do.',
    'work.aurea.built': '<strong>What I built:</strong> a bilingual site (Spanish/English), a menu with a card for every dish, gallery, reviews, online bookings with user accounts, and a staff panel to manage the menu and bookings.',
    'work.grove.tag': 'Garage · Real business',
    'work.grove.title': 'Grove Autos — Bodywork repair centre',
    'work.grove.desc': 'The website of a family-run accident and bodywork repair centre in Croydon, London, with over 20 years of experience.',
    'work.grove.built': '<strong>What I built:</strong> a mobile-friendly one-page site with services, a gallery of real photos from the workshop, customer reviews, a map and tap-to-call buttons.',
    'work.sportsmode.tag': 'Online store · Demo',
    'work.sportsmode.title': 'SportsMode — Premium sports equipment',
    'work.sportsmode.desc': 'A fictional sports equipment shop, built as a demo of a complete online store.',
    'work.sportsmode.built': '<strong>What I built:</strong> product catalog by sport with search, shopping bag, Stripe checkout, user accounts, and an email newsletter.',
    'work.wedding.tag': 'Wedding · Personal project',
    'work.wedding.title': 'Wedding website',
    'work.wedding.desc': 'An interactive digital wedding invitation, in Spanish and English.',
    'work.wedding.built': '<strong>What I built:</strong> countdown, event details with map links, dress code, background music, and online RSVP.',
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
    'about.p1': "Hi, I'm Esteban González — I design and build websites for small businesses and independent brands. I care about sites that load fast, look sharp on a phone, and actually help you get customers, not just look nice in a portfolio.",
    'about.p2': "I work with you directly, no middlemen or unnecessary process — and every project in \"Selected work\" is a working site you can visit and try today, not just a picture.",
    'contact.title': "Let's build something",
    'contact.sub': "Tell me a bit about your business and what you need — message me on WhatsApp and I'll get back to you as soon as I can.",
    'contact.whatsapp': 'Message me on WhatsApp',
    'contact.whatsappHref': 'https://wa.me/447908711065?text=Hi%20Esteban%2C%20I%27m%20interested%20in%20a%20website%20for%20my%20business.',
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

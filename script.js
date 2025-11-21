// ===== MENU MÓVEL =====
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

// Toggle menu mobile
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Fechar menu ao clicar em um link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Fechar menu ao clicar fora
document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// ===== SCROLL SUAVE =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: "start"
      });
    }
  });
});

// ===== NAVEGAÇÃO FIXA COM EFEITO DE SCROLL =====
const navHeader = document.querySelector('.nav-header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // Adiciona classe quando rola
  if (currentScroll > 50) {
    navHeader.classList.add('scrolled');
  } else {
    navHeader.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// ===== DESTACAR LINK ATIVO NA NAVEGAÇÃO =====
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let current = '';
  const scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ===== ANIMAÇÃO DE ENTRADA DOS ELEMENTOS =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observar elementos para animação
document.querySelectorAll('.galeria-item, .local-info').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
  observer.observe(el);
});

// ===== PARALLAX SUAVE NO HERO =====
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  const scrolled = window.pageYOffset;
  if (hero && scrolled < hero.offsetHeight) {
    hero.style.transform = `translateY(${scrolled * 0.4}px)`;
    hero.style.opacity = 1 - (scrolled / hero.offsetHeight) * 0.5;
  }
});

// ===== CONTADOR DE ANIMAÇÃO (OPCIONAL) =====
function animateValue(element, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    element.textContent = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// ===== LAZY LOADING DE IMAGENS =====
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.add('loaded');
      observer.unobserve(img);
    }
  });
});

images.forEach(img => imageObserver.observe(img));

// ===== PREVENÇÃO DE REDIMENSIONAMENTO EM MOBILE =====
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// ===== CARROSSEL DE DEPOIMENTOS =====
const wrapper = document.getElementById('carouselWrapper');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('carouselDots');
        
let currentIndex = 0;
let slidesToShow = 1;
let totalSlides = document.querySelectorAll('.review-card').length;

function updateSlidesToShow() {
  if (window.innerWidth >= 1024) {
    slidesToShow = 3;
  } else if (window.innerWidth >= 768) {
    slidesToShow = 2;
  } else {
    slidesToShow = 1;
  }
}

function createDots() {
  dotsContainer.innerHTML = '';
  const totalDots = Math.ceil(totalSlides / slidesToShow);
  
  for (let i = 0; i < totalDots; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }
}

function updateDots() {
  const dots = document.querySelectorAll('.dot');
  const activeDotIndex = Math.floor(currentIndex / slidesToShow);
  
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === activeDotIndex);
  });
}

function updateCarousel() {
  const slideWidth = 100 / slidesToShow;
  wrapper.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
  updateDots();
}

function goToSlide(index) {
  currentIndex = index * slidesToShow;
  updateCarousel();
}

function nextSlide() {
  if (currentIndex < totalSlides - slidesToShow) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalSlides - slidesToShow;
  }
  updateCarousel();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
// Auto-play
let autoplayInterval = setInterval(nextSlide, 5000);
// Pause on hover
wrapper.addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
});

wrapper.addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(nextSlide, 5000);
});

// Touch support
let touchStartX = 0;
let touchEndX = 0;

wrapper.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

wrapper.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  if (touchStartX - touchEndX > 50) {
    nextSlide();
  } else if (touchEndX - touchStartX > 50) {
    prevSlide();
  }
}
// Initialize
updateSlidesToShow();
createDots();
updateCarousel();

// Update on resize
window.addEventListener('resize', () => {
  updateSlidesToShow();
  createDots();
  currentIndex = 0;
  updateCarousel();
});

// ===== CARROSSEL INFINITO DE PLANOS =====
const planosWrapper = document.getElementById('planosWrapper');
if (planosWrapper) {
  const planos = planosWrapper.innerHTML;
  planosWrapper.innerHTML = planos + planos;
}

// ===== LOG DE INICIALIZAÇÃO =====
console.log('🧠 Site da Psicóloga Meire França carregado com sucesso!');
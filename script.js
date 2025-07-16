// Updated script.js with 5s logo transition and responsive logic
let currentIndex = 0;
const sections = ['home', 'about', 'experience', 'skills', 'contact'];
const infoText = {
  home: 'Welcome to my futuristic portfolio.',
  about: 'Learn more about my background.',
  experience: 'Explore my past work and roles.',
  skills: 'Check out my technical and leadership skills.',
  contact: 'Get in touch or download my resume.'
};

function showPage(id) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
  document.getElementById('info-text').innerText = infoText[id];
  currentIndex = sections.indexOf(id);
}

function nextPage() {
  currentIndex = (currentIndex + 1) % sections.length;
  showPage(sections[currentIndex]);
}

function prevPage() {
  currentIndex = (currentIndex - 1 + sections.length) % sections.length;
  showPage(sections[currentIndex]);
}

function expandLogo() {
  const logo = document.getElementById('dynamic-logo');
  logo.style.transition = 'opacity 2s ease';
  logo.style.opacity = 0;
  setTimeout(() => {
    logo.innerText = (logo.innerText === 'F') ? 'Faheem Iqbal' : 'F';
    logo.style.opacity = 1;
  }, 2000);
}

// Auto toggle logo every 5 seconds (2s fade, 3s pause)
setInterval(() => {
  expandLogo();
}, 5000);

window.onload = () => {
  showPage('home');
};

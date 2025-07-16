// Expand single letter logo to full name with sparkle, ripple, and fade effect
function expandLogo() {
  const logo = document.getElementById('dynamic-logo');
  const container = document.querySelector('.logo-container');

  // Create sparkle effect
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  container.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 800);

  // Create ripple
  const ripple = document.createElement('div');
  ripple.classList.add('ripple');
  container.appendChild(ripple);
  setTimeout(() => ripple.remove(), 800);

  // Fade out and change
  logo.style.transition = 'opacity 0.5s ease';
  logo.style.opacity = 0;
  setTimeout(() => {
    if (logo.innerText === 'F') {
      logo.innerText = 'Faheem Iqbal';
      logo.style.fontSize = '3em';
    } else {
      logo.innerText = 'F';
      logo.style.fontSize = '8em';
    }
    logo.style.opacity = 1;
  }, 500);
}

// Switch logo styles per section (future extension placeholder)
function switchLogo(section) {
  const logo = document.getElementById('dynamic-logo');
  logo.className = section;
}

// Add pulse effect on click
document.addEventListener('click', function (e) {
  const pulse = document.createElement('div');
  pulse.classList.add('click-pulse');
  pulse.style.left = `${e.pageX}px`;
  pulse.style.top = `${e.pageY}px`;
  document.body.appendChild(pulse);
  setTimeout(() => pulse.remove(), 1000);
});

// Particle background (simple Three.js scene)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bg') });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 5000;
const posArray = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
  posArray[i] = (Math.random() - 0.5) * 50;
}
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

const material = new THREE.PointsMaterial({ size: 0.02, color: '#00ffff' });
const particleMesh = new THREE.Points(particlesGeometry, material);
scene.add(particleMesh);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  particleMesh.rotation.y += 0.0008;
  particleMesh.rotation.x += 0.0005;
  renderer.render(scene, camera);
}
animate();

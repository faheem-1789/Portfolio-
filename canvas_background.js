// canvas_background.js — Bubbly background with interactive motion
const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const bubbles = [];
for (let i = 0; i < 60; i++) {
  bubbles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 8 + 2,
    dx: Math.random() * 0.5 - 0.25,
    dy: Math.random() * 0.5 - 0.25
  });
}

function draw() {
  ctx.fillStyle = 'rgba(10, 15, 25, 0.4)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  bubbles.forEach(bubble => {
    ctx.beginPath();
    ctx.arc(bubble.x, bubble.y, bubble.r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0,255,255,0.3)';
    ctx.fill();
    bubble.x += bubble.dx;
    bubble.y += bubble.dy;

    if (bubble.x < 0 || bubble.x > canvas.width) bubble.dx *= -1;
    if (bubble.y < 0 || bubble.y > canvas.height) bubble.dy *= -1;
  });
  requestAnimationFrame(draw);
}

draw();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

window.addEventListener('click', () => {
  bubbles.forEach(b => {
    b.dx = (Math.random() - 0.5) * 2;
    b.dy = (Math.random() - 0.5) * 2;
  });
});

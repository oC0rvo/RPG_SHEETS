const canvas = document.getElementById("smoke");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

class SmokeParticle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + Math.random() * 200;

    this.radius = Math.random() * 120 + 80;

    this.vx = Math.random() * 0.3 - 0.15;
    this.vy = Math.random() * -0.3 - 0.1;

    this.alpha = Math.random() * 0.02 + 0.03;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.radius += 0.15;
  }

  draw() {
    const gradient = ctx.createRadialGradient(
      this.x, this.y, this.radius * 0.2,
      this.x, this.y, this.radius
    );

    gradient.addColorStop(0, `rgba(120, 0, 0, ${this.alpha})`);
    gradient.addColorStop(0.6, `rgba(80, 0, 0, ${this.alpha * 0.6})`);
    gradient.addColorStop(1, `rgba(0, 0, 0, 0)`);

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

const particles = [];

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (particles.length < 60) {
    particles.push(new SmokeParticle());
  }

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();

    if (particles[i].y + particles[i].radius < -300) {
      particles.splice(i, 1);
      i--;
    }
  }

  requestAnimationFrame(animate);
}

animate();


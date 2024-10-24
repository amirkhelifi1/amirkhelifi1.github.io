class ParticleSystem {
  constructor() {
    this.particles = [];
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.setupCanvas();
    this.animate();
  }

  setupCanvas() {
    this.canvas.style.position = "fixed";
    this.canvas.style.top = "0";
    this.canvas.style.left = "0";
    this.canvas.style.width = "100%";
    this.canvas.style.height = "100%";
    this.canvas.style.zIndex = "-1";
    this.canvas.style.pointerEvents = "none";
    document.body.appendChild(this.canvas);

    this.resize();
    window.addEventListener("resize", () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createParticle(x, y, color) {
    return {
      x,
      y,
      color,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      size: Math.random() * 3 + 1,
      life: 1,
      decay: 0.02,
    };
  }

  addParticles(x, y, color, count = 10) {
    for (let i = 0; i < count; i++) {
      this.particles.push(this.createParticle(x, y, color));
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];

      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay;

      if (p.life <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `${p.color}${Math.floor(p.life * 255)
        .toString(16)
        .padStart(2, "0")}`;
      this.ctx.fill();
    }

    requestAnimationFrame(() => this.animate());
  }
}

// Créer le système de particules
const particles = new ParticleSystem();

// Exporter la fonction pour créer des particules
window.createParticles = (x, y, color) => {
  particles.addParticles(x, y, color);
};

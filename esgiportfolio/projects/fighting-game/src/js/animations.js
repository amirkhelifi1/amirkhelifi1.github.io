class SpriteAnimation {
  constructor(imageUrl, frames) {
    this.image = new Image();
    this.image.src = imageUrl;
    this.frames = frames;
    this.frameWidth = 0;
    this.currentFrame = 0;
    this.animationSpeed = 5;
    this.frameCount = 0;

    this.image.onload = () => {
      this.frameWidth = this.image.width / this.frames;
    };
  }

  update() {
    this.frameCount++;
    if (this.frameCount >= this.animationSpeed) {
      this.currentFrame = (this.currentFrame + 1) % this.frames;
      this.frameCount = 0;
    }
  }

  draw(ctx, x, y, width, height, flipX = false) {
    if (!this.frameWidth) return;

    if (flipX) {
      ctx.save();
      ctx.scale(-1, 1);
      ctx.drawImage(
        this.image,
        this.currentFrame * this.frameWidth,
        0,
        this.frameWidth,
        this.image.height,
        -x - width,
        y,
        width,
        height
      );
      ctx.restore();
    } else {
      ctx.drawImage(
        this.image,
        this.currentFrame * this.frameWidth,
        0,
        this.frameWidth,
        this.image.height,
        x,
        y,
        width,
        height
      );
    }
  }
}

// Animation des particules pour les coups
class ParticleSystem {
  constructor() {
    this.particles = [];
  }

  createParticle(x, y, color) {
    return {
      x,
      y,
      color,
      velocity: {
        x: (Math.random() - 0.5) * 8,
        y: (Math.random() - 0.5) * 8,
      },
      size: Math.random() * 3 + 2,
      life: 1,
      decay: 0.02,
    };
  }

  addParticles(x, y, color, count = 10) {
    for (let i = 0; i < count; i++) {
      this.particles.push(this.createParticle(x, y, color));
    }
  }

  update() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.velocity.x;
      p.y += p.velocity.y;
      p.life -= p.decay;

      if (p.life <= 0) {
        this.particles.splice(i, 1);
      }
    }
  }

  draw(ctx) {
    this.particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `${p.color}${Math.floor(p.life * 255)
        .toString(16)
        .padStart(2, "0")}`;
      ctx.fill();
    });
  }
}

const particleSystem = new ParticleSystem();

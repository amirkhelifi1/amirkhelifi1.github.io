class Fighter {
  constructor(name, x, y, direction, color) {
    this.name = name;
    this.position = {
      x: x,
      y: y,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.width = 50;
    this.height = 150;
    this.direction = direction;
    this.color = color;
    this.attackBox = {
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      width: 100,
      height: 50,
      offset: direction === "right" ? 0 : -50,
    };
    this.isAttacking = false;
    this.health = 100;
    this.isJumping = false;
    this.gravity = 0.7;
    this.jumpStrength = -15;

    // États d'animation
    this.sprites = {
      idle: {
        imageUrl: `src/assets/images/${name}-idle.png`,
        frames: 8,
      },
      run: {
        imageUrl: `src/assets/images/${name}-run.png`,
        frames: 8,
      },
      jump: {
        imageUrl: `src/assets/images/${name}-jump.png`,
        frames: 3,
      },
      attack: {
        imageUrl: `src/assets/images/${name}-attack.png`,
        frames: 6,
      },
    };
    this.currentSprite = "idle";
    this.frameIndex = 0;
  }

  update() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    // Mise à jour de la boîte d'attaque
    this.attackBox.position.x = this.position.x + this.attackBox.offset;
    this.attackBox.position.y = this.position.y;

    // Application de la gravité
    if (this.position.y + this.height < canvas.height) {
      this.velocity.y += this.gravity;
    } else {
      this.velocity.y = 0;
      this.position.y = canvas.height - this.height;
      this.isJumping = false;
    }
  }

  attack() {
    this.isAttacking = true;
    setTimeout(() => {
      this.isAttacking = false;
    }, 100);
  }

  jump() {
    if (!this.isJumping) {
      this.velocity.y = this.jumpStrength;
      this.isJumping = true;
    }
  }

  draw(ctx) {
    // Dessiner le personnage
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

    // Dessiner la boîte d'attaque si le personnage attaque
    if (this.isAttacking) {
      ctx.fillStyle = "red";
      ctx.fillRect(
        this.attackBox.position.x,
        this.attackBox.position.y,
        this.attackBox.width,
        this.attackBox.height
      );
    }
  }

  takeHit() {
    this.health -= 20;
    if (this.health < 0) this.health = 0;
  }
}

// Création des personnages
const player1 = new Fighter("samurai", 100, 0, "right", "#ff2e63");
const player2 = new Fighter("ninja", 700, 0, "left", "#009ffd");

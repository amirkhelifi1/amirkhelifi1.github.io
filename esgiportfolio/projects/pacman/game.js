class Game {
  constructor() {
    this.canvas = document.getElementById("gameCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.score = 0;
    this.lives = 3;
    this.level = [
      [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1,
      ],
      [
        1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        2, 2, 2, 1,
      ],
      [
        1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1,
        1, 1, 2, 1,
      ],
      [
        1, 3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1,
        1, 1, 3, 1,
      ],
      [
        1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1,
        1, 1, 2, 1,
      ],
      [
        1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        2, 2, 2, 1,
      ],
      [
        1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1,
        1, 1, 2, 1,
      ],
      [
        1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1,
        1, 1, 2, 1,
      ],
      [
        1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2,
        2, 2, 2, 1,
      ],
      [
        1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 1,
        1, 1, 1, 1,
      ],
      [
        1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 1,
        1, 1, 1, 1,
      ],
      [
        1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 1, 1,
        1, 1, 1, 1,
      ],
      [
        1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 1, 1,
        1, 1, 1, 1,
      ],
      [
        1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 2, 1, 1,
        1, 1, 1, 1,
      ],
      [
        0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0,
        0, 0, 0, 0,
      ],
      [
        1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 2, 1, 1,
        1, 1, 1, 1,
      ],
      [
        1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 1, 1,
        1, 1, 1, 1,
      ],
      [
        1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 1, 1,
        1, 1, 1, 1,
      ],
      [
        1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 1, 1,
        1, 1, 1, 1,
      ],
      [
        1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        2, 2, 2, 1,
      ],
      [
        1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1,
        1, 1, 2, 1,
      ],
      [
        1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1,
        1, 1, 2, 1,
      ],
      [
        1, 3, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1,
        2, 2, 3, 1,
      ],
      [
        1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1,
        2, 1, 1, 1,
      ],
      [
        1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1,
        2, 1, 1, 1,
      ],
      [
        1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2,
        2, 2, 2, 1,
      ],
      [
        1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 2, 1,
      ],
      [
        1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 2, 1,
      ],
      [
        1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        2, 2, 2, 1,
      ],
      [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1,
      ],
    ];
    this.pacman = {
      x: 14,
      y: 23,
      direction: { x: 0, y: 0 },
      nextDirection: { x: 0, y: 0 },
      mouthOpen: 0.2,
      mouthSpeed: 0.2,
      speed: 0.15,
    };
    this.ghosts = [
      {
        x: 14,
        y: 11,
        color: "#FF0000",
        direction: { x: 0, y: 0 },
        mode: "scatter",
      }, // Rouge
      {
        x: 13,
        y: 14,
        color: "#FFB8FF",
        direction: { x: 0, y: 0 },
        mode: "scatter",
      }, // Rose
      {
        x: 14,
        y: 14,
        color: "#00FFFF",
        direction: { x: 0, y: 0 },
        mode: "scatter",
      }, // Cyan
      {
        x: 15,
        y: 14,
        color: "#FFB852",
        direction: { x: 0, y: 0 },
        mode: "scatter",
      }, // Orange
    ];
    this.powerMode = false;
    this.powerModeTimer = null;
    this.setupCanvas();
    this.setupEventListeners();
  }

  setupCanvas() {
    const updateCanvasSize = () => {
      const maxWidth = window.innerWidth;
      const maxHeight = window.innerHeight - 100;

      if (maxWidth / maxHeight > 4 / 3) {
        this.canvas.height = maxHeight;
        this.canvas.width = (maxHeight * 4) / 3;
      } else {
        this.canvas.width = maxWidth;
        this.canvas.height = (maxWidth * 3) / 4;
      }

      this.tileSize = Math.floor(this.canvas.width / 28);
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);
  }

  start() {
    this.gameLoop();
  }

  gameLoop() {
    this.update();
    this.draw();
    requestAnimationFrame(() => this.gameLoop());
  }

  update() {
    this.updatePacman();
    this.updateGhosts();
    this.checkCollisions();
    this.updateUI();
  }

  updatePacman() {
    // Animation de la bouche
    this.pacman.mouthOpen += this.pacman.mouthSpeed;
    if (this.pacman.mouthOpen > 0.5 || this.pacman.mouthOpen < 0) {
      this.pacman.mouthSpeed = -this.pacman.mouthSpeed;
    }

    // Vérifier si la direction suivante est possible
    let nextX = this.pacman.x + this.pacman.nextDirection.x * this.pacman.speed;
    let nextY = this.pacman.y + this.pacman.nextDirection.y * this.pacman.speed;

    if (this.isValidPosition(nextX, nextY)) {
      this.pacman.direction = { ...this.pacman.nextDirection };
    }

    // Déplacer Pac-Man
    nextX = this.pacman.x + this.pacman.direction.x * this.pacman.speed;
    nextY = this.pacman.y + this.pacman.direction.y * this.pacman.speed;

    if (this.isValidPosition(nextX, nextY)) {
      this.pacman.x = nextX;
      this.pacman.y = nextY;

      // Tunnel
      if (this.pacman.x < 0) this.pacman.x = 27;
      if (this.pacman.x > 27) this.pacman.x = 0;
    }

    // Manger les points
    const tileX = Math.floor(this.pacman.x);
    const tileY = Math.floor(this.pacman.y);

    if (this.level[tileY][tileX] === 2) {
      this.level[tileY][tileX] = 0;
      this.score += 10;
    } else if (this.level[tileY][tileX] === 3) {
      this.level[tileY][tileX] = 0;
      this.score += 50;
      this.activatePowerMode();
    }
  }

  updateGhosts() {
    this.ghosts.forEach((ghost) => {
      if (Math.random() < 0.05) {
        const possibleDirections = this.getPossibleDirections(ghost.x, ghost.y);
        if (possibleDirections.length > 0) {
          const randomDirection =
            possibleDirections[
              Math.floor(Math.random() * possibleDirections.length)
            ];
          ghost.direction = randomDirection;
        }
      }

      const nextX = ghost.x + ghost.direction.x * 0.1;
      const nextY = ghost.y + ghost.direction.y * 0.1;

      if (this.isValidPosition(nextX, nextY)) {
        ghost.x = nextX;
        ghost.y = nextY;
      }
    });
  }

  getPossibleDirections(x, y) {
    const directions = [
      { x: 1, y: 0 },
      { x: -1, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: -1 },
    ];

    return directions.filter((dir) =>
      this.isValidPosition(x + dir.x, y + dir.y)
    );
  }

  isValidPosition(x, y) {
    const tileX = Math.floor(x);
    const tileY = Math.floor(y);

    if (tileY < 0 || tileY >= this.level.length) return false;
    if (tileX < 0 || tileX >= this.level[0].length) return true; // Pour le tunnel

    return this.level[tileY][tileX] !== 1;
  }

  checkCollisions() {
    this.ghosts.forEach((ghost) => {
      const distance = Math.hypot(
        ghost.x - this.pacman.x,
        ghost.y - this.pacman.y
      );

      if (distance < 0.5) {
        if (this.powerMode) {
          ghost.x = 14;
          ghost.y = 14;
          this.score += 200;
        } else {
          this.lives--;
          if (this.lives <= 0) {
            this.gameOver();
          } else {
            this.resetPositions();
          }
        }
      }
    });
  }

  activatePowerMode() {
    this.powerMode = true;
    if (this.powerModeTimer) clearTimeout(this.powerModeTimer);
    this.powerModeTimer = setTimeout(() => {
      this.powerMode = false;
    }, 10000);
  }

  resetPositions() {
    this.pacman.x = 14;
    this.pacman.y = 23;
    this.pacman.direction = { x: 0, y: 0 };
    this.pacman.nextDirection = { x: 0, y: 0 };

    this.ghosts.forEach((ghost, index) => {
      ghost.x = 13 + index;
      ghost.y = 14;
      ghost.direction = { x: 0, y: 0 };
    });
  }

  draw() {
    this.ctx.fillStyle = "#000";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Dessiner le labyrinthe
    for (let y = 0; y < this.level.length; y++) {
      for (let x = 0; x < this.level[y].length; x++) {
        const tile = this.level[y][x];
        const screenX = x * this.tileSize;
        const screenY = y * this.tileSize;

        if (tile === 1) {
          this.ctx.fillStyle = "#2121DE";
          this.ctx.fillRect(screenX, screenY, this.tileSize, this.tileSize);
        } else if (tile === 2) {
          this.ctx.fillStyle = "#FFFFFF";
          this.ctx.beginPath();
          this.ctx.arc(
            screenX + this.tileSize / 2,
            screenY + this.tileSize / 2,
            this.tileSize / 8,
            0,
            Math.PI * 2
          );
          this.ctx.fill();
        } else if (tile === 3) {
          this.ctx.fillStyle = "#FFFFFF";
          this.ctx.beginPath();
          this.ctx.arc(
            screenX + this.tileSize / 2,
            screenY + this.tileSize / 2,
            this.tileSize / 3,
            0,
            Math.PI * 2
          );
          this.ctx.fill();
        }
      }
    }

    // Dessiner Pac-Man
    const pacmanX = this.pacman.x * this.tileSize + this.tileSize / 2;
    const pacmanY = this.pacman.y * this.tileSize + this.tileSize / 2;

    this.ctx.save();
    this.ctx.translate(pacmanX, pacmanY);

    // Rotation selon la direction
    let rotation = 0;
    if (this.pacman.direction.x === 1) rotation = 0;
    if (this.pacman.direction.x === -1) rotation = Math.PI;
    if (this.pacman.direction.y === -1) rotation = -Math.PI / 2;
    if (this.pacman.direction.y === 1) rotation = Math.PI / 2;

    this.ctx.rotate(rotation);

    // Dessin de Pac-Man
    this.ctx.beginPath();
    this.ctx.arc(
      0,
      0,
      this.tileSize / 2,
      this.pacman.mouthOpen,
      Math.PI * 2 - this.pacman.mouthOpen
    );
    this.ctx.lineTo(0, 0);
    this.ctx.fillStyle = "#FFFF00";
    this.ctx.fill();

    this.ctx.restore();

    // Dessiner les fantômes
    this.ghosts.forEach((ghost) => {
      const ghostX = ghost.x * this.tileSize;
      const ghostY = ghost.y * this.tileSize;

      // Corps du fantôme
      this.ctx.fillStyle = this.powerMode ? "#2121DE" : ghost.color;
      this.ctx.beginPath();
      this.ctx.arc(
        ghostX + this.tileSize / 2,
        ghostY + this.tileSize / 2,
        this.tileSize / 2,
        Math.PI,
        0
      );
      this.ctx.lineTo(ghostX + this.tileSize, ghostY + this.tileSize);

      // Base ondulée
      for (let i = 0; i < 3; i++) {
        const waveHeight = this.tileSize / 6;
        this.ctx.quadraticCurveTo(
          ghostX + this.tileSize * (1 - i / 3),
          ghostY + this.tileSize - waveHeight,
          ghostX + this.tileSize * (2 / 3 - i / 3),
          ghostY + this.tileSize
        );
      }

      this.ctx.fill();

      // Yeux
      this.drawGhostEyes(ghost);
    });

    // Score et vies
    this.updateUI();
  }

  drawGhostEyes(ghost) {
    const ghostX = ghost.x * this.tileSize;
    const ghostY = ghost.y * this.tileSize;
    const eyeSize = this.tileSize / 6;

    // Blancs des yeux
    this.ctx.fillStyle = "white";
    this.ctx.beginPath();
    this.ctx.arc(
      ghostX + this.tileSize / 3,
      ghostY + this.tileSize / 2,
      eyeSize,
      0,
      Math.PI * 2
    );
    this.ctx.arc(
      ghostX + (this.tileSize * 2) / 3,
      ghostY + this.tileSize / 2,
      eyeSize,
      0,
      Math.PI * 2
    );
    this.ctx.fill();

    // Pupilles
    this.ctx.fillStyle = "blue";
    this.ctx.beginPath();
    this.ctx.arc(
      ghostX + this.tileSize / 3 + (ghost.direction.x * eyeSize) / 2,
      ghostY + this.tileSize / 2 + (ghost.direction.y * eyeSize) / 2,
      eyeSize / 2,
      0,
      Math.PI * 2
    );
    this.ctx.arc(
      ghostX + (this.tileSize * 2) / 3 + (ghost.direction.x * eyeSize) / 2,
      ghostY + this.tileSize / 2 + (ghost.direction.y * eyeSize) / 2,
      eyeSize / 2,
      0,
      Math.PI * 2
    );
    this.ctx.fill();
  }

  updateUI() {
    document.getElementById("score").textContent = this.score;
    document.getElementById("lives").textContent = this.lives;
  }

  gameOver() {
    // Afficher Game Over
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.75)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.fillStyle = "#FFFF00";
    this.ctx.font = "48px Arial";
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";
    this.ctx.fillText(
      "GAME OVER",
      this.canvas.width / 2,
      this.canvas.height / 2
    );

    this.ctx.fillStyle = "#FFFFFF";
    this.ctx.font = "24px Arial";
    this.ctx.fillText(
      "Appuyez sur ESPACE pour recommencer",
      this.canvas.width / 2,
      this.canvas.height / 2 + 50
    );
  }

  resetGame() {
    this.score = 0;
    this.lives = 3;
    this.powerMode = false;
    if (this.powerModeTimer) clearTimeout(this.powerModeTimer);
    this.resetPositions();
    this.level = JSON.parse(JSON.stringify(this.originalLevel));
  }

  setDirection(x, y) {
    this.pacman.nextDirection = { x, y };
  }

  setupEventListeners() {
    window.addEventListener("keydown", (e) => {
      if (
        [
          "ArrowUp",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight",
          "z",
          "q",
          "s",
          "d",
          "Z",
          "Q",
          "S",
          "D",
        ].includes(e.key)
      ) {
        e.preventDefault();
      }

      switch (e.key.toLowerCase()) {
        case "arrowup":
        case "z":
          this.setDirection(0, -1);
          break;
        case "arrowdown":
        case "s":
          this.setDirection(0, 1);
          break;
        case "arrowleft":
        case "q":
          this.setDirection(-1, 0);
          break;
        case "arrowright":
        case "d":
          this.setDirection(1, 0);
          break;
        case " ":
          if (this.lives <= 0) {
            this.resetGame();
          }
          break;
      }
    });

    document.getElementById("startButton").addEventListener("click", () => {
      document.getElementById("instructions").style.display = "none";
      this.start();
    });
  }
}

// Démarrer le jeu
window.addEventListener("load", () => {
  new Game();
});

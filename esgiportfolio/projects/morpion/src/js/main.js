class TicTacToe {
  constructor() {
    this.board = Array(9).fill(null);
    this.currentPlayer = "X";
    this.gameActive = true;
    this.isAIMode = false;
    this.scores = { X: 0, O: 0 };

    // Sons
    this.sounds = {
      place: new Audio("data:audio/wav;base64,UklGRl9vT19..."), // Son de placement
      win: new Audio("data:audio/wav;base64,UklGRl9vT19..."), // Son de victoire
      draw: new Audio("data:audio/wav;base64,UklGRl9vT19..."), // Son de match nul
    };

    // Éléments DOM
    this.statusDisplay = document.querySelector(".status");
    this.cells = document.querySelectorAll(".cell");
    this.restartButton = document.querySelector("#restart-btn");
    this.resetScoreButton = document.querySelector("#reset-score");
    this.pvpModeButton = document.querySelector("#pvp-mode");
    this.aiModeButton = document.querySelector("#ai-mode");
    this.difficultySelect = document.querySelector("#ai-difficulty");
    this.difficultyContainer = document.querySelector(".difficulty");

    this.initializeGame();
  }

  initializeGame() {
    this.cells.forEach((cell) => {
      cell.addEventListener("click", () => this.handleCellClick(cell));
    });

    this.restartButton.addEventListener("click", () => this.restartGame());
    this.resetScoreButton.addEventListener("click", () => this.resetScores());
    this.pvpModeButton.addEventListener("click", () => this.setGameMode(false));
    this.aiModeButton.addEventListener("click", () => this.setGameMode(true));

    this.loadScores();
    this.updateStatusDisplay();
  }

  setGameMode(isAI) {
    this.isAIMode = isAI;
    this.difficultyContainer.classList.toggle("visible", isAI);
    this.restartGame();

    this.pvpModeButton.classList.toggle("btn-primary", !isAI);
    this.aiModeButton.classList.toggle("btn-primary", isAI);
  }

  handleCellClick(cell) {
    const index = cell.getAttribute("data-index");

    if (this.board[index] || !this.gameActive) return;

    this.makeMove(index);

    if (this.isAIMode && this.gameActive && this.currentPlayer === "O") {
      setTimeout(() => this.makeAIMove(), 500);
    }
  }

  makeMove(index) {
    this.board[index] = this.currentPlayer;
    const cell = this.cells[index];
    cell.textContent = this.currentPlayer;
    cell.classList.add(this.currentPlayer.toLowerCase(), "played");

    this.sounds.place.play().catch(() => {});

    if (this.checkWinner()) {
      this.handleWin();
      return;
    }

    if (this.checkDraw()) {
      this.handleDraw();
      return;
    }

    this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
    this.updateStatusDisplay();
  }

  makeAIMove() {
    const difficulty = this.difficultySelect.value;
    let index;

    switch (difficulty) {
      case "hard":
        index = this.getBestMove();
        break;
      case "medium":
        index = Math.random() < 0.6 ? this.getBestMove() : this.getRandomMove();
        break;
      default:
        index = this.getRandomMove();
    }

    if (index !== null) {
      this.makeMove(index);
    }
  }

  getBestMove() {
    let bestScore = -Infinity;
    let bestMove = null;

    for (let i = 0; i < 9; i++) {
      if (!this.board[i]) {
        this.board[i] = "O";
        let score = this.minimax(this.board, 0, false);
        this.board[i] = null;

        if (score > bestScore) {
          bestScore = score;
          bestMove = i;
        }
      }
    }

    return bestMove;
  }

  minimax(board, depth, isMaximizing) {
    const scores = {
      X: -1,
      O: 1,
      draw: 0,
    };

    let result = this.checkGameEnd();
    if (result) return scores[result];

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (!board[i]) {
          board[i] = "O";
          let score = this.minimax(board, depth + 1, false);
          board[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 9; i++) {
        if (!board[i]) {
          board[i] = "X";
          let score = this.minimax(board, depth + 1, true);
          board[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  }

  getRandomMove() {
    const emptyCells = this.board
      .map((cell, index) => (cell === null ? index : null))
      .filter((cell) => cell !== null);

    return emptyCells[Math.floor(Math.random() * emptyCells.length)];
  }

  handleWin() {
    this.sounds.win.play().catch(() => {});
    this.scores[this.currentPlayer]++;
    this.saveScores();
    this.updateScoreDisplay();

    const winningCombination = this.getWinningCombination();
    winningCombination.forEach((index) => {
      this.cells[index].classList.add("winner");
    });

    this.statusDisplay.textContent = `Joueur ${this.currentPlayer} a gagné !`;
    this.gameActive = false;
  }

  handleDraw() {
    this.sounds.draw.play().catch(() => {});
    this.statusDisplay.textContent = "Match nul !";
    this.gameActive = false;
  }

  checkWinner() {
    return this.getWinningCombination() !== null;
  }

  getWinningCombination() {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Lignes
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Colonnes
      [0, 4, 8],
      [2, 4, 6], // Diagonales
    ];

    return (
      winningCombos.find((combo) => {
        return combo.every((index) => {
          return this.board[index] === this.currentPlayer;
        });
      }) || null
    );
  }

  checkDraw() {
    return this.board.every((cell) => cell !== null);
  }

  updateStatusDisplay() {
    this.statusDisplay.textContent = `C'est au tour du joueur ${this.currentPlayer}`;
  }

  restartGame() {
    this.board = Array(9).fill(null);
    this.currentPlayer = "X";
    this.gameActive = true;

    this.cells.forEach((cell) => {
      cell.textContent = "";
      cell.classList.remove("x", "o", "winner", "played");
    });

    this.updateStatusDisplay();
  }

  resetScores() {
    this.scores = { X: 0, O: 0 };
    this.saveScores();
    this.updateScoreDisplay();
    this.restartGame();
  }

  saveScores() {
    localStorage.setItem("morpionScores", JSON.stringify(this.scores));
  }

  loadScores() {
    const savedScores = localStorage.getItem("morpionScores");
    if (savedScores) {
      this.scores = JSON.parse(savedScores);
      this.updateScoreDisplay();
    }
  }

  updateScoreDisplay() {
    document.getElementById("score-x").textContent = this.scores.X;
    document.getElementById("score-o").textContent = this.scores.O;
  }
}

// Initialiser le jeu quand le DOM est chargé
document.addEventListener("DOMContentLoaded", () => {
  const game = new TicTacToe();
});

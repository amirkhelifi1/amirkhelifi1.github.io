const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

let timer = 60;
let timerId;

function updatePlayerMovement() {
  // Mouvement Joueur 1
  player1.velocity.x = 0;
  if (keys.q.pressed) player1.velocity.x = -5;
  if (keys.d.pressed) player1.velocity.x = 5;
  if (keys.z.pressed) player1.jump();

  // Mouvement Joueur 2
  player2.velocity.x = 0;
  if (keys.ArrowLeft.pressed) player2.velocity.x = -5;
  if (keys.ArrowRight.pressed) player2.velocity.x = 5;
  if (keys.ArrowUp.pressed) player2.jump();
}

function checkCollision() {
  if (
    player1.isAttacking &&
    player1.attackBox.position.x + player1.attackBox.width >=
      player2.position.x &&
    player1.attackBox.position.x <= player2.position.x + player2.width &&
    player1.attackBox.position.y + player1.attackBox.height >=
      player2.position.y &&
    player1.attackBox.position.y <= player2.position.y + player2.height
  ) {
    player1.isAttacking = false;
    player2.takeHit();
    document.getElementById("player2Health").style.width = player2.health + "%";
  }

  if (
    player2.isAttacking &&
    player2.attackBox.position.x <= player1.position.x + player1.width &&
    player2.attackBox.position.y + player2.attackBox.height >=
      player1.position.y &&
    player2.attackBox.position.y <= player1.position.y + player1.height
  ) {
    player2.isAttacking = false;
    player1.takeHit();
    document.getElementById("player1Health").style.width = player1.health + "%";
  }
}

function checkWinner() {
  if (timer === 0) {
    if (player1.health === player2.health) {
      displayResult("Match nul !");
    } else if (player1.health > player2.health) {
      displayResult("Joueur 1 Gagne !");
    } else {
      displayResult("Joueur 2 Gagne !");
    }
  }

  if (player1.health <= 0) {
    displayResult("Joueur 2 Gagne !");
  } else if (player2.health <= 0) {
    displayResult("Joueur 1 Gagne !");
  }
}

function displayResult(text) {
  clearTimeout(timerId);
  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.font = "60px Arial";
  ctx.textAlign = "center";
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  // Bouton Rejouer
  ctx.font = "30px Arial";
  ctx.fillText(
    "Appuyez sur Espace pour rejouer",
    canvas.width / 2,
    canvas.height / 2 + 50
  );

  gameOver = true;
}

function decreaseTimer() {
  if (timer > 0) {
    timerId = setTimeout(decreaseTimer, 1000);
    timer--;
    document.getElementById("timer").innerHTML = timer;
  }

  if (timer === 0) {
    checkWinner();
  }
}

function drawBackground() {
  // Dessiner le fond
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, "#2c3e50");
  gradient.addColorStop(1, "#3498db");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Dessiner le sol
  ctx.fillStyle = "#2ecc71";
  ctx.fillRect(0, canvas.height - 20, canvas.width, 20);
}

function animate() {
  window.requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawBackground();

  updatePlayerMovement();

  player1.update();
  player2.update();

  player1.draw(ctx);
  player2.draw(ctx);

  checkCollision();
  checkWinner();
}

// Gestion du redémarrage
window.addEventListener("keydown", (event) => {
  if (event.code === "Space" && gameOver) {
    resetGame();
  }
});

function resetGame() {
  player1.health = 100;
  player2.health = 100;
  player1.position.x = 100;
  player1.position.y = 0;
  player2.position.x = 700;
  player2.position.y = 0;
  timer = 60;
  document.getElementById("player1Health").style.width = "100%";
  document.getElementById("player2Health").style.width = "100%";
  document.getElementById("timer").innerHTML = timer;
  gameOver = false;
  decreaseTimer();
}

// Variables globales
let gameOver = false;

// Démarrage du jeu
decreaseTimer();
animate();

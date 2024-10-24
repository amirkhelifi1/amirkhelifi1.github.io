const keys = {
  // Contrôles Joueur 1
  z: { pressed: false },
  q: { pressed: false },
  s: { pressed: false },
  d: { pressed: false },
  f: { pressed: false },
  g: { pressed: false },

  // Contrôles Joueur 2
  ArrowUp: { pressed: false },
  ArrowLeft: { pressed: false },
  ArrowDown: { pressed: false },
  ArrowRight: { pressed: false },
  l: { pressed: false },
  m: { pressed: false },
};

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    // Joueur 1
    case "z":
      keys.z.pressed = true;
      break;
    case "q":
      keys.q.pressed = true;
      break;
    case "s":
      keys.s.pressed = true;
      break;
    case "d":
      keys.d.pressed = true;
      break;
    case "f": // Attaque Joueur 1
      player1.attack();
      break;
    case "g": // Attaque spéciale Joueur 1
      // Implémentation à venir
      break;

    // Joueur 2
    case "ArrowUp":
      keys.ArrowUp.pressed = true;
      break;
    case "ArrowLeft":
      keys.ArrowLeft.pressed = true;
      break;
    case "ArrowDown":
      keys.ArrowDown.pressed = true;
      break;
    case "ArrowRight":
      keys.ArrowRight.pressed = true;
      break;
    case "l": // Attaque Joueur 2
      player2.attack();
      break;
    case "m": // Attaque spéciale Joueur 2
      // Implémentation à venir
      break;
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    // Joueur 1
    case "z":
      keys.z.pressed = false;
      break;
    case "q":
      keys.q.pressed = false;
      break;
    case "s":
      keys.s.pressed = false;
      break;
    case "d":
      keys.d.pressed = false;
      break;

    // Joueur 2
    case "ArrowUp":
      keys.ArrowUp.pressed = false;
      break;
    case "ArrowLeft":
      keys.ArrowLeft.pressed = false;
      break;
    case "ArrowDown":
      keys.ArrowDown.pressed = false;
      break;
    case "ArrowRight":
      keys.ArrowRight.pressed = false;
      break;
  }
});

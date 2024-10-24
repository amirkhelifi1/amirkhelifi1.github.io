function createParticles() {
  const particlesContainer = document.getElementById("particles");
  if (!particlesContainer) return;

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    // Position aléatoire
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";

    // Taille aléatoire
    const size = Math.random() * 5 + 2 + "px";
    particle.style.width = size;
    particle.style.height = size;

    // Animation aléatoire
    particle.style.animationDuration = Math.random() * 10 + 5 + "s";
    particle.style.animationDelay = Math.random() * 5 + "s";

    particlesContainer.appendChild(particle);
  }
}

// Appel de la fonction pour créer les particules
createParticles();

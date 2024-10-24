document.addEventListener("DOMContentLoaded", () => {
  // Cette fonction sera utilisée si vous ajoutez une navigation
  function handleNavigation() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
      }
    });
  }

  // Pour l'instant, ce fichier est un placeholder pour la navigation future
  console.log("Navigation loaded");
});

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".nav");
  const menuButton = document.querySelector(".menu-button");
  const navLinks = document.querySelector(".nav-links");

  // Fonction pour gérer le changement de style de la navigation au scroll
  function handleScroll() {
    if (window.scrollY > 100) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }

  // Écouteur d'événement pour le scroll
  window.addEventListener("scroll", handleScroll);

  // Gestion du menu mobile
  menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // Fermer le menu mobile lorsqu'un lien est cliqué
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

  // Gestion de l'activation des liens de navigation
  function setActiveNavLink() {
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll(".nav-link").forEach((link) => {
      if (link.getAttribute("href").includes(currentPage)) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  // Appel initial pour définir le lien actif
  setActiveNavLink();
});

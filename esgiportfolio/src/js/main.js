// Fonction pour animer les éléments au scroll
function animateOnScroll() {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const isVisible = elementTop < window.innerHeight && elementBottom >= 0;
    if (isVisible) {
      element.classList.add("visible");
    }
  });
}

// Écouteur d'événement pour le scroll
window.addEventListener("scroll", animateOnScroll);

// Appel initial pour animer les éléments visibles au chargement de la page
animateOnScroll();

// Gestion du formulaire de contact (si présent sur la page)
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Ici, vous pouvez ajouter le code pour envoyer le formulaire
    // Par exemple, avec fetch() ou en utilisant un service comme FormSpree
    alert("Merci pour votre message ! Je vous répondrai bientôt.");
    contactForm.reset();
  });
}

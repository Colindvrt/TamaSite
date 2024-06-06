function rotate(element) {
  element.style.transform = "rotate(360deg)";

  element.style.animation = "rotate 0.5s";
  element.addEventListener("animationend", () => {
    element.style.animation = ""; // Réinitialiser l'animation pour permettre la répétition
  });
}

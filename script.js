// Smooth scroll ya está con CSS scroll-behavior
console.log("JS cargado correctamente");

// Formulario
const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");

bookingForm.addEventListener("submit", function(e) {
  e.preventDefault();
  formMessage.textContent = "¡Listo! Te escribimos pronto ✨";
  bookingForm.reset();
});

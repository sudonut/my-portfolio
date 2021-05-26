document.getElementById("nav-open").addEventListener("click", modalToggle)
document.getElementById("mobile-modal").addEventListener("click", modalToggle)

function modalToggle() {
  let mobileModal = document.getElementById("mobile-modal");
  mobileModal.classList.toggle("open");
}
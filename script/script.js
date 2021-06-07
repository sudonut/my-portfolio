document.getElementById("nav-open").addEventListener("click", modalToggle);
document.getElementById("mobile-modal").addEventListener("click", modalToggle);

function modalToggle() {
  let mobileModal = document.getElementById("mobile-modal");
  mobileModal.classList.toggle("open");
}

const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlight);

function navHighlight() {
  // Get current scroll position
  let scrollY = window.pageYOffset;

  //Loop through the sections to get height, top and ID values for each
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 170;
    sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}
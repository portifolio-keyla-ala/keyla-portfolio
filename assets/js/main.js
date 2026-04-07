const navigation = document.querySelector("#navigation");
const about = document.querySelector("#about");
const experiencia = document.querySelector("#experiencia");
const knowledge = document.querySelector("#knowledge");
const certificates = document.querySelector("#certificates");
const contact = document.querySelector("#contact");

window.addEventListener("scroll", onScroll);
onScroll();

function onScroll() {
  showNavOnScroll();
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(experiencia);
  activateMenuAtCurrentSection(knowledge);
  activateMenuAtCurrentSection(certificates);
  activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
  if (!section) return;

  const targetLine = scrollY + innerHeight / 2;
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;
  const sectionEndsAt = sectionTop + sectionHeight;
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  if (!menuElement) return;

  menuElement.classList.remove("active");
  if (sectionBoundaries) menuElement.classList.add("active");
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}


openMenu();
function openMenu() {
  const openBtns = document.querySelectorAll(".open");
  openBtns.forEach((e) => {
    e.addEventListener("click", () => {
      document.body.classList.add("menu-expanded");
    });
  });
}

closeMenu();
function closeMenu() {
  const closeBtns = document.querySelectorAll(".close");
  closeBtns.forEach((e) => {
    e.addEventListener("click", () => {
      document.body.classList.remove("menu-expanded");
    });
  });
}

ScrollReveal({
  origin: "bottom",
  distance: "50px",
  duration: 1000,
}).reveal(
  `#home,
  #home .avatar-float,
  #about,
  #about header,
  #about p,
  #about img,
  #experiencia,
  #experiencia header,
  #experiencia .exp-card,
  #knowledge,
  #knowledge header,
  #knowledge .card,
  #certificates,
  #certificates header,
  #certificates .cert-card,
  #contact,
  #contact header`
);
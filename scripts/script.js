var headerNav = document.querySelector(".header__nav");
var openModal = document.querySelector(".header__menu");
var closeModal = document.querySelector(".header__close");

openModal.addEventListener("click", function () {
  headerNav.classList.add("header__nav--active");
});

closeModal.addEventListener("click", function () {
  headerNav.classList.remove("header__nav--active");
});

import { galleryItems } from "./gallery-items.js";
// Change code below this line

const lightboxBigImage = document.querySelector(".lightbox__image");
const closeButton = document.querySelector('[data-action="close-lightbox"]');
const openModal = document.querySelector(".js-lightbox");

setModalWindowClass();
lightboxBigImage.src = target.dataset.source;
lightboxBigImage.alt = target.alt;

function setModalWindowClass() {
  openModal.classList.add("is-open");
}

closeButton.addEventListener("click", closeModalWindow);

function closeModalWindow() {
  openModal.classList.remove("is-open");
  lightboxBigImage.src = "";
  lightboxBigImage.alt = "";
}

const overlayEl = document.querySelector(".lightbox__overlay");
overlayEl.addEventListener("click", closeModalWindow);

window.addEventListener(
  "keydown",
  function (event) {
    if (event.code === "Escape") {
      closeModalWindow();
    }
    return;
  },
  true
);

lightboxBigImage.addEventListener("keydown", function (event) {
  if (event.code === "ArrowRight") {
  }
});

console.log(galleryItems);

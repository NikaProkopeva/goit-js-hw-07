import { galleryItems } from "./gallery-items.js";
// Change code below this line

const lightboxBigImage = document.querySelector(".lightbox__image");
const closeButton = document.querySelector('[data-action="close-lightbox"]');
const openModal = document.querySelector(".js-lightbox");
const galleryContainer = document.querySelector(".gallery");
const imagesMarkup = createImagesMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);
galleryContainer.addEventListener("click", onImageClick);

function createImagesMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a
          class="gallery__link"
          href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"/>
        </a>
      </div>`;
    })
    .join("");
}

let lightbox = new Simplelightbox(".gallery__item", {
  captions: true,
  captionData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});

new Simplebox(". gallery a", {
  captions: true,
  captionData: "alt",
  captionDelay: 250,
  captionaPosition: "bottom",
});
lightbox.on("show.simpleLightbox", function () {});

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

import { galleryItems } from "./gallery-items.js";
// Change code below this line

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

new Simplebox(".gallery a", {
  captions: true,
  captionData: "alt",
  captionDelay: 250,
  captionaPosition: "bottom",
});
// lightbox.on("show.simpleLightbox", function () {});

// (e) => {
//   if (e.code === "Escape") {
//     instance.close();
//   }
// };
// {
//   once: true;
// }

console.log(galleryItems);

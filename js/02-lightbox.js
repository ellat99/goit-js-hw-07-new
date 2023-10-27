import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);

const ulGallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const newLiItem = document.createElement("li");
  newLiItem.classList.add("gallery__item");

  const newAnchor = document.createElement("a");
  newAnchor.classList.add("gallery__link");
  newAnchor.href = item.original;

  const newImg = document.createElement("img");
  newImg.classList.add("gallery__image");
  newImg.src = item.preview;
  newImg.alt = item.description;

  newAnchor.appendChild(newImg);
  newLiItem.appendChild(newAnchor);

  ulGallery.appendChild(newLiItem);
});

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const listEl = document.querySelector(".gallery");
//parcurgem fiecare elem din array galleryitems
galleryItems.forEach((item) => {
  //cream li,Pentru fiecare element din array, este creat un element de listă (<li>) și adăugat în containerul .gallery.
  const createlistEl = document.createElement("li");
  //adaugam clasa de css
  createlistEl.classList.add("gallery__item");
  //cream link,img,descriere pe care vrem sa le vedem pe browser
  createlistEl.innerHTML = ` <a class='gallery__link' href='${item.original}'>
 <img class ='gallery__image'src='${item.preview}'
 data-source='${item.original}' 
        alt='${item.description}'/>
        </a>`;
  //dupa ce le-am creat le adaugam in li uri
  listEl.append(createlistEl);
});
// Aceasta este funcția care se activează atunci când se face clic pe elementele din galerie.
//Funcția verifică dacă elementul pe care s-a făcut clic este o imagine (<img>). Dacă da, previne comportamentul implicit
//al link-ului (event.preventDefault()) și utilizează biblioteca basicLightbox pentru a crea și afișa o fereastră modală cu imaginea în dimensiuni mari.
listEl.addEventListener("click", openImageInLightbox);
//responsabila pentru afisarea imaginii
function openImageInLightbox(event) {
  const clickedOn = event.target;
  //dupa click ,se verifica daca e imagine
  if (event.target.nodeName !== "IMG") {
    return;
  }
  //sa nu se deschida alta pagina web
  event.preventDefault();
  basicLightbox
    .create(
      `<img width='1400' height ='900' src='${clickedOn.dataset.source}'/>`
    )
    .show();
}

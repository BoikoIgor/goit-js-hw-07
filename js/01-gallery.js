import { galleryItems } from './gallery-items.js';
// Change code below this line
// Вибираємо потрібне місце для нової розмітки
const galleryContainer = document.querySelector('.gallery');
// Створюємо нову розмітку галареї за шаблоном задачі
const galeryMarkupString = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/></a></div>`
  )
  .join('');
// console.log(galeryMarkupString);
galleryContainer.insertAdjacentHTML('beforeend', galeryMarkupString);
// console.log(galleryContainer);

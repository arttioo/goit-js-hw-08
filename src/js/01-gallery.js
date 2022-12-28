// Add imports above this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
function createPicturesMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li><a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a></li>
`;
    })
    .join('');
}
const galleryContainer = document.querySelector('.gallery');
galleryContainer.insertAdjacentHTML(
  'beforeend',
  createPicturesMarkup(galleryItems)
);
var lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(galleryItems);

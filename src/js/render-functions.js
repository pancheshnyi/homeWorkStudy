// імпортуємо SimpleLightbox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// отримуємо посилання на елементи з DOM
const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

// створюємо екземпляр SimpleLightbox для галереї

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// стврюємо функцію для відмальовування розмітки

export function createGallery(images) {
  const markup = images
    .map(
      image => `
    <li class="gallery-item">
    <a class="gallery-link" href="${image.largeImageURL}">
        <img class="gallery-img" src="${image.webformatURL}" alt="${image.tags}"/>
        </a>
            <ul class="descr-list">
                <li class="descr-list-item">
                <h2>Likes</h2>
                <p>${image.likes}</p>
                </li>
                <li class="descr-list-item">
                <h2>Views</h2>
                <p>${image.views}</p>
                </li>
                <li class="descr-list-item">
                <h2>Comments</h2>
                <p>${image.comments}</p>
                </li>
                <li class="descr-list-item">
                <h2>Downloads</h2>
                <p>${image.downloads}</p>
                </li>
            </ul>
        </li>
  `
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

// очищаємо вміст контейнера .gallery clearGallery()
export function clearGallery() {
  galleryContainer.innerHTML = '';
  lightbox.refresh();
}

// Показуємо індикатор завантаження, додаємо клас до елемента .loader.

export function showLoader() {
  loader.classList.add('is-visible');
}

// приховуємо індикатор, видаляємо клас 'is-visible' з .loader
export function hideLoader() {
  loader.classList.remove('is-visible');
}

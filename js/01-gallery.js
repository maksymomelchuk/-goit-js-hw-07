import { galleryItems } from './gallery-items.js'
// Change code below this line

// Create gallery
const galleryRef = document.querySelector('.gallery')

const result = galleryItems
  .map((item) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
  })
  .join('')

// Create HTML page
galleryRef.insertAdjacentHTML('afterbegin', result)

// Image Preview

galleryRef.addEventListener('click', (event) => {
  event.preventDefault()
  const element = galleryItems.find(
    (item) => item.description === event.target.alt
  )
  const img = basicLightbox.create(`<img src="${element.original}">`)
  img.show()

  // Close on Escape
  document.body.addEventListener('keydown', addListener)

  function addListener(event) {
    if (event.key === 'Escape') {
      img.close()
      deleteListener()
    }
  }
  function deleteListener() {
    document.body.removeEventListener('keydown', addListener)
    console.log('listener deleted :D')
  }
})

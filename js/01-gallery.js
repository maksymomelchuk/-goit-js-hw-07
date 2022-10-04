import { galleryItems } from './gallery-items.js'
// Change code below this line

// Create gallery
const galleryRef = document.querySelector('.gallery')

const result = galleryItems
  .map((item) => {
    return `<img src="${item.preview}" alt="${item.description}">`
  })
  .join('')

// Create HTML page
galleryRef.insertAdjacentHTML('afterbegin', result)

// Image Preview

galleryRef.addEventListener('click', (event) => {
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
    console.log('listener deleted :D');
  }
})

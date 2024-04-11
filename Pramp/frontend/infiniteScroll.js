


//call 5 images and append to container

const imageContainer = document.getElementById('container');
document.addEventListener("DOMContentLoaded", function() {
  fetchImages()
})


//fetch and append
function fetchImages() {
  for (let i = 0; i < 6; i++) {
  const image = new Image();
  image.classList.add('item')
  var imageId = Math.random()
  image.src = `http://api.adorable.io/avatars/${imageId}`
  imageContainer.appendChild(image)
  }
}

function isScrolledToBottom() {
  return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

window.addEventListener('scroll', async function() {
  if (isScrolledToBottom()) {
      const newData = fetchImages(); // Fetch more content
  }
});

// window.onscroll = function () {
//     if (getScrollTop() < getDocumentHeight() - window.innerHeight) {
//       console.log('reached bottom of div')
//     };
// };






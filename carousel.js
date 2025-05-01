// carousel.js
let currentIndex = 0;
const images = document.querySelectorAll('#carousel img');

function changeImage() {
    images[currentIndex].classList.remove('opacity-100');
    images[currentIndex].classList.add('opacity-0');
    
    currentIndex = (currentIndex + 1) % images.length;

    images[currentIndex].classList.remove('opacity-0');
    images[currentIndex].classList.add('opacity-100');
}

setInterval(changeImage, 3000); // Change image every 3 seconds

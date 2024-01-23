const images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Замените на ваши изображения
let currentIndex = 0;

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentImage = document.getElementById('currentImage');

prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);

function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function updateImage() {
    const imageUrl = images[currentIndex];
    currentImage.src = imageUrl;
    currentImage.alt = `Image ${currentIndex + 1}`;
}

updateImage();

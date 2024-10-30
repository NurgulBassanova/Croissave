function changeImage(src) {
    const displayImage = document.getElementById('displayImage');
    displayImage.src = src; 
}
const thumbnails = document.querySelectorAll('.thumbnail');
let currentIndex = 0;

function changeImage(src) {
    document.getElementById('displayImage').src = src;
    currentIndex = Array.from(thumbnails).findIndex(thumbnail => thumbnail.src === src);
}

function navigateGallery(direction) {
    currentIndex = (currentIndex + direction + thumbnails.length) % thumbnails.length;
    document.getElementById('displayImage').src = thumbnails[currentIndex].src;
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        navigateGallery(1); 
    } else if (event.key === 'ArrowLeft') {
        navigateGallery(-1); 
    }
});
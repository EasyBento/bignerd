const imageUrls = [
    './media/nerdinho.jpg',
    './media/nerdinho2.jpg',
    './media/nerdinho3.jpg'
];

function addRandomImage(containerId) {
    const container = document.getElementById(containerId);
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const img = document.createElement('img');
    img.src = imageUrls[randomIndex];
    
    img.classList.add('imagemPequena');
    
    const maxWidth = window.innerWidth - img.width;
    const maxHeight = window.innerHeight - img.height;

    img.style.left = getRandomPosition(maxWidth) + 'px';
    img.style.top = getRandomPosition(maxHeight) + 'px';

    img.addEventListener('click', () => {
        removeImage(img, container);
    });
    container.appendChild(img);
}

function getRandomPosition(max) {
    return Math.floor(Math.random() * max);
}

function removeImage(img, container) {
    container.removeChild(img);
    playSound();
    addRandomImage('newImageContainer');
}

function playSound() {
    const audio = new Audio('./media/boom.mp3');
    audio.play();
}

for (let i = 0; i < 3; i++) {
    addRandomImage('imageContainer');
}

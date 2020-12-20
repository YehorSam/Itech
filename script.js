const BTN_ARROW_UP = document.getElementById('arrowUp');
const BTN_ARROW_DOWN = document.getElementById('arrowDown');
const GALLERY = document.getElementById('gallery');

const images = [
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg',
]
const imagesStyle = [
    { width: '300px', height: '200px' },
    { width: '300px', height: '200px' },
    { width: '300px', height: '200px' },
]

// renders images in imagesArray order
function drawImages() {
    GALLERY.innerHTML = "";
    images.forEach( (imageUrl, index) => {
        GALLERY.innerHTML += `
            <img src="${imageUrl}" alt="${imageUrl}" style="width: ${imagesStyle[index].width}; height: ${imagesStyle[index].height};">
        `
    })
}

// shifts the images and its styles in needed way
function imagesShift(shiftAlgorithm) {
    // if down clicked then shift forward, else (up) shift back
    switch (shiftAlgorithm) {
        case 'down':
            images.unshift(images.pop());
            imagesStyle.unshift(imagesStyle.pop());
            break;
        case 'up':
            images.push(images.shift());
            imagesStyle.push(imagesStyle.shift());
            break;
        default:
            return;
    }
}

BTN_ARROW_DOWN.addEventListener('click', function onArrowDownClick() {
    imagesShift('down');
    drawImages();
});

BTN_ARROW_UP.addEventListener('click', function onArrowUpClick() {
    imagesShift('up');
    drawImages();
});

GALLERY.addEventListener('click', function onImageCLicked(event) {
    if (event.target.tagName === 'IMG') {
        const width = prompt('Enter needed image width in px(number): ');
        const height = prompt('Enter needed image height in px(number): ');

        if (!(width && height)) {
            return;
        }

        event.target.style.width = `${width}px`;
        event.target.style.height = `${height}px`;

        const index = images.findIndex(image => image === event.target.getAttribute('src'));
        imagesStyle[index].width = `${width}px`;
        imagesStyle[index].height = `${height}px`;
    }
})

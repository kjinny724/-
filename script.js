// Number of images
const numImages = 25;

// Create an array to hold image objects
const images = [];

for (let i = 1; i <= numImages; i++) {
    // Get the image element by ID
    const img = document.querySelector(`#movingImage${i}`);

    // Wait for the image to load completely before accessing its natural width/height
    img.onload = function() {
        // Get the natural width and height of the image
        const imgNaturalWidth = img.naturalWidth;
        const imgNaturalHeight = img.naturalHeight;

        // Set a random scale factor between 10% and 20% (0.1 to 0.2)
        const scaleFactor = (Math.random() * 0.1) + 0.1;  // Random scale between 0.1 (10%) and 0.2 (20%)

        // Calculate the new width and height based on the scale factor
        const imgWidth = imgNaturalWidth * scaleFactor;
        const imgHeight = imgNaturalHeight * scaleFactor;

        // Set the image's initial size
        img.style.width = imgWidth + "px";
        img.style.height = imgHeight + "px";

        // Set random speed for each image (slower speeds)
        let velx = (Math.random() * 3) + 1;  // Speed between 1 and 4
        let vely = (Math.random() * 3) + 1;  // Speed between 1 and 4

        // Push image and its properties into the images array
        images.push({ img, imgWidth, imgHeight, velx, vely });
    };

    // In case the image is already cached, load it immediately
    if (img.complete) {
        img.onload();
    }
}

// Function to randomly change positions of the images every 2 seconds
function moveImagesRandomly() {
    images.forEach(image => {
        // Randomly update the position of each image
        const x = Math.random() * (window.innerWidth - image.imgWidth);
        const y = Math.random() * (window.innerHeight - image.imgHeight);

        // Set the new position for the image
        image.img.style.left = `${x}px`;
        image.img.style.top = `${y}px`;
    });
}

// Set an interval to move the images every 2 seconds
setInterval(moveImagesRandomly, 2000);  // 2000ms = 2초

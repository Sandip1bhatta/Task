const boxes = Array.from(document.querySelectorAll('.main-box'));

let currentIndex = Math.floor(boxes.length / 2); // Center index
let lastMouseY = 0; // Track the last mouse Y position

function updateBoxes() {
    boxes.forEach((box, index) => {
        if (index === currentIndex) {
            box.className = 'main-box center'; // Center box
        } else if (index === (currentIndex - 1 + boxes.length) % boxes.length) {
            box.className = 'main-box above'; // Box above
        } else if (index === (currentIndex + 1) % boxes.length) {
            box.className = 'main-box below'; // Box below
        } else {
            box.className = 'main-box hidden'; // Other boxes
        }
    });

    const centerBox = boxes[currentIndex];
    centerBox.addEventListener('mousemove', handleMouseMove);
}

function handleMouseMove(event) {
    const mouseY = event.clientY;
    const centerBoxRect = event.target.getBoundingClientRect();

    if (mouseY < centerBoxRect.top + centerBoxRect.height / 2 && mouseY < lastMouseY - 30) {
        currentIndex = (currentIndex + 1) % boxes.length; // Move center to below
        updateBoxes();
    } else if (mouseY > centerBoxRect.top + centerBoxRect.height / 2 && mouseY > lastMouseY + 30) {
        currentIndex = (currentIndex - 1 + boxes.length) % boxes.length; // Move center to above
        updateBoxes();
    }

    lastMouseY = mouseY; // Update the last mouse Y position
}

updateBoxes();

function removeEventListeners() {
    boxes.forEach(box => {
        box.removeEventListener('mousemove', handleMouseMove);
    });
}

function updateBoxes() {
    removeEventListeners();
    boxes.forEach((box, index) => {
        if (index === currentIndex) {
            box.className = 'main-box center'; // Center box
        } else if (index === (currentIndex - 1 + boxes.length) % boxes.length) {
            box.className = 'main-box above'; // Box above
        } else if (index === (currentIndex + 1) % boxes.length) {
            box.className = 'main-box below'; // Box below
        } else {
            box.className = 'main-box hidden'; // Other boxes
        }
    });

    const centerBox = boxes[currentIndex];
    centerBox.addEventListener('mousemove', handleMouseMove);
}

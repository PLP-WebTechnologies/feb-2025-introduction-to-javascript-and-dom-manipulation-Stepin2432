// Change text content dynamically
document.getElementById('change-text-btn').addEventListener('click', () => {
    const textElement = document.getElementById('dynamic-text');
    textElement.textContent = "The text has been dynamically changed!";
    textElement.style.color = "blue"; // Modify CSS style
    textElement.style.fontWeight = "bold";
});

// Add or remove an element when a button is clicked
document.getElementById('toggle-element-btn').addEventListener('click', () => {
    const container = document.getElementById('dynamic-container');
    const existingElement = document.getElementById('dynamic-element');

    if (existingElement) {
        container.removeChild(existingElement); // Remove the element
    } else {
        const newElement = document.createElement('p');
        newElement.id = 'dynamic-element';
        newElement.textContent = "This is a dynamically added element!";
        newElement.style.backgroundColor = "lightyellow"; // Modify CSS style
        newElement.style.padding = "10px";
        container.appendChild(newElement); // Add the element
    }
});


// Select the range input and the text span
const fontSizeControl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

// Function to handle the input event
function handleInput() {
    // Get the current value of the range input
    const fontSize = fontSizeControl.value;

    // Update the font-size of the text span
    textSpan.style.fontSize = `${fontSize}px`;
}

// Add event listener to the range input for the input event
fontSizeControl.addEventListener('input', handleInput);

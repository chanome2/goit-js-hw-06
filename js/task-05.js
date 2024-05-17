
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// Function to handle the input event
function handleInput(event) {
    // Get the current value of the input
    const name = event.target.value.trim(); // Trim whitespace from the input

    // Update the text content of the span based on the input value
    if (name === '') {
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = name;
    }
}

// Add event listener to the name input for the input event
nameInput.addEventListener('input', handleInput);




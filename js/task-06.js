
// Select the input element
const validationInput = document.querySelector('#validation-input');

// Function to handle the blur event
function handleBlur() {
    // Get the entered value from the input
    const enteredValue = validationInput.value.trim();
    
    // Get the desired length from the data-length attribute
    const desiredLength = parseInt(validationInput.getAttribute('data-length'), 10);

    // Check if the entered value has the correct length
    if (enteredValue.length === desiredLength) {
        // If correct, add 'valid' class and remove 'invalid' class
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
    } else {
        // If incorrect, add 'invalid' class and remove 'valid' class
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
    }
}

// Add event listener to the input for the blur event
validationInput.addEventListener('blur', handleBlur);


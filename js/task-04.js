// Initialization
let counterValue = 0;

// Get references 
const valueSpan = document.getElementById('value');
const incrementButton = document.querySelector('button[data-action="increment"]');
const decrementButton = document.querySelector('button[data-action="decrement"]');

// Function to update the counter value and display
function updateCounter(newValue) {
  counterValue = newValue;
  valueSpan.textContent = counterValue;
}

//  increment 
incrementButton.addEventListener('click', () => {
  updateCounter(counterValue + 1);
});

//  decrement 
decrementButton.addEventListener('click', () => {
  updateCounter(counterValue - 1);
});

// Initialize the counter value display
updateCounter(counterValue);

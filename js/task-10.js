function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


document.addEventListener('DOMContentLoaded', function() {
  const inputNumber = document.querySelector('#controls input');
  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
  const boxesContainer = document.querySelector('#boxes');

  // Function to create boxes based on the specified amount
  function createBoxes(amount) {
    boxesContainer.innerHTML = ''; // Clear existing boxes

    let size = 30; // Initial size of the first box
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
      size += 10; // Increase size for the next box
    }
  }

  // Event listener for the Create button
  createButton.addEventListener('click', function() {
    const amount = parseInt(inputNumber.value);
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
    } else {
      alert('Please enter a number between 1 and 100.');
    }
  });

  // Event listener for the Destroy button
  destroyButton.addEventListener('click', function() {
    boxesContainer.innerHTML = ''; // Clear all boxes
  });
});
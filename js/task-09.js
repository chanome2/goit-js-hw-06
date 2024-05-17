function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
document.addEventListener('DOMContentLoaded', function() {
  const colorSpan = document.querySelector('.color');
  const changeColorButton = document.querySelector('.change-color');

  changeColorButton.addEventListener('click', function() {
    // Generate a random color
    const randomColor = getRandomHexColor();

    // Set the body background color
    document.body.style.backgroundColor = randomColor;

    // Update the color value displayed in the span
    colorSpan.textContent = randomColor;
  });
});

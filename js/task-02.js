// Array of ingredients
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

// Reference to the ul element by its id
const ulIngredients = document.getElementById("ingredients");

// Create a document fragment to hold all the list items
const fragment = document.createDocumentFragment();

// Loop through each ingredient in the array
ingredients.forEach((ingredient) => {
  // Create a new list item element
  const li = document.createElement("li");

  // Add the 'item' class to the list item
  li.classList.add("item");

  // Set the text content of the list item to the ingredient name
  li.textContent = ingredient;

  // Append the list item to the document fragment
  fragment.appendChild(li);
});

// Append all list items to the ul element in a single operation
ulIngredients.appendChild(fragment);


const categoriesList = document.querySelector('ul#categories');


if (categoriesList) {
  // Get all list item elements within ul#categories
  const categoryItems = categoriesList.querySelectorAll('li.item');

  // Count the number of category
  const numCategories = categoryItems.length;
  console.log(`Number of categories: ${numCategories}`);

  // Iteration
  categoryItems.forEach((item) => {
    // Find the header text (h2 tag) within the category item
    const headerText = item.querySelector('h2').textContent;

    // Find all nested list elements within the current category item
    const nestedItems = item.querySelectorAll('ul > li');
    const numNestedItems = nestedItems.length;

    // Display 
    console.log(`Category: ${headerText} (${numNestedItems} items)`);
  });
} else {
  console.log('Element with id "categories" not found.');
}

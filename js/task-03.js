const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const gallery = document.querySelector('ul.gallery');

// Function to generate the HTML for the image gallery
function generateGallery(images) {
  // Map over the images array and create the HTML for each image
  const galleryHTML = images.map(image => `
    <li>
      <img src="${image.url}" alt="${image.alt}">
    </li>
  `).join(''); // Join the array into a single string

  // Insert the generated HTML into the gallery UL element
  gallery.insertAdjacentHTML('beforeend', galleryHTML);
}

// Call the function to generate the gallery
generateGallery(images);
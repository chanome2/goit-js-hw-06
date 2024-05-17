
document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.querySelector('.login-form');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form elements
    const emailInput = loginForm.elements['email'];
    const passwordInput = loginForm.elements['password'];

    // Check if any field is empty
    if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
      alert('Please fill in all fields.'); // Display alert for empty fields
      return; // Stop form submission
    }

    // Create an object to store form data
    const formData = {
      email: emailInput.value,
      password: passwordInput.value
    };

    // Display the form data object in the console
    console.log(formData);

    // Reset the form fields
    loginForm.reset();
  });
});



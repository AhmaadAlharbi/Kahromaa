// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Get references to the elements
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar-default");
  const contactForm = document.getElementById("contactForm");
  const submissionMessage = document.getElementById("submissionMessage");

  // Add event listener for the menu toggle button
  menuToggle.addEventListener("click", toggleNavbar);

  // Add event listener for the contact form submission
  contactForm.addEventListener("submit", handleFormSubmission);

  // Function to toggle the visibility of the navbar
  function toggleNavbar() {
    navbar.classList.toggle("hidden");
  }

  // Function to handle the contact form submission
  function handleFormSubmission(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Show the submission message
    submissionMessage.classList.remove("hidden");

    // Simulate form submission delay and then submit the form
    setTimeout(() => {
      contactForm.submit(); // Submit the form
    }, 2000); // Adjust the timeout duration as needed
  }
});

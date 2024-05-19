document.getElementById("menu-toggle").addEventListener("click", function () {
  const navbar = document.getElementById("navbar-default");
  navbar.classList.toggle("hidden");
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Show the submission message
    document.getElementById("submissionMessage").classList.remove("hidden");

    // Optionally, you can add a timeout to simulate the form submission delay
    setTimeout(function () {
      document.getElementById("contactForm").submit(); // Submit the form
    }, 2000); // Adjust the timeout duration as needed
  });

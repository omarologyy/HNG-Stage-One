document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const snackbar = document.getElementById("snackbar");

  function showSnackbar(message, type = "success") {
    snackbar.textContent = message;

    if (type === "error") {
      snackbar.style.backgroundColor = "#e63946";
      snackbar.style.color = "#fff";
    } else {
      snackbar.style.backgroundColor = "#333";
      snackbar.style.color = "#fff";
    }

    snackbar.className = "show";

    setTimeout(() => {
      snackbar.className = snackbar.className.replace("show", "");
    }, 3000);
  }

  // Form submission logic
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check for empty fields
    if (!name || !email || !subject || !message) {
      showSnackbar("⚠️ Please fill in all fields before sending.", "error");
      return;
    }

    // Validate email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      showSnackbar("❌ Please enter a valid email address.", "error");
      return;
    }

    // If all good — show success message
    showSnackbar("✅ Thank you! We’ll get back to you soon.", "success");

    // Reset form
    form.reset();
  });
});

// Place this function inside your DOMContentLoaded event listener
function displayInputError(inputId, message) {
  const input = document.getElementById(inputId);
  const errorSpan = document.getElementById(inputId + "-error");

  // 1. Update the error message and show it
  errorSpan.textContent = message;
  errorSpan.classList.add("show-error");

  // 2. Add classes to style the input border
  input.classList.add("input-error");

  // 3. Accessibility: Tie the error message to the input
  input.setAttribute("aria-describedby", inputId + "-error");
  input.setAttribute("aria-invalid", "true");

  // Set focus to the first invalid field for better UX
  input.focus();
}

function clearInputError(inputId) {
  const input = document.getElementById(inputId);
  const errorSpan = document.getElementById(inputId + "-error");

  // Clear and hide the error message
  errorSpan.textContent = "";
  errorSpan.classList.remove("show-error");

  // Remove styling classes
  input.classList.remove("input-error");

  // Remove accessibility attributes
  input.removeAttribute("aria-describedby");
  input.removeAttribute("aria-invalid");
}

// --- Form submission logic update ---
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Clear all previous errors first
  const fields = ["name", "email", "subject", "message"];
  fields.forEach(clearInputError);

  let hasError = false;
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  // Basic required field check
  if (document.getElementById("name").value.trim() === "") {
    displayInputError("name", "Name is required.");
    hasError = true;
  }

  // Email validation
  const emailInput = document.getElementById("email");
  if (emailInput.value.trim() === "") {
    displayInputError("email", "Email is required.");
    hasError = true;
  } else if (!emailInput.value.trim().match(emailPattern)) {
    displayInputError("email", "Please enter a valid email address.");
    hasError = true;
  }

  // You would add checks for subject and message here too

  if (hasError) {
    // You can still use your snackbar for a general "Form has errors" message if you like
    // showSnackbar("⚠️ Please fix the errors above.", "error");
    return;
  }

  // If no errors:
  showSnackbar("✅ Thank you! We’ll get back to you soon.", "success");
  form.reset();
});

// Function to open the modal
function openModal() {
    document.getElementById("modal").style.display = "flex";
}

// Function to close the modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Send button action
function sendMessage() {
    alert("Message sent!");
    closeModal();
}

// Form validation
function validateForm(event) {
    // Get form elements
    const fullName = document.getElementById('full_name').value.trim();
    const emailAddress = document.getElementById('email_address').value.trim();
    const contactNumber = document.getElementById('contact_number').value.trim();
    const message = document.getElementById('message').value.trim();

    // Check if all required fields are filled
    if (fullName === '' || emailAddress === '' || contactNumber === '' || message === '') {
        alert("All fields are required!");
        event.preventDefault(); // Prevent form submission if validation fails
        return false; // Return false to stop form submission
    }

    // If validation passes, open the modal
    openModal();
    event.preventDefault(); // Prevent the default form submission to allow modal interaction
    return false; // Return false to stop form submission
}

document.addEventListener("DOMContentLoaded", () => {
  const text = "Full-Stack Web Developer";
  const typingElement = document.getElementById("typing");
  let index = 0;

  function type() {
    if (index < text.length) {
      typingElement.textContent += text[index];
      index++;
      setTimeout(type, 100);
    } else {
      setTimeout(() => {
        typingElement.textContent = ""; // Clear text
        index = 0; // Reset index
        type(); // Restart typing
      }, 1000); // Pause before restarting
    }
  }

  type();
});

// Function to trigger the download with a prompt for confirmation
function downloadCV() {
    let userConfirmation = confirm("Do you want to download my CV?");
    if (userConfirmation) {
        // Replace 'path/to/your/cv.pdf' with the actual path to your CV file
        window.location.href = './johnkennethcv.pdf'; 
    }
}
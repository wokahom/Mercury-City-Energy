  // Attach event listeners to all "Read More" buttons
  document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.previousElementSibling; // Get the content div before the button
      if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block'; // Show the hidden content
        button.textContent = 'Read Less'; // Change button text
      } else {
        content.style.display = 'none'; // Hide the content
        button.textContent = 'Read More'; // Revert button text
      }
    });
  });
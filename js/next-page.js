let currentPage = 1; // Starting page
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;

// Show a specific page
const showPage = (page) => {
  pages.forEach((pageElement, index) => {
    pageElement.style.display = index + 1 === page ? 'block' : 'none';
  });

  // Update buttons
  document.getElementById('prev').style.display = page === 1 ? 'none' : 'inline-block';
  document.getElementById('next').style.display = page === totalPages ? 'none' : 'inline-block';

  // Highlight the active page number
  const pageNumbers = document.querySelectorAll('.page-number');
  pageNumbers.forEach((number, index) => {
    number.classList.toggle('active', index + 1 === page);
  });
};

// Generate page numbers
const generatePageNumbers = () => {
  const pageNumbersContainer = document.getElementById('page-numbers');
  pageNumbersContainer.innerHTML = ''; // Clear existing numbers

  for (let i = 1; i <= totalPages; i++) {
    const pageNumber = document.createElement('span');
    pageNumber.classList.add('page-number');
    pageNumber.textContent = i;

    // Add click event to each number
    pageNumber.addEventListener('click', () => {
      currentPage = i;
      showPage(currentPage);
    });

    pageNumbersContainer.appendChild(pageNumber);
  }
};

// Button click events
document.getElementById('next').addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
  }
});

document.getElementById('prev').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
});

// Initialize the pagination
generatePageNumbers();
showPage(currentPage);

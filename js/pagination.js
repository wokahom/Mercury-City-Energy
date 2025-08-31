const articlesPerPage = 5;
const articles = document.querySelectorAll('.article');
const totalPages = Math.ceil(articles.length / articlesPerPage);
const firstPageBtn = document.getElementById('first-page');
const prevPageBtn = document.getElementById('prev-page');
const nextPageBtn = document.getElementById('next-page');
const pageInfo = document.getElementById('page-info');
let currentPage = 1;

function showPage(page) {
  const start = (page - 1) * articlesPerPage;
  const end = page * articlesPerPage;

  articles.forEach((article, index) => {
    article.style.display = index >= start && index < end ? 'block' : 'none';
  });

  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
  prevPageBtn.disabled = page === 1;
  nextPageBtn.disabled = page === totalPages;
  firstPageBtn.disabled = page === 1;
}

firstPageBtn.addEventListener('click', () => {
  currentPage = 1;
  showPage(currentPage);
});

prevPageBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
});

nextPageBtn.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
  }
});

// Initialize the first page
showPage(currentPage);
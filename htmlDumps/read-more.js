function toggleReadMore() {
  const content = document.querySelector('.read-more-content');
  const btn = document.querySelector('.read-more-btn');
  if (content.style.display === 'none' || content.style.display === '') {
    content.style.display = 'block';
    btn.textContent = 'Read Less';
  } else {
    content.style.display = 'none';
    btn.textContent = 'Read More';
  }
}
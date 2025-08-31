// Function to calculate "time ago"
function timeAgo(dateString) {
  const now = new Date();
  const published = new Date(dateString);
  const seconds = Math.floor((now - published) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (const unit in intervals) {
    const interval = intervals[unit];
    if (seconds >= interval) {
      const count = Math.floor(seconds / interval);
      return `${count} ${unit}${count !== 1 ? 's' : ''} ago`;
    }
  }
  return "Just now";
}

// Apply "time ago" to each post
document.querySelectorAll('.post-time').forEach((element) => {
  const publishedDate = element.getAttribute('data-published');
  element.textContent = timeAgo(publishedDate);
});

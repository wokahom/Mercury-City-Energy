function shareArticle() {
  if (navigator.share) {
    navigator.share({
      title: 'Article Title',
      text: 'Check out this article!',
      url: window.location.href
    }).then(() => {
      console.log('Article shared successfully!');
    }).catch((error) => {
      console.error('Error sharing the article:', error);
    });
  } else {
    alert('Sharing not supported in this browser.');
  }
}
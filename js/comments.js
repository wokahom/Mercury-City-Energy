
    const commentsList = document.getElementById('comments-list');
    const nameInput = document.getElementById('name-input');
    const commentInput = document.getElementById('comment-input');

    function addComment() {
      const name = nameInput.value.trim();
      const commentText = commentInput.value.trim();

      if (!name) {
        alert('Please enter your name.');
        return;
      }

      if (!commentText) {
        alert('Please write a comment before posting.');
        return;
      }

      // Remove the "No comments yet" placeholder
      const noCommentsPlaceholder = document.querySelector('.no-comments');
      if (noCommentsPlaceholder) {
        noCommentsPlaceholder.remove();
      }

      // Create a new list item for the comment
      const commentItem = document.createElement('li');

      const nameElement = document.createElement('div');
      nameElement.className = 'comment-name';
      nameElement.textContent = name;

      const textElement = document.createElement('div');
      textElement.className = 'comment-text';
      textElement.textContent = commentText;

      commentItem.appendChild(nameElement);
      commentItem.appendChild(textElement);

      // Append the comment to the comments list
      commentsList.appendChild(commentItem);

      // Clear the input fields
      nameInput.value = '';
      commentInput.value = '';
    }

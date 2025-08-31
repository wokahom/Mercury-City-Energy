const postTitle = encodeURIComponent(document.title); // Use the document title
const postUrl = encodeURIComponent(window.location.href); // Use the current page URL
const postImage = encodeURIComponent('https://example.com/path-to-your-image.jpg'); // Add your image URL for Pinterest

// Social Media Share Links
document.getElementById('facebook-share').href = `https://www.facebook.com/sharer/sharer.php?u=${postUrl}`;
document.getElementById('twitter-share').href = `https://twitter.com/intent/tweet?text=${postTitle}&url=${postUrl}`;
document.getElementById('linkedin-share').href = `https://www.linkedin.com/sharing/share-offsite/?url=${postUrl}`;
document.getElementById('whatsapp-share').href = `https://wa.me/?text=${postTitle} ${postUrl}`;
document.getElementById('telegram-share').href = `https://t.me/share/url?url=${postUrl}&text=${postTitle}`;
document.getElementById('instagram-share').href = `https://www.instagram.com/`; // Instagram does not support direct sharing; use the profile link or a custom post link
document.getElementById('pinterest-share').href = `https://pinterest.com/pin/create/button/?url=${postUrl}&media=${postImage}&description=${postTitle}`;

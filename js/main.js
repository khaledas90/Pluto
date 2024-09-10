// JavaScript to toggle the responsive navigation bar
const navbarToggle = document.getElementById('navbarToggle');
const navbarLinks = document.getElementById('navbarLinks');

navbarToggle.addEventListener('click', function() {
  navbarLinks.classList.toggle('active');
});


// JavaScript to show/hide the "Scroll to Top" button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

// JavaScript to scroll to the top of the page
scrollToTopBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
const ratingSections = document.querySelectorAll('.block');
ratingSections.forEach(section => {
  const stars = section.querySelectorAll('.star'); 
  const ratingDisplay = section.querySelector('.current'); 
  stars.forEach(star => {
    star.addEventListener('click', () => {
      const selectedRating = star.getAttribute('data-value');
      ratingDisplay.textContent = selectedRating;
      stars.forEach(s => s.classList.remove('selected'));
      for (let i = 0; i < selectedRating; i++) {
        stars[i].classList.add('selected');
      }
      const ratingMessage = document.getElementById('rating-message');
      ratingMessage.style.display = 'block';
      ratingMessage.classList.add('show');

      setTimeout(() => {
        ratingMessage.classList.remove('show');
      }, 5000);
    });
  });
});

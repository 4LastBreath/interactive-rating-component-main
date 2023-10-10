const ratingButtons = document.querySelectorAll('.btn-rating');
const selectedRatingElement = document.getElementById('selectedRating');
const submitButton = document.querySelector('.btn-submit');
const secondCard = document.querySelector('.second-card');
const firstCard = document.querySelector('.first-card');
let selectedButton = null;


ratingButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const selectedValue = e.target.value;
    selectedRatingElement.textContent = selectedValue;
    
    if (selectedButton) {
      selectedButton.classList.remove('selected');
    }

    e.target.classList.add('selected');
    
    selectedButton = e.target;
  });
});


submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  firstCard.setAttribute('data-visible', false);
  secondCard.setAttribute('data-visible', true);
});
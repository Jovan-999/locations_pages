const learnMoreBtn = document.querySelector(
  '.unintentional-cost__paragraph-learn'
);
const text = document.querySelector('.unintentional-cost__paragraph-show');

learnMoreBtn.addEventListener('click', (e) => {
  text.classList.toggle('unintentional-cost__show-more');
  if (learnMoreBtn.innerText === 'Learn More') {
    learnMoreBtn.innerText = 'Learn Less';
  } else {
    learnMoreBtn.innerText = 'Learn More';
  }
});

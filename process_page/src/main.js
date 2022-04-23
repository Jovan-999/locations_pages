const readMoreBtn = document.querySelector('.process-page__paragraph-read');
const text = document.querySelector('.process-page__read-paragraph');

readMoreBtn.addEventListener('click', (e) => {
  text.classList.toggle('process-page__show-more');
  if (readMoreBtn.innerText === 'Read More') {
    readMoreBtn.innerText = 'Read Less';
  } else {
    readMoreBtn.innerText = 'Read More';
  }
});

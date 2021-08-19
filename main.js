const CLASS_TITLE = 'accordion__item';

const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', function(event) {
  const item = event.target;

  if (item.classList.contains(CLASS_TITLE)) {
    item.classList.toggle('active');
  } else if (item.parentElement.classList.contains(CLASS_TITLE)) {
    item.parentElement.classList.toggle('active');
  }
});

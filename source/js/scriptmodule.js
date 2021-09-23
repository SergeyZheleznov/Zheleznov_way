const buttonOpen = document.querySelector('.question__search');
const popup = document.querySelector('.module');

popup.classList.add('module-close');

buttonOpen.addEventListener('click', function(evt) {
 evt.preventDefault();
 popup.classList.toggle('module-close');
 popup.classList.toggle('module-show');
});

window.addEventListener('keydown', function (evt){
  if (evt.keyCode === 27) {
    if (popup.classList.contains('module-show')) {
      evt.preventDefault();
      popup.classList.remove('module-show');
      popup.classList.add('module-close');
    }
  }
});

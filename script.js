function keyDown(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if (!audio) return
  audio.currentTime = 0
  audio.play()
  key.classList.add('playing')
}

function handleClick() {
  const audio = document.querySelector(`audio[data-key="${this.dataset.key}"]`);
  const key = document.querySelector(`.key[data-key="${this.dataset.key}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTranstion(e) {
  if(e.propertyName !== 'transform') return
  this.classList.remove('playing')
}

function keyUp(e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!key) return;
  key.classList.remove('playing');
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => {
  key.addEventListener('transitionend', removeTranstion);
  key.addEventListener('click', handleClick);
});

window.addEventListener('keydown', keyDown)
window.addEventListener('keyup', keyUp);
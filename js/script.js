document.addEventListener('keydown', (e) => {
  const key = document.querySelector('.key[data-key="' + e.keyCode + '"]');

  let keySound = {
    a: {sound: new Audio('sounds/clap.wav')},
    s: {sound: new Audio('sounds/hihat.wav')},
    d: {sound: new Audio('sounds/kick.wav')},
    f: {sound: new Audio('sounds/openhat.wav')},
    g: {sound: new Audio('sounds/boom.wav')},
    h: {sound: new Audio('sounds/ride.wav')},
    j: {sound: new Audio('sounds/snare.wav')},
    k: {sound: new Audio('sounds/tom.wav')},
    l: {sound: new Audio('sounds/tink.wav')},
  };

  if (key) {
    keySound[e.key].sound.play();
    key.classList.add('make-noise');
  }

});

function removeTransition(e) {
  if (e.propertyName !== 'transform') {return;};
  this.classList.remove('make-noise');
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

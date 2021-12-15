const playSound = (e) => {
  const { keyCode } = e;
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
};

const removeTransition = (e) => {
  const {
    propertyName,
    target: { classList },
  } = e;
  if (propertyName !== "transform") return;
  classList.remove("playing");
};

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);

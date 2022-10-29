const circle = document.querySelector('#circle');
const playButton = document.querySelector('#play-button');
const speed = document.querySelector('#speed');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);
}

speed.addEventListener('change', handleUpdate);
speed.addEventListener('mousemove', handleUpdate);

playButton.addEventListener('click', (e) => {
  const paused = circle.style.animationPlayState || 'paused';
  if (circle.style.animationPlayState = paused === 'paused') {
    circle.style.animationPlayState = 'running';
    e.currentTarget.textContent = "Pause";
  } else {
    circle.style.animationPlayState = 'paused';
    e.currentTarget.textContent = "Play";
  }
});


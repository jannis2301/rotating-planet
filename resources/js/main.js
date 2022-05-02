const circle = document.getElementById('circle');
const playButton = document.getElementById('play-button');
const speed = document.getElementById('speed');

playButton.addEventListener('click', () => {
  const paused = circle.style.animationPlayState || 'paused';
  if (circle.style.animationPlayState = paused === 'paused') {
    circle.style.animationPlayState = 'running';
    playButton.textContent = "Pause";
  } else {
    circle.style.animationPlayState = 'paused';
    playButton.textContent = "Play";
  }
});

speed.addEventListener('change', () => { 
    let speedValue = parseInt(speed.value);
    
    if (speedValue ===  1) {
      circle.classList.remove("slower", "faster", "super-fast");
      circle.classList.add("super-slow"); 
    } else if (speedValue ===  2) {
      circle.classList.remove("super-slow", "faster", "super-fast");
      circle.classList.add("slower"); 
    } else if (speedValue ===  3) {
      circle.classList.remove("super-slow", "slower", "faster", "super-fast");
    } else if (speedValue ===  4){
      circle.classList.remove("super-slow", "slower", "super-fast");
      circle.classList.add("faster"); 
    } else if (speedValue ===  5){
      circle.classList.remove("super-slow", "slower", "faster");
      circle.classList.add("super-fast"); 
    } 
  }
)


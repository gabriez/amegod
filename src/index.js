

window.addEventListener("DOMContentLoaded", (event) => {
  const tongue = document.getElementById('tongue');
  const heart = document.getElementById('wrapper');
  const frogContainer = document.getElementById('container');
  
  function click () {
    tongue.style.scale = 0;
    heart.style.scale = 1.5;
  }
  frogContainer.addEventListener('click', click)
});

const scene = document.querySelector('.scene');

function createStars(numStars) {
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.className = 'stars';
    star.style.left = Math.random() * scene.clientWidth + 'px';
    star.style.top = Math.random() * scene.clientHeight + 'px';
    star.style.animationDelay = Math.random() * 2 + 's';
    scene.appendChild(star);
  }
}
createStars(150);

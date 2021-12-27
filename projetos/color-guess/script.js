const paragraph = document.getElementById('rgb-color');
const ballsContainer = document.getElementById('balls-container');
const answer = document.getElementById('answer');
const buttonReset = document.getElementById('reset-game');
const score = document.getElementById('score');
let points = 0;
score.innerHTML = `Pontuação: ${points}`;

function colorGenerator() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

function createBalls() {
  for (let i = 0; i < 6; i += 1) {
    const balls = document.createElement('div');
    balls.className = 'ball';
    balls.style.backgroundColor = colorGenerator();
    ballsContainer.appendChild(balls);
  }
}

function showColorGuess() {
  const balls = document.querySelectorAll('.ball');
  const index = Math.floor(Math.random() * (balls.length - 1));
  paragraph.innerText = balls[index].style.backgroundColor;
}

function scoring() {
  points += 3;
  score.innerHTML = `Pontuação: ${points}`;
}

function showAnswer(event) {
  if (event.target.classList.contains('ball')) {
    if (paragraph.innerText === event.target.style.backgroundColor) {
      answer.innerText = 'Acertou!';
      scoring();
    } else {
      answer.innerText = 'Errou! Tente novamente!';
    }
  }
}

function reset() {
  ballsContainer.innerHTML = '';
  createBalls();
  showColorGuess();
  answer.innerText = 'Escolha uma cor';
}

// eslint-disable-next-line func-names
window.onload = function () {
  createBalls();
  showColorGuess();
  ballsContainer.addEventListener('click', showAnswer);
  buttonReset.addEventListener('click', reset);
};

'use strict';
let GuessValue = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let HighScore = 0;

function message(message) {
  document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message('Empty Value... 😑');
  } else if (guess === GuessValue) {
    message('correct Number❤️');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = guess;
    if (HighScore < score) {
      HighScore = score;
      document.querySelector('.highscore').textContent = HighScore;
    }
  } else if (guess !== GuessValue) {
    if (score > 1) {
      message(guess > GuessValue ? ' Too High 😅' : ' Too Low 😢');
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  GuessValue = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = ' ';
});

'use strict';
let GuessValue = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let HighScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'Empty Value 😑';
  } else if (guess === GuessValue) {
    document.querySelector('.message').textContent = 'correct Number❤️';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = guess;
    if (HighScore < score) {
      HighScore = score;
      document.querySelector('.highscore').textContent = HighScore;
    }
  } else if (guess > GuessValue) {
    document.querySelector('.message').textContent = ' Too High 😅';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < GuessValue) {
    document.querySelector('.message').textContent = ' Too Low 😢';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  GuessValue = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
});

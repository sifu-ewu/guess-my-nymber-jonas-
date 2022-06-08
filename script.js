'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct secretNumber';
// document.querySelector('.secretNumber').textContent = 12;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 10;
// console.log(document.querySelector('.guess').value);
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let disPlayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  disPlayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '30rem';
});

document.querySelector('.check').addEventListener('click', function () {
  //building a function for duplicate removing
  let checking = function () {
    if (score > 1) {
      disPlayMessage(guess > secretNumber ? 'Too high' : 'Too low');
    }
    if (score == 1) {
      displayMessage('You loose');
    }

    score--;
    document.querySelector('.score').textContent = score;
  };
  const guess = Number(document.querySelector('.guess').value);
  ///when there is no number
  console.log(typeof guess);
  if (!guess) {
    displayMessage('No secretNumber');
  }
  //when player wins
  else if (guess == secretNumber) {
    disPlayMessage('Correct secretNumber');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //when guess number is higher than secretNumber
  else {
    checking();
  }
});

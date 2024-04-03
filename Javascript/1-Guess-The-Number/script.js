"use strict";

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = secretNumber;

function checkHighScore(val) {
  if (val > highScore) highScore = val;
  document.querySelector(".highscore").textContent = highScore;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number Selected";
  } else if (guess === secretNumber) {
    checkHighScore(score);
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess < secretNumber ? "📉 Guess Too Low!" : "📈 Guess Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You Lost!";
      score = 0;
      document.querySelector(".score").textContent = score;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".guess").value = "";
});

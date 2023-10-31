const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");
const choices = ["rock", "paper", "scissor"];
let computer, result;

const displaySection = document.querySelector(".display-section");

document.addEventListener("DOMContentLoaded", function () {
  displaySection.style.display = "none";
});

function computerChoose() {
  let randomNumber = Math.floor(Math.random() * 3);
  computer = choices[randomNumber];
}

function whoIsTheWinner(playerChoice) {
  if (playerChoice === "rock" && computer === "paper") {
    result = "Computer win!";
  } else if (playerChoice === "paper" && computer === "rock") {
    result = "Player win!";
  } else if (playerChoice === "scissor" && computer === "rock") {
    result = "Computer win!";
  } else if (playerChoice === "rock" && computer === "scissor") {
    result = "Player win!";
  } else if (playerChoice === "paper" && computer === "scissor") {
    result = "Computer win!";
  } else if (playerChoice === "scissor" && computer === "paper") {
    result = "Player win!";
  } else {
    result = "It's a draw!";
  }
}

function playNow(event) {
  const img1 = document.querySelectorAll(".image-result")[0];
  const img2 = document.querySelectorAll(".image-result")[1];
  const c1 = document.querySelector("#player-caption");
  const c2 = document.querySelector("#computer-caption");
  const resultBanner = document.querySelector("#result");
  let playerChoice = event.target.id;

  if (playerChoice !== undefined) {
    computerChoose();
    whoIsTheWinner(playerChoice);

    displaySection.style.display = "flex";

    img1.setAttribute("src", `./assets/${playerChoice}.jpg`);
    img2.setAttribute("src", `./assets/${computer}.jpg`);

    c1.textContent = playerChoice;
    c2.textContent = computer;

    resultBanner.textContent = result;
  }
}

rockBtn.addEventListener("click", playNow);
paperBtn.addEventListener("click", playNow);
scissorBtn.addEventListener("click", playNow);

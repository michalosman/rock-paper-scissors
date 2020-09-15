const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", playRound);
paperButton.addEventListener("click", playRound);
scissorsButton.addEventListener("click", playRound);

function playRound(e) {
  if (isGameOver()) {
    alert("Game over, click F5 to play again");
    return;
  }
  const playerSelection = e.target.id.toUpperCase();
  const computerSelection = getRandomChoice();
  updateScore(getWinner(playerSelection, computerSelection));
  updateChoices(playerSelection, computerSelection);
}

const scoreHeading = document.querySelector("#score-heading");
const playerScorePara = document.querySelector("#player-score");
const computerScorePara = document.querySelector("#computer-score");
let playerScore = 0;
let computerScore = 0;

function updateScore(winner) {
  if (winner === "tie") {
    scoreHeading.textContent = "It's a tie!";
  } else if (winner === "player") {
    scoreHeading.textContent = "You won!";
    playerScore++;
  } else if (winner === "computer") {
    scoreHeading.textContent = "You lost!";
    computerScore++;
  }
  playerScorePara.textContent = `Player:  ${playerScore}`;
  computerScorePara.textContent = `Computer: ${computerScore}`;
  if (isGameOver()) setFinalMessage();
}

const containerDiv = document.querySelector("#container");
const choicesDiv = document.createElement("div");
const playerChoicePara = document.createElement("p");
const computerChoicePara = document.createElement("p");

containerDiv.appendChild(choicesDiv);
choicesDiv.appendChild(playerChoicePara);
choicesDiv.appendChild(computerChoicePara);

choicesDiv.style.display = "flex";
choicesDiv.style.justifyContent = "space-between";
choicesDiv.style.width = "360px";
choicesDiv.style.padding = "2rem";
choicesDiv.style.margin = "0 auto";
playerChoicePara.style.width = "45%";
computerChoicePara.style.width = "45%";

function updateChoices(playerSelection, computerSelection) {
  playerChoicePara.textContent = `Player's choice: ${playerSelection.toLowerCase()}`;
  computerChoicePara.textContent = `Computer's choice: ${computerSelection.toLowerCase()}`;
}

function setFinalMessage() {
  return playerScore > computerScore
    ? (scoreHeading.textContent = "Game over, you won")
    : (scoreHeading.textContent = "Game over, you lost");
}

function getWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
  }
  if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK")
  ) {
    return "player";
  }
  if (
    (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
    (computerSelection === "SCISSORS" && playerSelection === "PAPER") ||
    (computerSelection === "PAPER" && playerSelection === "ROCK")
  ) {
    return "computer";
  }
}

function getRandomChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "ROCK";
    case 1:
      return "PAPER";
    case 2:
      return "SCISSORS";
  }
}

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

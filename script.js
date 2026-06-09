  let playerScore = 0;
  let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  const resultMessage = document.getElementById("result-message");
  const scoreDisplay = document.getElementById("score");

  let result;

  if (playerSelection === computerSelection) {
    result = `It's a tie! You both chose ${playerSelection}.`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    result = `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    result = `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
  
  resultMessage.textContent = result;
  scoreDisplay.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
  
  if (playerScore === 5) {
    resultMessage.textContent = "You won the game! Refresh to play again.";
    disableButtons();
  } else if (computerScore === 5) {
    resultMessage.textContent = "The computer won the game! Refresh to play again.";
    disableButtons();
  }
}

function disableButtons() {
  document.querySelectorAll("#buttons button").forEach(btn => {
    btn.disabled = true;
  });
}

document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));


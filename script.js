function getComputerChoice() {
  const random = Math.random();
  if (random < 0.33) {
    return "rock";
  } else if (random < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return prompt("Enter rock, paper, or scissors:").toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`It's a tie! You both chose ${humanChoice}.`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
  }

  for (let i = 1; i <= 5; i++) {
    console.log(`--- Round ${i} ---`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Score: You ${humanScore} - ${computerScore} Computer`);
  }

  console.log("--- Game Over ---");
  if (humanScore > computerScore) {
    console.log(`You win the game! Final score: ${humanScore}-${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`Computer wins the game! Final score: ${humanScore}-${computerScore}`);
  } else {
    console.log(`It's a tie game! Final score: ${humanScore}-${computerScore}`);
  }
}

playGame();
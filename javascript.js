const choices= ["rock", "paper", "scissors"]

function getRandomInt() {
    return Math.floor(Math.random() * 3);
  }

function getComputerChoice() {
    return choices[getRandomInt()];
  }


let userInput= window.prompt("Pick one: Rock, Paper, or Scissors");
userInput= userInput.toLowerCase();

function getHumanChoice() {
  while (! choices.includes(userInput)) {
    userInput=window.prompt("Invalid choice. Please only choose one between: Rock, Paper, Scissors");
    userInput= userInput.toLowerCase();
  }

  return userInput;
}


let humanScore= 0;
let computerScore= 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      ++humanScore;
      ++computerScore;
      console.log("It is a draw. You both chose: " + humanChoice + ". Your points: " + humanScore + " | Computer points: " + computerScore);
    } 

    else if (humanChoice === "rock" && computerChoice === "scissors") {
      ++humanScore;
      console.log("You win! " + humanChoice + " beats " + computerChoice + ". Your points: " + humanScore + " | Computer points: " + computerScore)
    }
    
    else if (humanChoice === "paper" && computerChoice === "rock") {
      ++humanScore;
      console.log("You win! " + humanChoice + " beats " + computerChoice + ". Your points: " + humanScore + " | Computer points: " + computerScore)
    }

    else if (humanChoice === "scissors" && computerChoice === "paper") {
      ++humanScore;
      console.log("You win! " + humanChoice + " beats " + computerChoice + ". Your points: " + humanScore + " | Computer points: " + computerScore)
    }

    else {
      ++computerScore;
      console.log("You lose. " + computerChoice + " beats " + humanChoice + ". Your points: " + humanScore + " | Computer points: " + computerScore)
    }
  }

const humanSelection= getHumanChoice();
const computerSelection= getComputerChoice();

playRound(humanSelection, computerSelection);

console.log("human: ", humanSelection);
console.log("computer: ", computerSelection);
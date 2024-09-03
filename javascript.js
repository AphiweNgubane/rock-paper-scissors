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



function playGame () {
  let humanScore= 0;
  let computerScore= 0;

  for (let round = 1; round <= 5; round++) {
    console.log("Round", round);
  }

  const humanSelection= getHumanChoice();
  const computerSelection= getComputerChoice();

  let result= playRound(humanSelection, computerSelection);

  if (result === "draw") {
    console.log("It was a draw.");
  } 

  else if (result === "human") {
    console.log("You won this round!")
  }

  else if (result === "computer") {
    console.log("Computer won this round!")
  }

  console.log("Current score- You:", humanScore, "Computer:", computerScore);

  if (humanScore > computerScore) {
    console.log("YAY!!! You won the game!")
  }

  else if (humanScore < computerScore) {
    "Womp..womp... The computer won. Better luck next time..."
  }

  else {
    console.log("It's a tie game!")
  }

  function playRound(humanChoice, computerChoice) {
      if (humanChoice === computerChoice) {
        ++humanScore;
        ++computerScore;
        return "draw";
      } 

      else if (humanChoice === "rock" && computerChoice === "scissors") {
        ++humanScore;
        return "human"
      }
      
      else if (humanChoice === "paper" && computerChoice === "rock") {
        ++humanScore;
        return "human"
      }

      else if (humanChoice === "scissors" && computerChoice === "paper") {
        ++humanScore;
        return "human"
      }

      else {
        ++computerScore;
        return "computer"
      }
    }
  }

playGame();
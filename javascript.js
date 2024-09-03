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



  function playRound(humanChoice, computerChoice) {
      if (humanChoice === computerChoice) {
        ++humanScore;
        ++computerScore;
        return "draw";
        console.log("You both chose: " + humanChoice);
      } 

      else if (humanChoice === "rock" && computerChoice === "scissors") {
        ++humanScore;
        return "human"
        console.log(humanChoice + " beats " + computerChoice)
      }
      
      else if (humanChoice === "paper" && computerChoice === "rock") {
        ++humanScore;
        return "human"
        console.log(humanChoice + " beats " + computerChoice)
      }

      else if (humanChoice === "scissors" && computerChoice === "paper") {
        ++humanScore;
        return "human"
        console.log(humanChoice + " beats " + computerChoice)
      }

      else {
        ++computerScore;
        return "computer"
        console.log( computerChoice + " beats " + humanChoice)
      }
    }
  }

playGame();
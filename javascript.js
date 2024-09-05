const choices= ["rock", "paper", "scissors"]

function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    return choices[getRandomInt()];
}



function playGame () {
  let humanScore= 0;
  let computerScore= 0;

  for (let round = 1; round <= 5; round++) {
    console.log("Round", round);

    let humanSelection;
    while (true) {
      humanSelection= prompt("Round " + round + ": Please choose rock, paper, or scissors:").toLowerCase();
      if (humanSelection === "rock" || humanSelection === "paper" || humanSelection === "scissors") {
        break;
      }
      else {
        console.log("Invalid choice. Please choose either rock, paper, or scissors.");
      }
    }

    const computerSelection= getComputerChoice();
    console.log("You chose:", humanSelection, "| Computer chose:", computerSelection )

    let result= playRound(humanSelection, computerSelection);

    if (result === "draw") {
      console.log("It was a draw.");
      ++humanScore;
      ++computerScore;
    } 

    else if (result === "human") {
      console.log("You won this round!");
      ++humanScore;
    }

    else if (result === "computer") {
      console.log("Computer won this round!");
      ++computerScore;
    }

    console.log("Current score- You:", humanScore, "Computer:", computerScore);
    console.log("----------------------------------------------------------")
  }

  if (humanScore > computerScore) {
    console.log("YAY!!! You won the game!")
  }

  else if (humanScore < computerScore) {
    console.log("Womp womp... The computer won. Better luck next time...")
  }

  else {
    console.log("It's a tie game!")
  }
}

  function playRound(humanChoice, computerChoice) {
      if (humanChoice === computerChoice) {
        return "draw";
      } 

      else if (humanChoice === "rock" && computerChoice === "scissors") {
        return "human";
      }
      
      else if (humanChoice === "paper" && computerChoice === "rock") {
        return "human";
      }

      else if (humanChoice === "scissors" && computerChoice === "paper") {
        return "human";
      }

      else {
        return "computer";
      }
    }

playGame();
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
console.log(getHumanChoice())

let humanScore= 0;
let computerScore= 0;
const addHumanScore= ++humanScore;
const addComputerScore= ++computerScore;
  


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("It is a draw.");
    } 

    else {
      console.log("Not a draw. Let's move onto next.")
    }
    
  }

const humanSelection= getHumanChoice();
const computerSelection= getComputerChoice();

playRound(humanSelection, computerSelection);

console.log("human: ", humanSelection);
console.log("computer: ", computerSelection);
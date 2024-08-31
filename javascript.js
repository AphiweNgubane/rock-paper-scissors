const choices= ["rock", "paper", "scissors"]

function getRandomInt() {
    return Math.floor(Math.random() * 3);
  }

function getComputerChoice() {
    return choices[getRandomInt()];
  }

console.log(getComputerChoice());

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
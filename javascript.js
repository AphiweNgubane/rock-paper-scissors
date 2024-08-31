const choices= ["Rock", "Paper", "Scissors"]

function getRandomInt() {
    return Math.floor(Math.random() * 3);
  }

function getComputerChoice() {
    return choices[getRandomInt()];
  }

console.log(getComputerChoice());

let userInput= window.prompt("Pick one: Rock, Paper, or Scissors")

function getHumanChoice() {
  while (! choices.includes(userInput)) {
    window.prompt("Invalid choice. Please only choose one between: Rock, Paper, Scissors");
  }

  return userInput;
}
console.log(getHumanChoice())
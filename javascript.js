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
  if (choices.includes(userInput)) {
    return userInput
  } else  {
    alert("Invalid choice");
    window.prompt("Please only choose one between: Rock, Paper, Scissors");
  }
}
console.log(getHumanChoice())
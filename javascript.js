const choices= ["Rock", "Paper", "Scissors"]

function getRandomInt() {
    return Math.floor(Math.random() * 3);
  }

function getComputerChoice() {
    return choices[getRandomInt()];
  }

console.log(getComputerChoice());


const chooseOption= window.prompt("Pick one: Rock, Paper, or Scissors")
function getHumanChoice() {
    return chooseOption;
}

console.log(chooseOption)
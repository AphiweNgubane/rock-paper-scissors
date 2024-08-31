const choices= ("Rock", "Paper", "Scissors")

function getRandomInt() {
    return Math.floor(Math.random() * 3);
  }

function getComputerChoice() {
    return choices(getRandomInt());
  }

console.log(getComputerChoice());

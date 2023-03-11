


const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtn = document.querySelector(".choiceBtn");







let playerSelection;

let computerSelection;
//console.log(playRound(playerSelection, computerSelection));
let result;



game();

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Do you choose rock,paper or scissors");
        playerSelection = playerSelection.toLowerCase();
        getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));

    }
}

function getComputerChoice() {
    const ranNum = Math.floor(Math.random() * 3 + 1);

    if (ranNum === 1) {
        computerSelection = "rock"
    } else if (ranNum === 2) {
        computerSelection = "scissors"
    } else if (ranNum === 3) {
        computerSelection = "paper"
    }


}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "it's a draw";

    } else if (computerSelection === "rock") {
        return (playerSelection === "paper") ? "You Win! cause paper beats rock" : "You Lose cause rock beats scissors"

    } else if (computerSelection === "paper") {
        return (playerSelection === "scissors") ? "You Win! cause scissors beats paper" : "You Lose cause paper beats rock"
    } else if (computerSelection === "scissors") {
        return (playerSelection === "rock") ? "You Win! cause rock beats scissors" : "You Lose cause scissors beats paper"
    }
}



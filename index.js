


const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const buttons = document.querySelectorAll(".choiceBtn");
const reset = document.querySelector(".Reset");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");

let playerSelection;
let computerSelection;
let result;
let count = 0;

let player = 0;
let computer = 0;

function startGame(){
  count =0;
  player = 0;
  computer = 0;
  playerText.textContent = `Player: `;
  computerText.textContent = `Computer:`
  resultText.textContent = ``;
  playerScore.textContent = `Player: ${player}` ;
  computerScore.textContent = `Computer: ${computer}`;

}

   reset.addEventListener('click',startGame)

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
       if(count < 5) {
         playerSelection = btn.value;
         getComputerChoice();

         playerText.textContent = `Player: ${playerSelection.toUpperCase()}`;
         computerText.textContent = `Computer: ${computerSelection.toUpperCase()}`
         result = (playRound(playerSelection, computerSelection));
         resultText.textContent = `${result}`;
         count++;
       }
      })
    });



  function getComputerChoice() {
    const ranNum = Math.floor(Math.random() * 3 + 1);

    if (ranNum === 1) {
      computerSelection = "rock";
    } else if (ranNum === 2) {
      computerSelection = "scissors";
    } else if (ranNum === 3) {
      computerSelection = "paper";
    }
  }

  function playerWin() {
      player++;
      playerScore.textContent = `Player: ${player}` ;
      return "You Win";

  }
  function computerWin() {
      computer ++;
      computerScore.textContent = `Computer: ${computer}`;
      return "You Lose"
  }


 function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "it's a draw";
    } else if (computerSelection === "rock") {
      return playerSelection === "paper"
          ? playerWin() +" cause paper beats rock"
          : computerWin()+" cause rock beats scissors";
    } else if (computerSelection === "paper") {
      return playerSelection === "scissors"
          ? playerWin() +" cause scissors beats paper"
          : computerWin()+" cause paper beats rock";
    } else if (computerSelection === "scissors") {
      return playerSelection === "rock"
          ? playerWin() +"  cause rock beats scissors"
          : computerWin()+" scissors beats paper";
    }
  }



  //set the score to 0
 let rounds = 0;
  let playerScore = 0;
  let computerScore = 0;

//function to return randomly "rock", "paper" or "scissors"
function getComputerChoice() {
  let computerSelection = ''
  let random = Math.floor(Math.random()*3)
    if (random == 1){
      computerSelection = 'rock'
    } else if (random == 2) {
      computerSelection = 'paper' 
    } else if (random == 3) {
      computerSelection = 'scissors'
    } else {
      console.log("error!!")
    }
  document.getElementById("pc-choice").innerHTML = 'The computer chose ' + computerSelection;
return computerSelection
}


  //function that plays a single round of Rock Paper Scissors
   function playRound (playerSelection, getComputerChoice) {
    getComputerChoice();
      // in case computer selection is the same than player selection
      if (computerSelection === playerSelection) {
        document.getElementById("result").innerHTML = "It's a tie! Try again!"
        return undefined;
      } else if
        // Computer plays rock and Player plays paper
        ((computerSelection === 'rock') && (playerSelection === 'paper')) {
          document.getElementById("result").innerHTML = "You win!!"
        return true;
      } else if
        // Computer plays rock and Player plays scissors 
        ((computerSelection === 'rock') && (playerSelection === 'scissors')) {
        document.getElementById("result").innerHTML = "You lose!!"
        return false;
      } else if
        // computer plays paper and player plays scissors
        ((computerSelection === 'paper') && (playerSelection === 'scissors')) {
        document.getElementById("result").innerHTML = "You win!!"
        return true;
      } else if
        // computer plays paper and player plays rock
        ((computerSelection === 'paper') && (playerSelection === 'rock')) {
        document.getElementById("result").innerHTML = "You lose!!"
        return false;
      } else if
        // computer plays scissors and player plays rock
        ((computerSelection === 'scissors') && (playerSelection === 'rock')) {
        document.getElementById("result").innerHTML = "You win!!"
        return true;
      } else if
        // computer plays scissors and player plays paper
        ((computerSelection === 'scissors') && (playerSelection === 'paper')) {
        document.getElementById("result").innerHTML = "You lose!!"
        return false;
      }
    } 

 //play 5 rounds of game and keep score + reports a winner or looser at the end
function game() {
  // keep turns
  for (let i = 0; i < 5; i++) {
    if (i < 5) {
      console.log("Turn" + i);
      document.getElementById("turnNum").innerHTML = `Turn ${i}`
      console.log(`The score is ${computerScore} for the computer and ${playerScore} for you`);
      document.getElementById("playerScore").innerHTML = `${playerScore}`
      document.getElementById("computerScore").innerHTML = `${computerScore}`

      let playerSelection = id;
      let computerChoice = getComputerChoice();

      // if its a tie, one more round
      let round = playRound(playerSelection, computerChoice);
      if (round == undefined) {
        i -= 1;
      }
      // if it true, +1 point for player
      if (playRound(playerSelection, computerChoice)) {
        playerScore += 1;
        // if false, +1 point for computer
      } else {
        computerScore += 1;
      }

    } else {
      document.getElementById("result").innerHTML = "Game over"
    }
    // tell who is the winner
    if (playerScore > computerScore) {
      document.getElementById("result").innerHTML = "Congratulations! You win!"
    } else {
      document.getElementById("result").innerHTML = 'You lost! Try again...'
    }
  }
}

document.addEventListener("DOMContentLoaded", function(event) { 
  let rockButton = document.querySelector('#rock');
  rockButton.addEventListener('click', function () {playRound('rock', getComputerChoice)});
  let paperButton = document.querySelector('#paper');
  paperButton.addEventListener('click', function () {playRound('paper', getComputerChoice)});
  let scissorsButton = document.querySelector('#scissors');
  scissorsButton.addEventListener('click', function () {playRound('scissors', getComputerChoice)});
});
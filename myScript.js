//Add an event listener to the buttons 
const buttons = document.querySelectorAll('button');

console.log(buttons);


for (const button of buttons) {
    button.addEventListener('click', playRound())
    console.log(button)
   };

//function to return randomly "rock", "paper" or "scissors"
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const random = choices[Math.floor(Math.random() * choices.length)];
  console.log(random);
  return random;
}

//function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  // in case computer selection is the same than player selection
  if (computerSelection === playerSelection) {
    console.log("It's a tie! Try again!")
    return undefined;
  } else if
    // Computer plays rock and Player plays paper
    ((computerSelection === 'rock') && (playerSelection === 'paper')) {
    console.log("You win!!")
    return true;
  } else if
    /* Computer plays rock and Player plays scissors */
    ((computerSelection === 'rock') && (playerSelection === 'scissors')) {
    console.log("You lose :( ")
    return false;
  } else if
    // computer plays paper and player plays scissors
    ((computerSelection === 'paper') && (playerSelection === 'scissors')) {
    console.log("You win!!")
    return true;
  } else if
    // computer plays paper and player plays rock
    ((computerSelection === 'paper') && (playerSelection === 'rock')) {
    console.log("You lose :( ")
    return false;
  } else if
    // computer plays scissors and player plays rock
    ((computerSelection === 'scissors') && (playerSelection === 'rock')) {
    console.log("You win!!")
    return true;
  } else if
    // computer plays scissors and player plays paper
    ((computerSelection === 'scissors') && (playerSelection === 'paper')) {
    console.log("You lose :( ")
    return false;
  }
}

/* //play 5 rounds of game and keep score + reports a winner or looser at the end
function game() {
  //set the score to 0
  let playerScore = 0;
  let computerScore = 0;

  // keep turns
  for (let i = 0; i < 5; i++) {
    if (i < 5) {
      console.log("Turn" + i);
      alert(`The score is ${computerScore} for the computer and ${playerScore} for you`);
      let playerSelection = prompt("Please choose between rock, paper, and scissors");
      // Make your function’s playerSelection parameter case-insensitive 
      playerSelection = playerSelection.toLowerCase();
      console.log(playerSelection);
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
      console.log("Game over");
    }
    // tell who is the winner
    if (playerScore > computerScore) {
      alert("Congratulations! You win!")
    } else {
      alert('You lost! Try again...')
    }
  }
}
*/


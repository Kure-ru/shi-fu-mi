//function to return randomly "rock", "paper" or "scissors"
function  getComputerChoice(){
  const choices = ["rock", "paper", "scissors"];
  const random = choices[Math.floor(Math.random() * choices.length)];
  console.log(random);
  return random;
}

//set the score to 0
  let playerScore = 0;
  let computerScore = 0;

//play 5 rounds of game and keep score + reports a winner or looser at the end
function game(){
// keep turns
for (let i = 0; i < 5; i++) {
  if (i = 0){
    console.log("Let's start");
    let playerSelection = prompt("Please choose between rock, paper, and scissors");
console.log(playerSelection);
  } else if (i < 5) {
 console.log("Try again. Turn" + i);
 let playerSelection = prompt("Please choose between rock, paper, and scissors");
console.log(playerSelection);
  } else if (i >= 5) {
  console.log("Game over");
   }
}
/*the player inputs a choice
let playerSelection = prompt("Please choose between rock, paper, and scissors");
console.log(playerSelection);*/

// Make your function’s playerSelection parameter case-insensitive 
playerSelection = playerSelection.toLowerCase();

//function that plays a single round of Rock Paper Scissors
function playRound (playerSelection, computerSelection){  
  // in case computer selection is the same than player selection
    if(computerSelection === playerSelection) {
      console.log( "It's a tie! Try again!")
      return;
    } else if 
  // Computer plays rock and Player plays paper
  ((computerSelection === 'rock') && (playerSelection === 'paper')){
    console.log( "You win!!")
    return playerScore +=1;
  } else if
   /* Computer plays rock and Player plays scissors */
  ((computerSelection === 'rock') && (playerSelection === 'scissors')){
    console.log( "You lose :( ")
    return computerScore +=1;
    } else if 
  // computer plays paper and player plays scissors
  ((computerSelection === 'paper') && (playerSelection === 'scissors')){
    console.log( "You win!!")
    return playerScore +=1;
  } else if
  // computer plays paper and player plays rock
  ((computerSelection === 'paper') && (playerSelection === 'rock')){
    console.log( "You lose :( ")
    return computerScore +=1;
  } else if
  // computer plays scissors and player plays rock
  ((computerSelection === 'scissors') && (playerSelection === 'rock')){
    console.log( "You win!!")
    return playerScore +=1;
  } else if
  // computer plays scissors and player plays paper
  ((computerSelection === 'scissors') && (playerSelection === 'paper')){
    console.log( "You lose :( ")
    return computerScore +=1;
  } 
  }
  

//show the score
alert(`The score is ${computerScore} for the computer and ${playerScore} for you`)
}

//the function returns a string that declares the winner of the round
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


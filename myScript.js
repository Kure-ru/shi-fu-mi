//function to return randomly "rock", "paper" or "scissors"
function  getComputerChoice(){
  const choices = ['rock', 'paper', 'scissors'];
  const random = choices[Math.floor(Math.random() * choices.length)];
  console.log(random);
  return  choices[random];
}

//function that plays a single round of Rock Paper Scissors
function playRound (playerSelection, computerSelection){
  // in case C is rock and P paper 
  if (computerSelection === "rock" && playerSelection === "paper"){
    console.log("You win!")
  }
  else{
    console.log("You lose!")
  }

 // in case C is paper and P scissors
 if (computerSelection === "paper" && playerSelection === "scissors"){
  console.log("You win!")
}
else{
  console.log("You lose!")
}

 // in case C is scissors and P is rock
 if (computerSelection === "scissors" && playerSelection === "rock"){
  console.log("You win!")
}
else{
  console.log("You lose!")
}


  //the function returns a string that declares the winner of the round
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

// Make your function’s playerSelection parameter case-insensitive 
input = input.toUpperCase();

//Declaring Variable for User Choice
const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
if (userInput ==='rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'friedChicken'){
  return userInput;
} else {
  console.log('Error!');
}
};

//Testing User Choice function
console.log(getUserChoice('rock'));
console.log(getUserChoice('icecream'));

//Declaring Variable for Computer Choice
const getComputerChoice = () => {
computerChoice = Math.floor(Math.random() * 3);

switch(computerChoice) {
  case 0:  return 'rock';
  break;
  case 1: return 'paper';
  break;
  case 2: return 'scissors'
  break;
  default:
}
};

// Testing Computer Choice Function
console.log(getComputerChoice());

//Determining Winner
let determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
   return 'The Game Tie!!!';
  } 

  if (userChoice === 'rock') {
    if(computerChoice === 'paper'){
  return 'The computer wins';
    } else {
      return 'You won';
    }
  }

  if (userChoice === 'paper') {
    if(computerChoice === 'scissors'){
  return 'The computer wins';
    } else {
      return 'You won';
    }
  }

  if (userChoice === 'scissors') {
    if(computerChoice === 'rock'){
  return 'The computer wins';
    } else {
      return 'You won';
    }
  }

  if(userChoice === 'friedChicken'){
  return 'You won';
  }

}

//Test determine winner function
console.log(determineWinner('paper', 'scissors' ));
console.log(determineWinner('paper', 'paper' ));
console.log(determineWinner('paper', 'rock' ));


//Start the game and log the result
const playGame = () => {
const userChoice = getUserChoice('rock');
const computerRandomNumber = getComputerChoice();
console.log('You choose: ' + userChoice);
console.log('The computer choose: ' + computerRandomNumber );
console.log(determineWinner(userChoice, computerRandomNumber ));
};

playGame();



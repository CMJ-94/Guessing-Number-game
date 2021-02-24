let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Step 1: Generate random number between 0 and 9
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

// Step 2:This function calls each round to determine which guess is closest to target number
const compareGuesses = (human, computer, target) => {
  const humanGuess = Math.abs(human - target);
  const computerGuess = Math.abs(computer - target);
  if (humanGuess <= computerGuess) {
    return true;
  } else {
    return false;
  }
};

// Step 3: Function used to correctly increase the winner's score after each round
const updateScore = string => {
  if (string === 'human') {
         humanScore += 1;
     }else if (string === 'computer') {
         computerScore += 1;
     }
}

// Step 4: To updte the round number after each round 

const advanceRound = () => {
  currentRoundNumber += 1;
}

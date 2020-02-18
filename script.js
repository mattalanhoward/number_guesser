let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}


// const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
//     const humanDifference = Math.abs(targetGuess - humanGuess)
//     const computerDifference = Math.abs(targetGuess - computerGuess)
//     return humanDifference <= computerDifference;
//   }

  
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    const humanDif = Math.abs(targetNumber - humanGuess);
    const computerDif = Math.abs(targetNumber - computerGuess);

    if (humanDif <= computerDif) {
        return true; 
    } else {
        return false;
    }
    }
    // const updateScore = winner => {
    //     if (winner === 'human') {
    //       humanScore++;
    //     } else if (winner === 'computer') {
    //       computerScore++;
    //     }
    //   }

const updateScore = winner => {
    if (winner === 'human') {
        (humanScore += 1);
    } else if (winner === 'computer') {
            (computerScore += 1)
       }
    }

    const advanceRound = () => {
        currentRoundNumber += 1;
    }
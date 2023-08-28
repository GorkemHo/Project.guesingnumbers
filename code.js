function startGame() {
  while (true) {
    const targetNumber = Math.floor(Math.random() * 100) + 1;
    let numberOfGuesses = 0;
    let guessedNumber;

    while (guessedNumber !== targetNumber) {
      guessedNumber = parseInt(prompt("Guess a number between 1 and 100:"));

      if (isNaN(guessedNumber)) {
        alert("Please enter a valid number.");
      } else {
        numberOfGuesses++;

        if (guessedNumber < targetNumber) {
          alert("Try higher!");
        } else if (guessedNumber > targetNumber) {
          alert("Try lower!");
        } else {
          alert(`Congratulations! You guessed the number ${targetNumber} in ${numberOfGuesses} ${numberOfGuesses === 1 ? 'guess' : 'guesses'}.`);
        }
      }
    }

    const playAgain = confirm("Do you want to play again?");
    if (!playAgain) {
      break; 
    }
  }
}

startGame(); 
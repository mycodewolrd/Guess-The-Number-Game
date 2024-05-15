let randomNumber;
    let guesses = [];
    let remainingGuesses = 10;

    function startNewGame() {
      randomNumber = generateRandomNumber();
      guesses = [];
      remainingGuesses = 10;
      document.getElementById("guessInput").disabled = false;
      document.querySelector("button").disabled = false;
      document.getElementById("correctNumber").classList.add("hidden");
      document.getElementById("newGameLink").classList.add("hidden");
      document.getElementById("result").innerHTML = "";
      document.getElementById("previousGuesses").innerHTML = "";
      document.getElementById("remaining").textContent = remainingGuesses;
    }

    function generateRandomNumber() {
      return Math.floor(Math.random() * 100) + 1;
    }
    generateRandomNumber()
    
    function checkGuess() {
      let guess = parseInt(document.getElementById("guessInput").value);

      if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
      }

      guesses.push(guess);
      document.getElementById("previousGuesses").innerHTML = "Previous Guesses: " + guesses.join(", ");

      if (guess === randomNumber) {
        document.getElementById("result").innerHTML = "Congratulations! You guessed the number!";
        endGame();
      } else {
        let message = guess < randomNumber ? "Too low. " : "Too high. ";
        document.getElementById("result").innerHTML = message + "Try again.";
        remainingGuesses--;
        document.getElementById("remaining").textContent = remainingGuesses;
        if (remainingGuesses === 0) {
          document.getElementById("result").innerHTML = "Game over. The number was " + randomNumber + ".";
          endGame();
        }
      }

      document.getElementById("guessInput").value = "";
    }

    function endGame() {
      document.getElementById("guessInput").disabled = true;
      document.querySelector("button").disabled = true;
      document.getElementById("correctNumber").classList.remove("hidden");
      document.getElementById("actualNumber").textContent = randomNumber;
      document.getElementById("newGameLink").classList.remove("hidden");
    }

    startNewGame(); // Automatically start a new game when the page loads
  

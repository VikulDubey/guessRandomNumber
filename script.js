// Random number generator
const randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);
const inputField = document.querySelector("input[type=text]");
const submitButton = document.querySelector("input[type=submit]");
const form = document.querySelector("form");
const result = document.querySelector("#result");
const previousGuesses = document.querySelector(".previousGuesses");
const remainingGuesses = document.querySelector(".remainingGuesses");
const emptyArray = [];
let attempts = 10;
let invalidAttempts = 1;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputFieldValue = parseInt(inputField.value);
  emptyArray.push(inputFieldValue);
  const resultString = emptyArray.toString();
  previousGuesses.innerHTML = `Previous guesses: ${resultString}`;
  previousGuesses.classList.add("style");

  // Result will be visible now.
  result.style.opacity = "1";
  // If else statements for validation

  // if you have entered wrong input.

  if (
    inputFieldValue == undefined ||
    inputFieldValue === "" ||
    isNaN(inputFieldValue) ||
    inputFieldValue < 1 ||
    inputFieldValue > 100
  ) {
    result.innerHTML = "Enter a valid value.";
    invalidAttempts++;
    console.log(invalidAttempts);
    if (invalidAttempts > 3) {
      Object.freeze(emptyArray);
      result.innerHTML = "You entered multiple invalid inputs.";
      setTimeout(() => {
        alert("Refresh the Page! To Play Again");
      }, 2000);
    }
  }
  // When you guessed right number.
  else if (inputFieldValue === randomNumber) {
    result.innerHTML = `You guessed right Number: ${inputFieldValue}`;
    remainingGuesses.innerHTML = `Remaining Guesses : ${attempts}`;
    remainingGuesses.classList.add("style");
    Object.freeze(emptyArray);
    setTimeout(() => {
      alert(`Refresh Now for new Game!`);
    }, 1000);
  }
  // When attempts finished.
  else if (attempts == 0) {
    Object.freeze(emptyArray);

    result.innerHTML = `You have finished your attempts`;
  }
  // A complete else block for not equal to random number.
  else {
    // If you guessed lower number.
    if (inputFieldValue > randomNumber) {
      result.innerHTML = "You guessed higher than the random number";
      inputField.value = "";
    }
    // If you guessed higher Number.
    else if (inputFieldValue < randomNumber) {
      result.innerHTML = "You guessed lower than the random number";
      inputField.value = "";
    }
    // If you guessed Wrong Number.
    else {
      result.innerHTML = "Wrong Guessed!";
      inputField.value = "";
    }
    // If you guessed wrong the attempts will be decrease.
    --attempts;
    remainingGuesses.innerHTML = `Remaining Guesses : ${attempts}`;
    remainingGuesses.classList.add("style");
  }
});

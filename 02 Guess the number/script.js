const input = document.querySelector("#input");
const output = document.querySelector("#output");
const guessDisplay = document.querySelector("#guessDisplay");
const submit = document.querySelector("#submit");
const form = document.querySelector("#form");
const startGame = document.querySelector("#startGame");

let randomValue = Math.round(Math.random() * 100);
let guessArr = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = parseInt(input.value);

  if (inputValue < randomValue) {
    output.innerText = "Too low!";
  } else if (inputValue > randomValue) {
    output.innerText = "Too heigh!";
  } else if (inputValue === randomValue) {
    output.innerText = "You got it! Congrats";
    submit.disabled = true;
    startGame.disabled = false;
  }

  guessArr.push(inputValue);
  guessDisplay.innerText = "Your guesses: " + guessArr.join(", ");
  form.reset();
  // input.value = "";
});

startGame.addEventListener("click", () => {
  output.innerText = "";
  guessDisplay.innerText = "";
  submit.disabled = false;
  startGame.disabled = true;
  randomValue = Math.round(Math.random() * 100);
  guessArr = [];
});

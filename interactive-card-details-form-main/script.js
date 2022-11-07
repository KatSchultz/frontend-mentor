const nameDisplay = document.getElementById("card-name-display");
const numberDisplay = document.getElementById("card-num-display");
const monthDisplay = document.getElementById("mon-display");
const yearDisplay = document.getElementById("year-display");
const cvcDisplay = document.getElementById("cvc-display");

const nameInput = document.getElementById("name-input");
const numberInput = document.getElementById("number-input");
const monthInput = document.getElementById("month-input");
const yearInput = document.getElementById("year-input");
const cvcInput = document.getElementById("cvc-input");

nameDisplay.innerText = nameInput.innerText;

nameInput.addEventListener("keyup", () => {
  nameDisplay.innerText = nameInput.value;
});

numberInput.addEventListener("keyup", () => {
  numberDisplay.innerText = numberInput.value;
});
monthInput.addEventListener("keyup", () => {
  monthDisplay.innerText = monthInput.value;
});
yearInput.addEventListener("keyup", () => {
  yearDisplay.innerText = yearInput.value;
});
cvcInput.addEventListener("keyup", () => {
  cvcDisplay.innerText = cvcInput.value;
});

//Input, button and Tips
const billInput = document.querySelector("#numberTip");
const numberPeopleInput = document.querySelector("#numberPeople");
const tipsButtons = document.querySelectorAll(".container__tips");
const customTips = document.querySelector("#tip-custom");
const resetButton = document.querySelector("#reset");
const errorMessage = document.querySelector(".container__paragraph-error");

//Sum
const totalSum = document.querySelector("#current-total-sum");
const currentTipSum = document.querySelector("#current-tip-sum");

//EventListeners
billInput.addEventListener("change", billFunction);
numberPeopleInput.addEventListener("change", peopleFunction);
tipsButtons.forEach(function (value) {
  value.addEventListener("click", activationButtonsTips);
});
customTips.addEventListener("change", calculateTips);
resetButton.addEventListener("click", resetFunction);

// Start Values
billInput.value = "0.0";
numberPeopleInput.value = "1";
totalSum.innerHTML = "$" + (0.0).toFixed(2);
currentTipSum.innerHTML = "$" + (0.0).toFixed(2);

//Functions
let billValueInput = 0.0;
let peopleValueInput = 1;
let tipValueInput = 0.15;

function billFunction() {
  billValueInput = parseFloat(billInput.value);
  calculateTips();
}

function peopleFunction() {
  peopleValueInput = parseFloat(numberPeopleInput.value);

  if (peopleValueInput < 1) {
    errorMessage.style.display = "flex";
    numberPeopleInput.style.border = "2px solid #e37254";
  } else {
    errorMessage.style.display = "none";
    numberPeopleInput.style.border = "none";
    calculateTips();
  }
  console.log("dupa", peopleValueInput);
}

function customTipsFunction() {
  tipValueInput = parseFloat(customTips.value / 100);
  tipsButtons.forEach(() => {
    value.classList.remove("calculator__button--active");
  });
  calculateTips();
}

function activationButtonsTips(event) {
  tipsButtons.forEach((value) => {
    value.classList.remove("calculator__button--active");
    if (event.target.innerHTML == value.innerHTML) {
      value.classList.add("calculator__button--active");
      tipValueInput = parseFloat(value.innerHTML) / 100;
    }
  });
  calculateTips();
}

function calculateTips() {
  peopleValueInput = parseFloat(numberPeopleInput.value);
  if (peopleValueInput >= 1) {
    let numberTips = (billValueInput * tipValueInput) / peopleValueInput;
    let totalValue = (billValueInput + numberTips) / peopleValueInput;
    currentTipSum.innerHTML = "$" + numberTips.toFixed(2);
    totalSum.innerHTML = "$" + totalValue.toFixed(2);
  } else if (numberPeopleInput.value) {
    let numberTips = (billValueInput * tipValueInput) / peopleValueInput;
    let totalValue = (billValueInput + numberTips) / peopleValueInput;
    currentTipSum.innerHTML = "$" + numberTips.toFixed(2);
    totalSum.innerHTML = "$" + totalValue.toFixed(2);
  }
}

function resetFunction() {
  billInput.value = "0.0";
  billFunction();
  numberPeopleInput.value = "1";
  peopleFunction();
  customTips.value = "";
}

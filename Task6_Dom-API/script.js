/* --------------------  Capturing items -------------------- */

/* Input */
const billInput = document.getElementById("numberTip");
const numberPeopleInput = document.querySelector("#numberPeople");
const customTipsInput = document.querySelector("#tip-custom");

/* Buttons */
const tipsButtons = document.querySelectorAll(".container__tips");
const resetButton = document.querySelector("#reset");

/* Paragraphs */
const tipAmountSum = document.querySelector("#current-tip-sum");
const totalSum = document.querySelector("#current-total-sum");

/* -------------------- Adding addEventListeners -------------------- */
/* Input */
billInput.addEventListener("change", billInputFunction);
numberPeopleInput.addEventListener("change", numberPeopleInputFunction);
customTipsInput.addEventListener("change", customTipsInputFunction);

/* Buttons */
tipsButtons.forEach(function (event) {
  event.addEventListener("click", tipsButtonsFunction);
});
/* -------------------- Functions -------------------- */

/* Input */
function billInputFunction() {
  let billInputValues = parseFloat(billInput.value);
}

function numberPeopleInputFunction() {
  let numberPeopleInputValues = parseFloat(numberPeopleInput.value);
}

function customTipsInputFunction() {
  let customTipsInputValues = parseFloat(customTipsInput.value);
}

function tipsButtonsFunction(event) {
  tipsButtons.forEach((value) => {
    value.classList.remove("calculator__button--active");
    if (event.target.innerHTML == value.innerHTML) {
      value.classList.add("calculator__button--active");
      tipValueInput = parseFloat(value.innerHTML) / 100;
    }
  });
}

/* Paragraphs */
// tipAmountSum.innerHTML = customTipsInputValues;
// function tipAmountSumFunction() {}
// tipAmountSumFunction();

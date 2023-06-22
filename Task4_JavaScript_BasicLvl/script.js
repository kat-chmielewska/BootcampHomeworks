//Zadanie 1

console.log("#1 Task");

const column = 6;
const star = "*";
const space = " ";
let halfTree = "";

for (i = 1; i < column; i++) {
  for (j = 0; j < 0 + i; j++) {
    halfTree = halfTree + star + space;
  }
  halfTree = halfTree.slice(0, -1) + "\n";
}
console.log(halfTree);

console.log("#1 Task - Version 2");

let halfTreeTwo = "";
for (let i = 0; i < 5; i++) {
  console.log((halfTreeTwo += "*"));
}

console.log("--------------------------------------------------");

//Zadanie 2

console.log("#2 Task");

let patternBox = "";
const dash = "-";

function pattern(sign, number) {
  for (i = 0; i < number && i < 10; i++) {
    patternBox = sign + dash;
  }
  return patternBox.repeat(i).slice(0, -1);
}

console.log(pattern("!", 17));
console.log(pattern("$", 5));
console.log(pattern("@", 3));

console.log("--------------------------------------------------");

//Zadanie 3

console.log("#3 Task");

function evenNumbersOnly(someArrays) {
  return someArrays
    .filter((someArrays) => someArrays % 2 === 0)
    .filter((someArrays) => someArrays !== null)
    .filter((someArrays) => someArrays !== undefined)
    .filter((someArrays) => someArrays.length !== 0);
}

console.log(evenNumbersOnly([1, 2, 3, 4, 5, 6, 7]));
console.log(evenNumbersOnly(["Czasem", 12, "Słońce", 3, "czasem", 600, "deszcz"]));
console.log(evenNumbersOnly([{}, {}, [], [], "abc", 2]));
console.log(evenNumbersOnly(["a", null, true, undefined, {}, []]));

console.log("#3 Task - Version 2");

const evenNumbersOnly = (array) => array.filter((value) => typeof value === "number" && value % 2 === 0);

console.log(evenNumbersOnly([1, 2, 3, 4, 5, 6, 7]));
console.log(evenNumbersOnly(["Czasem", 12, "Słońce", 3, "czasem", 600, "deszcz"]));
console.log(evenNumbersOnly([{}, {}, [], [], "abc", 2]));
console.log(evenNumbersOnly(["a", null, true, undefined, {}, []]));

console.log("--------------------------------------------------");

//Zadanie 4

console.log("#4.1 Task");

// Function according to the content of the task

function isPasswordCorrect(password) {
  if (password.length >= 6 && password.match(/[0-9]/g) && password.match(/[^a-zA-Z 0-9]+/g)) {
    return true;
  } else {
    return false;
  }
}

console.log(isPasswordCorrect("infoShare"));
console.log(isPasswordCorrect("qwerty123"));
console.log(isPasswordCorrect("qwerty123!"));
console.log(isPasswordCorrect("!qw12"));

console.log("--------------------------------------------------");

// Function number two with the option of entering your own password and including a capital letter

/*
1. the password is at least 6 characters long
2. contains at least one special character
3. contains at least one digit
4. contains at least one uppercase letter
5. password cannot be an empty string
Returns true or false
*/

console.log("#4.2 Task");

const passwordTwo = prompt("Enter your password");

function isPasswordCorrectTwo(passwordTwo) {
  if (
    passwordTwo.length >= 6 &&
    passwordTwo.match(/[A-Z]/g) &&
    passwordTwo.match(/[0-9]/g) &&
    passwordTwo.match(/[^a-zA-Z 0-9]+/g) &&
    passwordTwo !== ""
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(isPasswordCorrectTwo(passwordTwo));

console.log("--------------------------------------------------");

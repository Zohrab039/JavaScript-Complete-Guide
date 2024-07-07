
// outputResult(currentResult, calculationDescription);

// function add(num1, num2) {
//   const result = num1 + num2;
//   return result
// }

// currentResult = add(1, 2);
// console.log(currentResult);


// function subtract(a, b) {
//   return a - b
// }

// function stringify(subtract) {
//   return String(subtract)
// }

// console.log(stringify(10));
// console.log(subtract(12, 10));

// let userName = 'Max'; // Max
// function greetUser(name) {
//   alert(userName); // Max
// }
// userName = 'Manu';
// greetUser('Max');


// function double(a){
//   return (a * 2);
// }

// double(10);

// function transform(num, fn){
//   return fn(num) ;
// }
// transform(10, double); // double = fn(num) = a * 2 funksiyası belə olduğu üçün və buna görə də fun(num) adında funksiyaya da bunu əlavə edirik ki belə olsun cavabı da 10 qoyduğumuz zaman 2 qatı olaraq 20 edir.

const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
  return parseInt(userInput.value);

}

function add() {
  const enteredNumber = getUserInput();
  calcDescription = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);

function sumOfNums(a, b) {
  console.log(a + b);
}

sumOfNums(3, 4.43);

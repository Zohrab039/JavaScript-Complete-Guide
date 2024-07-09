
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


// /* !


const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}


function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calcOperation) {
  if (
    calcOperation !== 'ADD' &&
    calcOperation !== 'SUBTRACT' &&
    calcOperation !== 'DIVIDE' &&
    calcOperation !== 'POWER'
  ) {
    return;
  }

  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  let mathOperation;
  if (calcOperation === 'ADD') {
    currentResult += enteredNumber;
    mathOperation = '+';
  } else if (calcOperation === 'SUBTRACT') {
    currentResult -= enteredNumber;
    mathOperation = '-';
  } else if (calcOperation === 'MULTIPLY') {
    currentResult *= enteredNumber;
    mathOperation = '*';
  } else if (calcOperation === 'DIVIDE') {
    currentResult /= enteredNumber;
    mathOperation = '/';
  } else if (calcOperation === 'POWER') {
    currentResult **= enteredNumber;
    mathOperation = '**';
  }


  createAndWriteOutput(mathOperation, initialResult, enteredNumber);
  writeToLog(calcOperation, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult('ADD');
}

function subtract() {
  calculateResult('SUBTRACT');
}

function multiply() {
  calculateResult('MULTIPLY');
}

function divide() {
  calculateResult('DIVIDE');
}

function power() {
  calculateResult('POWER');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
powerBtn.addEventListener('click', power);

// ! */
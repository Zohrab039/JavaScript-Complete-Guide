const defaultResult = 0;
let currentResult = defaultResult;

// outputResult(currentResult, calculationDescription);

function add(num1, num2) {
  const result = num1 + num2;
  return result
}

currentResult = add(1, 2);
console.log(currentResult);


function subtract(a, b){
  return a - b
}

function stringify(subtract){
  return String(subtract)
}

console.log(stringify(10));
console.log(subtract(12, 10));
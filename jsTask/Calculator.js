let num1 = [12, 20, 2, 10];
let num2 = [4, 16, 7, 5 , 0];
let operation = ["+", "-", "*", "/"];

function calculator(num1, num2, operation) {
  if (operation == "+") return num1 + num2;
  if (operation == "-") return num1 - num2;
  if (operation == "*") return num1 * num2;
  if (operation == "/") {
    if (num2 == 0) return "Error: cannot divide by zero";
    return num1 / num2;
  }
  return "Invalid operation";
}

console.log(`${num1[0]} ${operation[0]} ${num2[0]} = ${calculator(num1[0], num2[0], operation[0])}`);
console.log(`${num1[1]} ${operation[1]} ${num2[1]} = ${calculator(num1[1], num2[1], operation[1])}`);
console.log(`${num1[2]} ${operation[2]} ${num2[2]} = ${calculator(num1[2], num2[2], operation[2])}`);
console.log(`${num1[3]} ${operation[3]} ${num2[3]} = ${calculator(num1[3], num2[3], operation[3])}`);
console.log(`${num1[3]} ${operation[3]} ${num2[4]} = ${calculator(num1[3], num2[4], operation[3])}`);
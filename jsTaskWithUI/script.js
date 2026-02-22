/******************Culculation***********************/
const num1q = document.querySelector("#num1");
const num2q = document.querySelector("#num2");
const operationq = document.querySelector("#ope");
const calbtn = document.querySelector("#calbtn");
const display1 = document.querySelector("#display1");

calbtn.onclick = () => {
  const num1 = Number(num1q.value);
  const num2 = Number(num2q.value);
  const operation = operationq.value;
  let result = "Invalid operation";
  if (operation == "+") result = num1 + num2;
  if (operation == "-") result = num1 - num2;
  if (operation == "*") result = num1 * num2;
  if (operation == "/") {
    if (num2 == 0) result = "Error: cannot divide by zero";
    else result = num1 / num2;
  }
  
  display1.textContent = result;
  console.log(result);
};

/******************Even Or Odd***********************/
const evenodd = document.querySelector("#num-even-odd");
const eobtn = document.querySelector("#eo-btn");
const display2 = document.querySelector("#display2");

eobtn.onclick = () => {
  const even = Number(evenodd.value);
  let result = 0;
  if ( even%2 == 0)
    result = "Even";
  else
    result = "Odd";

  display2.textContent = "the Number "+ even + " is: " + result;
  console.log("the Number "+ even + " is: " + result);
}

/******************Grade System***********************/
const grades = document.querySelector("#grade");
const gradebtn = document.querySelector("#gradebtn");
const display3 = document.querySelector("#display3");

gradebtn.onclick = () => {
  const grade = Number(grades.value);
  let result = 0;
  if ( grade >= 0 &&  grade <= 100){
    if (grade >= 90) 
      result = "A";
    else if (grade >= 80) 
      result = "B";
    else if (grade >= 70)
      result = "C";
    else
      result = "Fail";
  }
  else
    return "Error because the number Should be between 0 to 100";
  display3.textContent = result;
  console.log(result);
}

/******************Sum***********************/
const display4 = document.querySelector("#display4");
const sumbtn = document.querySelector("#sumbtn");

sumbtn.onclick = () => {
  let sum = 0 ;
  for(let i = 1 ; i<=100 ; i++)
    sum += i;
  display4.textContent = "the sum of Numbers from 1 to 100 is: " + sum;
  console.log("the sum of Numbers from 1 to 100 is: " + sum);
}

/******************Largest Number***********************/
const numl1 = document.querySelector("#numl1");
const numl2 = document.querySelector("#numl2");
const numl3 = document.querySelector("#numl3");
const lbtn = document.querySelector("#lbtn");
const display5 = document.querySelector("#display5");

lbtn.onclick = () => {
  const numlr1 = Number(numl1.value);
  const numlr2 = Number(numl2.value);
  const numlr3 = Number(numl3.value);
  let result = 0;

  if (numlr1 >= numlr2 && numlr1 >= numlr3) {
    result = numlr1;
  } else if (numlr2 >= numlr1 && numlr2 >= numlr3) {
    result = numlr2;
  } else {
    result = numlr3;
  }
  
  display5.textContent = "the Largest Number is: " + result;
  console.log("the Largest Number is: " + result);
}

/******************Multiplication Table***********************/
const numtable = document.querySelector("#num-table");
const mulbtn = document.querySelector("#mulbtn");
const display6 = document.querySelector("#display6");

mulbtn.onclick = () => {
  const mulv = Number(numtable.value);
  let result = 0;
  let mt = "Multiplication Table of " + mulv + "is: \n" ;
  for(let j = 1 ; j<=10 ; j++)
    mt += `${mulv} x ${j} = ${mulv * j} \n`;
  result = mt; 
  
  display6.textContent = result;
  console.log(result);
}

let x = 45;
let y = 54;

function evenOdd(z){
  if ( z%2 == 0)
    return "Even";
  else
    return "Odd";
}

console.log("Even or Odd");
console.log(`the Number ${x} is ${evenOdd(x)}`);
console.log(`the Number ${y} is ${evenOdd(y)}`);
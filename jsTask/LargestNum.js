let a = 15;
let b = 80;
let c = 65;

function LargestN(a, b, c) {
  if (a >= b && a >= c) {
    return x;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

console.log(`the Largest Number of the list {${a}, ${b}, ${c}} is ${LargestN(a, b, c)}`);
console.log(`the Largest Number of the list {${a}, ${b}, ${c}} is ${Math.max(a, b, c)}`);
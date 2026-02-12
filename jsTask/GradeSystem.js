let s = 45;
let n = 90;
let o = 88;
let w = 72;
let d = -72;
let u = 172;

function gradSystem(h){
  if ( h >= 0 &&  h <= 100){
    if (h >= 90) 
      return "A";
    else if (h >= 80) 
      return "B";
    else if (h >= 70)
      return "C";
    else
      return "Fail";
  }
  else
    return "Error because the number Should be between 0 to 100";
}

console.log("Grade System");
console.log(`the Number ${s} is ${gradSystem(s)}`);
console.log(`the Number ${n} is ${gradSystem(n)}`);
console.log(`the Number ${o} is ${gradSystem(o)}`);
console.log(`the Number ${w} is ${gradSystem(w)}`);
console.log(`the Number ${d} is ${gradSystem(d)}`);
console.log(`the Number ${u} is ${gradSystem(u)}`);

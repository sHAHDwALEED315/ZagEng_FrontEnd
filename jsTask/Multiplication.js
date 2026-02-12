let m = 5;

function MT(t){
  let mt = "" ;
  for(let j = 1 ; j<=10 ; j++)
    mt += `${t} x ${j} = ${t * j}\n`;
  return mt; 
}


console.log(`Multiplication Table of ${m} is: \n${MT(m)}`);
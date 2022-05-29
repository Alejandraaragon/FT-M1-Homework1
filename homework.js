'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
let numDecimal = 0;
 for(let i = 0; i < num.length; i++) {
   numDecimal = numDecimal + num[i] * 2 ** (num.length -1 -i);
 }
 return numDecimal;
}

function DecimalABinario(num) {
  // tu codigo aca
  let numBin = "";
while(num > 0) {
 numBin = (num % 2) + numBin;
 num = Math.floor(num / 2); 
}
 return numBin;
 //return num.toString(2)
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
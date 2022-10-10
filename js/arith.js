//get elements--get the text
let spanE = document.getElementById('num1');

let spanT = spanE.textContent;

let n1 = parseInt(spanT);

let n2 = parseInt(document.getElementById('num2').textContent);
//add numbers
let c = n1 + n2 ;
// display
document.write(c);
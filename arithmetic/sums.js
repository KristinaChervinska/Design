function sum(a,b) {
    return a + b;
};	
//var num1 = 

function add(a, b) {
    return a + b;
}

//console.log(sum);
  

function getRandom() {
  return Math.random();
}

function calculateSum(){
	let first = Number(document.getElementById("firstNumber").value);
	let second = Number(document.getElementById("secondNumber").value);
	document.getElementById("calculation").value = sum(first,second);
}
function Substract(a,b) {
		let first = Number(document.getElementById("firstNumber").value);
	let second = Number(document.getElementById("secondNumber").value);
	return document.getElementById("calculation").value = first - second;
};
function Multiplicate(a,b) {
		let first = Number(document.getElementById("firstNumber").value);
	    let second = Number(document.getElementById("secondNumber").value);
	return document.getElementById("calculation").value = first * second;
};
function Divide(a,b) {
		let first = Number(document.getElementById("firstNumber").value);
	let second = Number(document.getElementById("secondNumber").value);
	return document.getElementById("calculation").value = first / second;
};
function Button(a,b) {
     if  "+" 
	 else '-'
	 if else '*'
	 else '/'
};

switch (button) {
  case 'Addition':
    alert( 'Уважніше' );
    break;

  case 'Substraction':
  case 'Multiplication':
  case 'Division':
    alert( 'Це арифметика' );
    break;

  default:
    alert( 'Нажаль, не вдається прорахувати' );
}

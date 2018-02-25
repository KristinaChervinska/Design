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

function calculate(){
	let first = Number(document.getElementById("firstNumber").value);
	let second = Number(document.getElementById("secondNumber").value);
	let operationInput = document.getElementById("operation");
	var operation = operationInput.options[operationInput.selectedIndex].value;

	var result = 0;
	switch (operation) {
		case 'Addition':
			result = first + second;
			break;
		case 'Substraction':
			result = first - second;
			break;
		case 'Multiplication':
			result = first * second;
			break;
		case 'Division':
			result = first / second;
			break;
		default:
			alert( 'Невідома операція.' );
	}
	document.getElementById("calculation").value = result;
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
// function Button(a,b) {
     // if  "+" 
	 // else '-'
	 // if else '*'
	 // else '/'
// };

// switch (button) {
  // case 'Addition':
    // alert( 'Уважніше' );
    // break;

  // case 'Substraction':
  // case 'Multiplication':
  // case 'Division':
    // alert( 'Це арифметика' );
    // break;

  // default:
    // alert( 'Нажаль, не вдається прорахувати' );
// }

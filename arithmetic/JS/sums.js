

function calculate(){
	// if (!confirm("want to calculate?")) {
        // return;
    // }
	
	let first = Number(document.getElementById("firstNumber").value);
	let second = Number(document.getElementById("secondNumber").value);
	let answer = Number(document.getElementById("answer").value);
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
	
	if (answer == result){
		alert('answer is correct');
	}
	
	

}
function countClicks() {
        localStorage.clickcount = (localStorage.clickcount) ? Number(localStorage.clickcount) + 1: 1;
        update();
}
function update() {
        target.innerHTML = localStorage.clickcount || 0;
}
update();
count.onclick = countClicks;



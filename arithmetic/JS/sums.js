

function calculate(){
	// if (!confirm("want to calculate?")) {
        // return;
    // }
	
	let first = Number(document.getElementById("firstNumber").value);
	let second = Number(document.getElementById("secondNumber").value);
	//let answer = Number(document.getElementById("answer").value);
	let operationInput = document.getElementById("operation");
	let customResult = Number(document.getElementById("calculation").value);
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
	document.getElementById("answer").value = result;
	
	
	if (customResult == result) {
		correctAnswer();
	} else {
		wrongAnswer();
	}
 }
 
 function correctAnswer(){
	 
//		alert("OK");
        localStorage.correctAnswers = (localStorage.correctAnswers) ? Number(localStorage.correctAnswers) + 1 : 1;
		update();
}

 function wrongAnswer(){
//		alert("wrong answer");
        localStorage.wrongAnswers = (localStorage.wrongAnswers) ? Number(localStorage.wrongAnswers) + 1 : 1;
		update();
}


function update() {
	    var correctCount = document.getElementById("correctCount");
        correctCount.innerHTML = localStorage.correctAnswers || 0;
		
		var wrongCount = document.getElementById("wrongCount");
        wrongCount.innerHTML = localStorage.wrongAnswers || 0;
}
update();

	





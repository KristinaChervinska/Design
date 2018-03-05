

function calculate(){
	
	let first = Number($("#firstNumber").val());
	let second = Number($("#secondNumber").val());
	let operationInput = $("#operation");
	let customResult = Number($("#calculation").val());
	var operation = operationInput.val();

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
	
	
	if (customResult == result) {
		correctAnswer();
	} else {
		wrongAnswer();
	}
 }
 
 function correctAnswer(){
	 
       localStorage.correctAnswers = (localStorage.correctAnswers) ? Number(localStorage.correctAnswers) + 1 : 1;
		update();
}

 function wrongAnswer(){
       localStorage.wrongAnswers = (localStorage.wrongAnswers) ? Number(localStorage.wrongAnswers) + 1 : 1;
		update();
}


function update() {
	console.log('hi');
	    var correctCount = $("#correctCount");
		//console.log(correctCount);
		if (correctCount.html() != localStorage.correctAnswers){
			correctCount.fadeOut(300).fadeIn(300);
		}
        correctCount.html(localStorage.correctAnswers || 0);

 		
		var wrongCount = $("#wrongCount");
		
		if (wrongCount.html() != localStorage.wrongAnswers){
			wrongCount.fadeOut(300).fadeIn(300);
		}
        wrongCount.html(localStorage.wrongAnswers || 0);
		
		
        //rongCount.text = localStorage.wrongAnswers || 0;
}

$(document).ready(function() {
	update();
	
	$('#hideMath').click(function(){
		console.log('go');
		
		$('#math').toggle('slow');
		// if ($('#math').is(":visible")){
			
			// $('#math').hide('slow');
		// } else {
			// $('#math').show('slow');
		// }

	});
});

	





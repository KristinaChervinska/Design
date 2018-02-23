var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm_password");


function validatePassword(){
	if(password.value.length < 6){
			document.getElementById('password_error').innerText = "Password length should be bigger then 6.";
			document.getElementById("password_error").classList.add('invalid');
			document.getElementById("password").classList.add('errorBorder');
	} else if(password.value != confirm_password.value) {
			document.getElementById('password_error').innerText = "Password and Confirm password should be the same";
			document.getElementById("password_error").classList.add('invalid');
			document.getElementById("password").classList.add('errorBorder');
			document.getElementById("confirm_password").classList.add('errorBorder');
	  } else {
		document.getElementById('password_error').innerText = "";
		document.getElementById("password_error").classList.remove('invalid');
		document.getElementById("password").classList.remove('errorBorder');
		document.getElementById("confirm_password").classList.remove('errorBorder');
	}
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
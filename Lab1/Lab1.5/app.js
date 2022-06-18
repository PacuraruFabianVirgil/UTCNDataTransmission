function printValue(divId, value){
	document.getElementById(divId).innerHTML = value;
}
var operation = 0;
document.getElementById("add").addEventListener("click",addition);
function addition(){
	operation = 1;
}
document.getElementById("sub").addEventListener("click",substraction);
function substraction(){
	operation = 2;
}
document.getElementById("mult").addEventListener("click",multiplication);
function multiplication(){
	operation = 3;
}
document.getElementById("div").addEventListener("click",division);
function division(){
	operation = 4;
}
document.getElementById("equal").addEventListener("click",calculate);
function calculate(){
	var firstNumber = parseInt($('#firstNumber').val());
	var secondNumber = parseInt($('#secondNumber').val());
	if ((typeof firstNumber === 'number')&&(typeof secondNumber === 'number')) {
		switch(operation) {
			case 0:
				printValue("result","select operation");
			  break;
			case 1:
				printValue("result",firstNumber+secondNumber);
			  break;
			case 2:
				printValue("result",firstNumber-secondNumber);
			  break;
			case 3:
				printValue("result",firstNumber*secondNumber);
			  break;
			case 4:
				printValue("result",firstNumber/secondNumber);
			  break;
		  }
	}
	else printValue("result","write numbers");
}
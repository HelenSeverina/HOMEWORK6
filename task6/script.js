let input1 = document.getElementById('input1');
let question1 = prompt('Ведіть повідомлення 1');
input1.value = question1;

let input2 = document.getElementById('input2');
let question2 = prompt('Ведіть повідомлення 2');
input2.value = question2;

function replaceValues() {
	let variable = input1.value;
	input1.value = input2.value;
	input2.value = variable;
}
replaceValues();
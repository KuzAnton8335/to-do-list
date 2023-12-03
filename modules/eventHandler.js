import {
	createButtonDel,
	createButtonPrimary,
	createForm, createInput
} from './elements.js';

export const myForm = createForm();
export const myInput = createInput();
export const myButtonPrim = createButtonPrimary();
export const myButtonDel = createButtonDel();

myForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const input = myInput.value;
	console.log(input);

	if (input.trim() === '') {
		myButtonPrim.disabled = true;
	} else {
		myButtonPrim.disabled = false;
	}

	const idTask = Math.random().toString().substring(2, 10);
	let newTask = {
		id: idTask,
		text: input,
		done: false,
	}

	tasks.push(newTask);
	localStorage.setItem('tasks', JSON.stringify(tasks));

	myInput.value = '';
	myInput.focus();
})



let tasks = [];


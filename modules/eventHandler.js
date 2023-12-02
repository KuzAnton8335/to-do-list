import {
	createButtonDel,
	createButtonPrimary,
	createForm, createInput
} from './elements.js';

let tasks = [];

if (localStorage.getItem('tasks')) {
	tasks = JSON.parse(localStorage.getItem('tasks'));
	tasks.forEach((task) => renderTask(task));
}

// const todo = {
// 	id: Math.random().toString().substring(2, 10),
// 	title: "Сделать покупки",
// 	completed: false
//  };

//  localStorage.setItem(todo.id, JSON.stringify(todo));

export const myForm = createForm();
export const myInput = createInput();
export const myButtonPrim = createButtonPrimary();
export const myButtonDel = createButtonDel();


const addTask = (e) => {
	e.preventDefault();

	const input = myInput.value;
	myInput.value = '';
	myInput.focus();

	if (input.trim() === '') {
		myButtonPrim.disabled = true;
	} else {
		myButtonPrim.disabled = false;
	}
}
myForm.addEventListener('submit', addTask)
myInput.addEventListener('input', () => {
	if (myInput.value.trim() === '') {
		myButtonPrim.disabled = true;
	} else {
		myButtonPrim.disabled = false;
	}
});




const renderTask = (task) => {

}
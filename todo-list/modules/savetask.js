import {
	createButtonDel, createButtonPrimary, createForm, createInput, createLabel,
	createTbody, createBtnDel, createBntComplecte, createTable
} from "./elements.js";
import { saveToLocalStorage, tasks } from "./storage.js";


export const myInput = createInput();
export const myButtonPrim = createButtonPrimary();
export const myForm = createForm();
export const myButtonDel = createButtonDel();
export const myLabel = createLabel();
export const myTable = createTable();
export const myTbody = createTbody();
export const myTabelBtnDel = createBtnDel();
export const myTabelBtnComplecte = createBntComplecte();
myLabel.append(myInput);



const addTask = (e) => {
	e.preventDefault();

	const input = myInput.value;

	const idTask = Math.random().toString().substring(2, 10);
	let newTask = {
		id: Date.now(),
		st: idTask,
		text: input,
		done: false,
	}
	tasks.push(newTask);

	saveToLocalStorage();


	//Добавление дел
	myButtonPrim.addEventListener('click', (e) => {
		e.preventDefault();
		if (myInput.value.trim() !== '') {
			myInput.value = '';
			myButtonPrim.disabled = true;
		}
	});

	myInput.addEventListener('input', () => {
		if (myInput.value.trim() === '') {
			myButtonPrim.disabled = true;
		} else {
			myButtonPrim.disabled = false;
		}
	})

	myButtonDel.addEventListener('click', () => {
		myInput.value = '';
		myButtonPrim.disabled = true;
	})

	renderTask(newTask);

	input.value = '';
	input.focus();

}

myForm.addEventListener('submit', addTask);


const renderTask = (task) => {
	const newRow = document.createElement('tr');
	newRow.classList.add("table-light");
	newRow.insertAdjacentHTML('beforeend', `
		<td>${task.id}</td>
		<td class="task">
		  ${task.text}
		</td>
		<td>В процессе</td>
	`)
	const td = document.createElement('td');
	td.append(myTabelBtnDel, myTabelBtnComplecte)
	newRow.append(td);
	const tbody = document.querySelector('tbody');
	tbody.append(newRow);
}





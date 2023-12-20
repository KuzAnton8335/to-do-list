import {
	createBntComplecte,
	createBtnDel,
	createButtonDel, createButtonPrimary, createForm, createInput, createLabel,
	createTable,
	createTbody
} from "./elements.js";
import { indexTasks, removeFromLocalStorage, saveToLocalStorage, tasks } from "./storage.js";


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

const numberTasks = indexTasks;


const addTask = (e) => {
	e.preventDefault();

	const input = myInput.value;
	const idTask = Math.random().toString().substring(2, 10);
	let newTask = {
		id: idTask,
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

	myInput.value = '';
	myInput.focus();

}

myForm.addEventListener('submit', addTask);

const deleteTask = (newTask) => {
	newTask.remove();
	removeFromLocalStorage(newTask);
};

export const renderTask = (newTask) => {
	const newRow = document.createElement('tr');
	newRow.classList.add("table-light");
	const taksProccess = "В процессе";
	const taskStatus = document.createElement('td');
	taskStatus.textContent = `${newTask.id}`;

	const taskText = document.createElement('td');
	taskText.classList.add("task")
	taskText.textContent = `${newTask.text}`;

	const taskProcess = document.createElement('td');
	taskProcess.textContent = `${taksProccess}`;

	const taskButtons = document.createElement('td');
	const deleteButton = createBtnDel();
	const completeButton = createBntComplecte();
	taskButtons.append(deleteButton, completeButton);
	newRow.append(taskStatus, taskText, taskProcess, taskButtons);

	const insertRow = (newRow) => {
		const tbody = document.querySelector('tbody');
		tbody.insertAdjacentElement('beforeend', newRow);
	}
	insertRow(newRow);

	deleteButton.addEventListener('click', () => {
		deleteTask(newRow);
		removeTask;
	});
	completeButton.addEventListener('click', () => {
		newRow.classList.remove("table-light");
		newRow.classList.add("table-success");
		newRow.querySelector('td:nth-child(2)').classList.add("text-decoration-line-through");
		newRow.querySelector('td:nth-child(3)').textContent = "Выполнено";
	});
}



export const removeTask = (e) => {
	const indexToRemove = e.target.dataset.index;
	tasks.splice(indexToRemove, 1);
	saveToLocalStorage();
}



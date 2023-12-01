import { createForm, createInput, getValue, createTable } from './elements.js';
import { tasks } from './storange.js';

createForm.addEventListener('submit', addTask)

export const addTask = () => {
	addTask.addEventListener('submit', (e) => {
		e.preventDefault();

		const taskText = getValue();

		const newTask = {
			id: Date.now(),
			text: taskText,
			done: false,
		}
		tasks.push(newTask);
		saveToLocalStorage();
		renderTask(newTask);

		getValue.value = '';
		getValue.focus();
	})
};


// export const deleteTask = (e) => {
// 	if (e.target.dataset.action !== 'delete') return;
// 	const parenNode = e.target.closest('');
// }



const saveToLocalStorage = () => {
	localStorage.setItem('tasks', JSON.stringify(tasks))
}
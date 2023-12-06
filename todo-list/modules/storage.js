import { renderTask } from "./savetask.js";
export let tasks = [];


if (localStorage.getItem('tasks')) {
	tasks = JSON.parse(localStorage.getItem('tasks'));
	// tasks.forEach((task) => renderTask(task));
}


export const saveToLocalStorage = () => {
	localStorage.setItem('tasks', JSON.stringify(tasks));
	tasks.forEach((task) => renderTask(task));
}
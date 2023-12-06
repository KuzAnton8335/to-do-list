export let tasks = [];



if (localStorage.getItem('tasks')) {
	tasks = JSON.parse(localStorage.getItem('tasks'));
}

export const saveToLocalStorage = () => {
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

export const indexTasks = tasks.map((obj, index) => index);


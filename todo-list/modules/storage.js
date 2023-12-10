export let tasks = [];

if (localStorage.getItem('tasks')) {
	tasks = JSON.parse(localStorage.getItem('tasks'));
}

export const saveToLocalStorage = () => {
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

export const removeFromLocalStorage = (objectToRemove) => {
	const tasks = JSON.parse(localStorage.getItem('tasks'));
	const updatedTasks = tasks.filter((task) => task !== objectToRemove);
	localStorage.setItem('tasks', JSON.stringify(updatedTasks));
 };


export const indexTasks = tasks.map((obj, index) => index);
export const arrays = Object.values(tasks).filter(Array.isArray);

export let tasks = [];

if (localStorage.getItem('tasks')) {
	tasks = JSON.parse(localStorage.getItem('tasks'));
}

export const saveToLocalStorage = () => {
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

export const removeFromLocalStorage = (index) => {
	tasks.splice(index, 1);
	saveToLocalStorage();
};

export const indexTasks = tasks.map((_, index) => index + 1);
export const arrays = Object.values(tasks).filter(Array.isArray);

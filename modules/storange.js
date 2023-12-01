
export let tasks = [];

if (localStorage.getItem('tasks')) {
	tasks = JSON.parse(localStorage.getItem('tasks'));
	// tasks.forEach((task) => renderTask(task));
}


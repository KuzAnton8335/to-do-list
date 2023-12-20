import { renderTask } from "../modules/savetask.js";
import { tasks } from "../modules/storage.js";
import { init } from "../modules/render.js";
// const savedTasks = tasks;
document.addEventListener("DOMContentLoaded", () => {
	todoListInit(".app-container", "Лист Задач");
	if (tasks) {
		tasks.forEach((task) => {
			renderTask(task);
		});
	}
});
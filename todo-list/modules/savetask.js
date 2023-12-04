import { createButtonDel, createButtonPrimary, createForm, createInput, createLabel } from "./elements.js";
import { saveToLocalStorage, tasks } from "./storage.js";


export const myInput = createInput();
export const myButtonPrim = createButtonPrimary();
export const myForm = createForm();
export const myButtonDel = createButtonDel();
export const myLabel = createLabel();




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
}

myForm.addEventListener('submit', addTask);

// export const createForm = () => {
// 	const form = document.createElement('form');
// 	form.classList.add('d-flex', 'align-items-center', 'mb-3');

// 	const label = createLabel();
// 	const buttonPrimary = createButtonPrimary();
// 	const buttonDel = createButtonDel();

// 	form.append(label, buttonPrimary, buttonDel);

// 	// Добавляем обработчик события для кнопки "Сохранить"
// 	buttonPrimary.addEventListener('click', (event) => {
// 	  event.preventDefault();
// 	  // Проверяем, что поле ввода не пустое
// 	  if (inputTask.value.trim() !== '') {
// 		 // Добавляем новое дело
// 		 // Очищаем поле ввода
// 		 inputTask.value = '';
// 		 // Блокируем кнопку "Сохранить"
// 		 buttonPrimary.disabled = true;
// 	  }
// 	});

// 	// Добавляем обработчик события для поля ввода
// 	inputTask.addEventListener('input', () => {
// 	  // Если поле ввода пустое, блокируем кнопку "Сохранить"
// 	  if (inputTask.value.trim() === '') {
// 		 buttonPrimary.disabled = true;
// 	  } else {
// 		 buttonPrimary.disabled = false;
// 	  }
// 	});

// 	// Добавляем обработчик события для кнопки "Очистить"
// 	buttonDel.addEventListener('click', () => {
// 	  // Очищаем поле ввода
// 	  inputTask.value = '';
// 	  // Блокируем кнопку "Сохранить"
// 	  buttonPrimary.disabled = true;
// 	});

// 	return form;
//  };



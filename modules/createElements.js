// 1.При старте программы необходимо с помощью функции prompt спросить пользователя имя
// const userName = prompt("Введите ваше имя:");

export const h3 = document.createElement('h3');
h3.textContent = "Todo App";

export const createForm = () => {
	const form = document.createElement('form');
	form.classList.add("d-flex", "align-items-center", "mb-3");

	const createLabel = document.createElement('label');
	createLabel.classList.add("form-group", "me-3", "mb-0");
	const createInput = document.createElement('input');
	createInput.classList.add("form-control");
	createInput.type = "text";
	createInput.placeholder = "ввести задачу";

	const createButtonSubmint = document.createElement('button');
	createButtonSubmint.classList.add("btn", "btn-primary", "me-3");
	createButtonSubmint.textContent = "Сохранить";
	createButtonSubmint.type = "submit";

	const createButtonReset = document.createElement('button');
	createButtonReset.classList.add("btn", "btn-warning");
	createButtonReset.textContent = "Очистить";
	createButtonReset.type = "reset";


	createLabel.append(createInput);
	form.append(createLabel, createButtonSubmint, createButtonReset);

	return form;
}
createForm();


export const createTable = () => {
	const tableWrapper = document.createElement('div');
	tableWrapper.classList.add('table-wrapper');
	const table = document.createElement('table');
	table.classList.add("table", "table-hover", "table-bordered");
	const thead = document.createElement('thead');
	thead.insertAdjacentHTML('beforeend', `
	   <tr>
         <th>№</th>
         <th>Задача</th>
         <th>Статус</th>
         <th>Действия</th>
      </tr>
	`);

	const tbody = document.createElement('tbody');
	const tr = document.createElement('tr');
	tr.classList.add("table-light");
	const td = document.createElement('td');
	const btnDel = document.createElement('button');
	btnDel.classList.add('btn', 'btn-danger', "me-3");
	btnDel.type = "button";
	btnDel.textContent = " Удалить";

	const btnComplecte = document.createElement('button');
	btnComplecte.classList.add("btn", "btn-success",);
	btnComplecte.type = "button";
	btnComplecte.textContent = " Завершить";

	tr.insertAdjacentHTML('beforeend', `
	<td>1</td>
	<td class="task">
	  Купить слона
	</td>
	<td>В процессе</td>
	`);
	td.append(btnDel, btnComplecte);
	tr.append(td);
	tbody.append(tr);
	table.append(thead, tbody);
	table.tbody = tbody;

	tableWrapper.append(table);
	return tableWrapper;
}

createTable();









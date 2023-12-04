
export const createThead = () => {
	const thead = document.createElement('thead');
	thead.insertAdjacentHTML('beforeend', `
			<tr>
				<th>№</th>
				<th>Задача</th>
				<th>Статус</th>
				<th>Действия</th>
			</tr>
		`);
	return thead;
}

export const createTbody = () => {
	const tbody = document.createElement('tbody');
	const tr = document.createElement('tr');
	tr.classList.add("table-light");
	const td = document.createElement('td');
	tr.insertAdjacentHTML('beforeend', `
		<td>1</td>
		<td class="task">
		  Купить слона
		</td>
		<td>В процессе</td>
		`);
	const BtnDel = createBtnDel();
	const BntComplecte = createBntComplecte();
	td.append(BtnDel, BntComplecte);
	tr.append(td);
	tbody.append(tr);
	return tbody;
}


export const createBtnDel = () => {
	const btnDel = document.createElement('button');
	btnDel.classList.add('btn', 'btn-danger', "me-3");
	btnDel.type = "button";
	btnDel.textContent = " Удалить";
	return btnDel;
}

export const createBntComplecte = () => {
	const btnComplecte = document.createElement('button');
	btnComplecte.classList.add("btn", "btn-success",);
	btnComplecte.type = "button";
	btnComplecte.textContent = " Завершить";
	return btnComplecte;
}

export const createTable = () => {
	const table = document.createElement('table');
	table.classList.add('table', 'table-hover', 'table-bordered');
	const thead = createThead();
	const tbody = createTbody();
	table.append(thead, tbody);
	return table;
}

export const createTableWrapper = () => {
	const div = document.createElement('div');
	div.classList.add('table-wrapper');
	const table = createTable();
	div.append(table);
	return div;
}
export const createButtonPrimary = () => {
	const button = document.createElement('button');
	button.classList.add('btn', 'btn-primary', 'me-3');
	button.textContent = "Сохранить";
	button.type = "submit";
	return button;
}

export const createButtonDel = () => {
	const button = document.createElement('button');
	button.classList.add('btn', 'btn-warning');
	button.textContent = " Очистить";
	button.type = "reset";
	return button;
}

export const createInput = () => {
	const input = document.createElement('input');
	input.classList.add('form-control');
	input.type = "text";
	input.placeholder = "ввести задачу";
	return input;
}

export const createLabel = () => {
	const label = document.createElement('label');
	label.classList.add('form-group', 'me-3', 'mb-0');
	const inputTask = createInput();
	label.append(inputTask);
	return label;
}
export const createForm = () => {
	const form = document.createElement('form');
	form.classList.add('d-flex', 'align-items-center', 'mb-3');
	return form;
}

export const createTitle = (title) => {
	const h3 = document.createElement("h3");
	h3.textContent = `Todo App ${title}`;
	return h3;
}
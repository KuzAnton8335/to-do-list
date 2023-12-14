import {
	createTableWrapper,
	createTitle
} from "../modules/elements.js";
import { myButtonDel, myButtonPrim, myForm, myLabel } from "../modules/savetask.js";


let promptShown = false;
const myPromt = () => {
	if (!promptShown) {
		promptShown = true;
		return prompt('Введите ваше имя:')
	} else {
		return null;
	}
}
export const result = myPromt();


export const init = (selectorApp, title) => {
	const app = document.querySelector(selectorApp);
	app.classList.add("vh-100", "w-100", "d-flex", "align-items-center", "justify-content-center", "flex-column")
	const h3 = createTitle(title);
	const Form = myForm;
	const tableWrapper = createTableWrapper();
	Form.append(myLabel, myButtonPrim, myButtonDel)
	app.append(h3, Form, tableWrapper);

};

window.todoListInit = init;

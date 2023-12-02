import { appContainer } from "./modules/renderer.js";
appContainer;

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

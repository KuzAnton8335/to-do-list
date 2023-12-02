// render

import { createTableWrapper, title } from "./elements.js";
import { myForm, myInput } from "./eventHandler.js";
export const appContainer = document.querySelector(".app-container");
appContainer.classList.add("vh-100", "w-100", "d-flex", "align-items-center", "justify-content-center", "flex-column");
appContainer.append(title(), myForm, createTableWrapper(),);

// const id = Math.random().toString().substring(2, 10);

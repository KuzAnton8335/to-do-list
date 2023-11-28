import { h3, createForm, createTable } from "./createElements.js";


const appContainer = document.querySelector(".app-container");
appContainer.classList.add("vh-100", "w-100", "d-flex", "align-items-center", "justify-content-center", "flex-column");

appContainer.append(h3, createForm(), createTable(),);
// render

import { createForm, createTableWrapper, title } from "./main.js";

const appContainer = document.querySelector(".app-container");
appContainer.classList.add("vh-100", "w-100", "d-flex", "align-items-center", "justify-content-center", "flex-column");

appContainer.append(title(), createForm(), createTableWrapper());
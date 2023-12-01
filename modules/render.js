// render

import { createForm, createTableWrapper, title } from "./elements.js";
import { addTask } from "./saveTask.js";

const appContainer = document.querySelector(".app-container");
appContainer.classList.add("vh-100", "w-100", "d-flex", "align-items-center", "justify-content-center", "flex-column");

appContainer.append(title(), addTask, createTableWrapper());
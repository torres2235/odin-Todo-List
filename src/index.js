import createProject from "./project.js";
import createTodo from "./todo.js";

import './style.css';

//create default project
let defaultProject = createProject("Default");

//load 2 todos into the project
createTodo(defaultProject, "Create a Todo");
createTodo(defaultProject, "Create a New Project");

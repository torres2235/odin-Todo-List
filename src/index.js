import createProject from "./project.js";
import createTodo from "./todo.js";

import './style.css';

const projects = document.getElementById("projectsNav");
const todos = document.getElementsByName("main");

//create default project
let defaultProject = createProject("Personal");

//load 2 todos into the project
createTodo(
    defaultProject, 
    "Create a Todo",
    "Create a new Todo item in your project",
    "Today",
    "low",
    "you can skip this if you want",
    false
);
createTodo(
    defaultProject, 
    "Create a Project",
    "Create a new Project item",
    "Today",
    "low",
    "you can skip this if you want",
    false
);

import allTodos from "./allTodos.js";
import defaultStart from "./default.js";
import projectModal from "./projectModal.js";

import './style.css';

//main sidebar nav buttons
const allBtn = document.getElementById("all");
const finisehdBtn = document.getElementById('finished');

//projects sidebar nav buttons
const todos = document.getElementsByName("main");
let projects = document.getElementsByClassName("project");
const projBtn = document.getElementById("newProjBtn");

defaultStart();

allBtn.addEventListener('click', () => {
    allTodos();
});

projBtn.addEventListener('click', () => {
    projectModal();
});
import createProject from "./project.js";
import createTodo, {todo1, todo2} from "./todo.js";
import displayProject from "./displayProject.js";
import defaultStart from "./default.js";

import './style.css';

//main sidebar nav buttons
const allBtn = document.getElementById("newProjBtn");
const todayBtn = document.getElementById('today');
const starredBtn = document.getElementById('starred');
const finisehdBtn = document.getElementById('finished');

//projects sidebar nav buttons
const todos = document.getElementsByName("main");
let projects = document.getElementsByClassName("project");
const projBtn = document.getElementById("newProjBtn");

defaultStart();

Array.from(projects).forEach(function(project) {
    project.addEventListener('click', () => {
        console.log(project);
    });
  });

projBtn.addEventListener('click', () => {
    console.log("You clicked a button");
});
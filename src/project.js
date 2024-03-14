import displayProject from "./displayProject";

export function projectItem(title) {
    this.title = title;
    let todoList = []; //array that holds our todos

    return {title, todoList};
};


export default function createProject(title) {
    let project = new projectItem(title);

    addProject(project);    

    return project;
};

//adds project to UI
function addProject(project) {
    const projects = document.getElementById("projectsNav");
    const btn = document.getElementById("newProjBtn");
    const newProject = document.createElement('div');
    newProject.classList.add("project");

    newProject.textContent = project.title;
    projects.insertBefore(newProject, btn);

    //click functionality for the project
    newProject.addEventListener('click', () => {
        console.log('displaying this project...');
        displayProject(project);
    });
};
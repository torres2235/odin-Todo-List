class projectItem {
    constructor(title) {
        this.title = title;
    }

    todoList = []; //array that holds our todos
};


export default function createProject(title) {
    let project = new projectItem(title);

    addProject(project);    

    return project;
};


//adds project to UI
function addProject(project) {
    const projects = document.getElementById("projectsNav");
    const newProject = document.createElement('div');
    newProject.classList.add("project");

    newProject.textContent = project.title;
    projects.appendChild(newProject);
};
import createProject from "./project";
import createTodo from "./todo";
import displayProject from "./displayProject";
import {projectItem, getProjects} from './project'

export default function defaultStart() {
    let defaultProject = createProject("Personal");
    createTodo(defaultProject, "Create new Todo Item", 'use the button below','2024-03-31','high');
    createTodo(defaultProject, "Create new Project Item", 'use the button on the left','2024-03-31','low');

    displayProject(defaultProject);

    return defaultProject;
}

let allProject = new projectItem('All');
let projectList = getProjects();
projectList.push(allProject);

export function getAllProject() {
    return allProject;
}
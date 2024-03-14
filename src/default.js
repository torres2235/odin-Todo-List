import createProject from "./project";
import createTodo from "./todo";
import displayProject from "./displayProject";

export default function defaultStart() {
    let defaultProject = createProject("Personal");

    let todo1 = createTodo(defaultProject, "Create new Todo Item");
    let todo2 = createTodo(defaultProject, "Create new Project Item");

    console.log(defaultProject);

    displayProject(defaultProject);

    return defaultProject;
}

import createProject from "./project";
import createTodo from "./todo";
import displayProject from "./displayProject";

export default function defaultStart() {
    let defaultProject = createProject("Personal");
    createTodo(defaultProject, "Create new Todo Item", 'use the button below','2024-03-31','high');
    createTodo(defaultProject, "Create new Project Item", 'use the button on the left','2024-03-31','low');

    let defaultProject2 = createProject("Work");
    createTodo(defaultProject2, "tester");
    createTodo(defaultProject2, "tester2");

    console.log(defaultProject);

    displayProject(defaultProject);

    return defaultProject;
}

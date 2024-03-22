import displayProject from "./displayProject";
import allTodos from "./allTodos";

export default function deleteTodo(project, todo) {

    console.log(project);
    console.log(todo);
    const index = project.todoList.indexOf(todo);

    if (index > -1) { // only splice array when item is found
        project.todoList.splice(index, 1); // 2nd parameter means remove one item only
        if(project.title != 'All'){
            displayProject(project);
        } else {
            allTodos();
        }
    };

};
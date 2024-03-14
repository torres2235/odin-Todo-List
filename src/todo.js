function todoItem(title, desc, due, priority) {
    this.title = title;
    this.desc = desc;
    this.due = due;
    this.priority = priority;
}

export default function createTodo(project, title, desc = "", due = "", priority = "") {
    let newTodo = new todoItem(title, desc, due, priority);

    //we include the project so we can push the todos into it
    addTodoToProject(project, newTodo);

    return newTodo;
}

function addTodoToProject(project, newTodo) {
    project.todoList.push(newTodo);
}
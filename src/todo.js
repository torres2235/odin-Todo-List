function todoItem(title, desc, due, priority , note, checkList) {
    this.title = title;
    this.desc = desc;
    this.due = due;
    this.priority = priority;
    this.note = note;
    this.checkList = checkList;
}

export default function createTodo(project, title, desc = "", due = "", priority = "", note = "", checkList = "") {
    let newTodo = new todoItem(title, desc, due, priority, note, checkList);

    //we include the project so we can push the todos into it
    addTodoToProject(project, newTodo);

    return newTodo;
}

function addTodoToProject(project, newTodo) {
    project.todoList.push(newTodo);
}
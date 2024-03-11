export class todoItem {
    constructor(title, desc, due, priority , note, checkList) {
        this.title = title;
        this.desc = desc;
        this.due = due;
        this.priority = priority;
        this.note = note;
        this.checkList = checkList;
    }
}


export default function createTodo(project, title, desc = "", due = "", priority = "", note = "", checkList = "") {
    let newItem = new todoItem(title, desc, due, priority, note, checkList);

    //we include the project so we can push the todos into it
    addTodoToProject(project, newItem);

    return newItem;
}

function addTodoToProject(project, newItem) {
    project.todoList.push(newItem);
}
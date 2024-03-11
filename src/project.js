import createTodo from "./todo";

class projectItem {
    constructor(title) {
        this.title = title;
    }

    todoList = []; //list that holds our todos
};


export default function createProject(title) {
    let project = new projectItem(title);

    return project;
};
import addTaskButtonLogic from "./addTaskButtonLogic";

export default function displayProject(project) {
    const mainContent = document.querySelector('main');
    const todos = document.querySelector('.todoCard');

    //clear current content
    while (todos.firstChild) {
        todos.removeChild(todos.lastChild);
        console.log('clearing item...');
    };

    const newTodoBtn = document.createElement('button');
    newTodoBtn.classList.add('newTodoBtn');
    newTodoBtn.id = 'newTodoBtn';
    newTodoBtn.textContent = 'Add Task +';
    todos.appendChild(newTodoBtn);

    Array.from(project.todoList).forEach((todo) => {
        const item = document.createElement('div');
        item.classList.add('todoItem');
        item.textContent = todo.title;
        todos.insertBefore(item, newTodoBtn);
        mainContent.appendChild(todos);

        //makes todo items clickable
        item.addEventListener('click', () => {
            console.log('clicked todo item');
        });
    });

    //makes new todo button clickable
    newTodoBtn.addEventListener('click', () => {
        console.log('btnpressed');
        addTaskButtonLogic(project);
        return
    });

    console.log("displayProject function");
};
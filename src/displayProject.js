import todoModal from "./todoModal";
import todoDetailsModal from "./todoDetails";

export default function displayProject(project) {
    const projTitle = document.querySelector('#projectTitle');
    const todos = document.querySelector('#todoList');
    const todoInfo = document.querySelector('#todoDetails');

    projTitle.textContent = project.title;
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

        //makes todo items clickable
        item.addEventListener('click', () => {
            todoDetailsModal(todo);
        });
    });

    //makes new todo button clickable
    newTodoBtn.addEventListener('click', () => {
        todoModal(project);
        return
    });

    console.log("displayProject function");
};
import todoModal from "./todoModal";
import todoDetailsModal from "./todoDetails";
import deleteTodo from "./deleteTodo"; 
import magnify from './images/magnify-expand.svg';
import trashcan from './images/trash-can-outline.svg';
import todoDone from "./todoDone";

export default function displayProject(project) {
    const projTitle = document.querySelector('#projectTitle');
    const todos = document.querySelector('#todoList');

    projTitle.textContent = project.title;
    //clear current content
    while (todos.firstChild) {
        todos.removeChild(todos.lastChild);
        console.log('clearing item...');
    }

    const newTodoBtn = document.createElement('button');
    newTodoBtn.classList.add('newTodoBtn');
    newTodoBtn.id = 'newTodoBtn';
    newTodoBtn.textContent = 'Add Task +';
    todos.appendChild(newTodoBtn);

    Array.from(project.todoList).forEach((todo) => {
        const item = document.createElement('div');
        item.classList.add('todoItem');

        //left side of todo item
        const itemLeft = document.createElement('div');
        itemLeft.classList.add('itemLeft');
        const box = document.createElement('input');
        box.type = 'checkbox';
        const task = document.createElement('div');
        const t = document.createElement('div');
        t.classList.add('task');
        const d = document.createElement('div');
        d.classList.add('desc');
        t.textContent = todo.title;
        d.textContent = todo.desc;
        task.appendChild(t);
        task.appendChild(d);
        itemLeft.appendChild(box);
        itemLeft.appendChild(task);

        //right side of todo item
        const itemRight = document.createElement('div');
        itemRight.classList.add('itemRight');
        const info = new Image();
        info.classList.add('info');
        info.src = magnify;
        info.alt = 'info';
        const trash = new Image();
        const trashDiv = document.createElement('div');
        trashDiv.classList.add('trash');
        trash.src = trashcan;
        trash.alt = 'trash';
        trashDiv.appendChild(trash);
        itemRight.appendChild(info);
        itemRight.appendChild(trashDiv);
        

        item.appendChild(itemLeft);
        item.appendChild(itemRight);
        todos.insertBefore(item, newTodoBtn);

        if(todo.done == 'yes') {
            box.checked = true;
            todoDone(project, todo, box, item, task, t, d);
        }

        box.addEventListener('change', () => {
            todoDone(project, todo, box, item, task, t, d);
        });

        info.addEventListener('click', () => {
            todoDetailsModal(project, todo);
        });

        trash.addEventListener('click', () => {
            deleteTodo(project, todo);
        });
    });

    //makes new todo button clickable
    newTodoBtn.addEventListener('click', () => {
        todoModal(project);
        return
    });

    

    console.log("displayProject function");
}
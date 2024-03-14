export default function displayProject(project) {
    const mainContent = document.querySelector('main');
    const todos = document.querySelector('.todoCard');

    Array.from(project.todoList).forEach((todo) => {
        const item = document.createElement('div');
        item.classList.add('todoItem');
        item.textContent = todo.title;
        todos.appendChild(item);
        mainContent.appendChild(todos);
    });

    console.log("displayProject function");

};
import closeModal from "./closeModal";
import createTodo from "./todo";
import displayProject from "./displayProject";

export default function todoModal(project){

    console.log('Opening modal...');

    const body = document.querySelector('body');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.id = 'addToDoModal';

    //header
    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');
    const modalTitle = document.createElement('div');
    modalTitle.classList.add('modal-title');
    modalTitle.textContent = 'New Task';
    const closeBtn = document.createElement('button');
    closeBtn.classList.add('modal-close');
    closeBtn.innerHTML = '\&times';
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeBtn);
    modal.appendChild(modalHeader);

    //modal body
    const modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');
    const form = document.createElement('form');

    //task title
    const taskTitle = document.createElement('input');
    taskTitle.type = 'text';
    taskTitle.name = 'task';
    taskTitle.id = 'task';
    taskTitle.placeholder = 'Task';
    form.appendChild(taskTitle);

    //description
    const desc = document.createElement('textarea');
    desc.name = 'desc';
    desc.id = 'desc';
    desc.placeholder = 'Description';
    form.appendChild(desc);

    //due
    const due = document.createElement('div');
    const dueLabel = document.createElement('label');
    dueLabel.for = 'due';
    dueLabel.textContent = 'Due:';
    due.appendChild(dueLabel);
    const dueDate = document.createElement('input');
    dueDate.type = 'date';
    dueDate.name = 'due';
    dueDate.id = 'due';
    due.appendChild(dueDate);
    form.appendChild(due);

    //priority
    const priority = document.createElement('div');
    const prioLabel = document.createElement('label');
    prioLabel.for = 'prio';
    prioLabel.textContent = 'Priority:';
    priority.appendChild(prioLabel);
    const prioSelect = document.createElement('select');
    prioSelect.name = 'prio';
    prioSelect.id = 'prio';
    const option2 = document.createElement('option');
    option2.value = 'low';
    option2.textContent = 'Low';
    const option3 = document.createElement('option');
    option3.value = 'medium';
    option3.textContent = 'Medium';
    const option4 = document.createElement('option');
    option4.value = 'high';
    option4.textContent = 'High';
    prioSelect.appendChild(option2);
    prioSelect.appendChild(option3);
    prioSelect.appendChild(option4);
    priority.appendChild(prioSelect);
    form.appendChild(priority);

    //submit
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.id = 'todoSubmit';
    submitBtn.textContent = 'Submit';
    form.appendChild(submitBtn);

    modalBody.appendChild(form);
    modal.appendChild(modalBody);
    body.appendChild(modal);
    
    
    const overlay = document.getElementById('overlay');
    overlay.classList.add('active');

    closeBtn.addEventListener('click', () => {
        closeModal(body, modal);
    });

    submitBtn.addEventListener('click', () =>{
        event.preventDefault();
        const task = document.getElementById('task');
        const desc = document.getElementById('desc');
        const due = document.getElementById('due');
        const prio = document.getElementById('prio');
        console.log('todo made');
        createTodo(project, task.value, desc.value, due.value, prio.value);
        displayProject(project);

        closeModal(body, modal);
    })
};
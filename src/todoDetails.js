import closeModal from "./closeModal";
import displayProject from "./displayProject";
import allTodos from "./allTodos";

export default function todoDetailsModal(project, todo) {
    console.log('Opening modal...');

    const body = document.querySelector('body');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.id = 'todoInfo';

    //header
    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');
    const modalTitle = document.createElement('input');
    modalTitle.classList.add('modal-title');
    modalTitle.value = todo.title;
    modalTitle.placeholder = 'Task';
    const closeBtn = document.createElement('button');
    closeBtn.classList.add('modal-close');
    closeBtn.innerHTML = '\&times';
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeBtn);
    modal.appendChild(modalHeader);

    //modal body
    const modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');

    //notes
    const desc = document.createElement('textarea');
    desc.value = todo.desc;
    desc.placeholder = 'Notes';
    modalBody.appendChild(desc);

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
    dueDate.value = todo.due;
    due.appendChild(dueDate);
    modalBody.append(due);

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

    switch(todo.priority) {
        case 'low':
            option2.selected = 'selected';
            break;
        case 'medium':
            option3.selected = 'selected';
            break;
        case 'high':
            option4.selected = 'selected';
            break;
    }

    prioSelect.appendChild(option2);
    prioSelect.appendChild(option3);
    prioSelect.appendChild(option4);
    priority.appendChild(prioSelect);
    
    modalBody.appendChild(priority);

    //save
    const save = document.createElement('button');
    save.textContent = 'Save';
    save.type = 'submit';
    save.id = 'save';
    modalBody.appendChild(save);

    modal.appendChild(modalBody);
    body.appendChild(modal);

    const overlay = document.getElementById('overlay');
    overlay.classList.add('active');

    closeBtn.addEventListener('click', () => {
        closeModal(body, modal);
    });

    save.addEventListener('click', () => {
        event.preventDefault();
        todo.title = modalTitle.value;
        todo.desc = desc.value;
        todo.due = dueDate.value;
        todo.priority = prioSelect.value;
        if(project.title != 'All'){
            displayProject(project);
        } else {
            allTodos();
        }

        closeModal(body, modal);
    });
}
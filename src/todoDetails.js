import closeModal from "./closeModal";

export default function todoDetailsModal(todo) {
    console.log('Opening modal...');

    const body = document.querySelector('body');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.id = 'todoInfo';

    //header
    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');
    const modalTitle = document.createElement('h2');
    modalTitle.classList.add('modal-title');
    modalTitle.textContent = todo.title;
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
    const desc = document.createElement('div');
    desc.textContent = 'Notes: \r\n' + todo.desc;
    modalBody.appendChild(desc);

    //due
    const due = document.createElement('div');
    due.textContent = 'Due: ' + todo.due;
    modalBody.appendChild(due);

    //priority
    const priority = document.createElement('div');
    priority.textContent = 'Priority: ' + todo.priority;
    modalBody.appendChild(priority);

    modal.appendChild(modalBody);
    body.appendChild(modal);

    const overlay = document.getElementById('overlay');
    overlay.classList.add('active');

    closeBtn.addEventListener('click', () => {
        closeModal(body, modal);
    });
}
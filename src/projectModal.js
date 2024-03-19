import closeModal from "./closeModal";
import createProject from "./project";

export default function projectModal() {
    console.log('Opening modal...');

    const body = document.querySelector('body');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.id = 'addProjectModal';

    //header
    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');
    const modalTitle = document.createElement('div');
    modalTitle.classList.add('modal-title');
    modalTitle.textContent = 'New Project';
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
    const projectTitle = document.createElement('input');
    projectTitle.type = 'text';
    projectTitle.name = 'project';
    projectTitle.id = 'project';
    projectTitle.placeholder = 'Project Title';
    form.appendChild(projectTitle);

    //submit
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.id = 'projSubmit';
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
        const project = document.getElementById('project');
        console.log('project made');
        createProject(project.value);

        closeModal(body, modal);
    })
}
export default function newProjectButtonLogic() {
    const modal = document.getElementById('addProjectModal');
    openModal(modal);

    const closeModalBtn = document.querySelectorAll('[data-close-button]');
    closeModalBtn.forEach(button => {
        button.addEventListener('click', () => {
            const close = button.closest('.modal');
            closeModal(close);
        });
    });
};

function openModal(modal){
    if (modal == null) {
        return;
    };

    const overlay = document.getElementById('overlay');
    modal.classList.add('active');
    overlay.classList.add('active');
    console.log('Opening new project modal...');
};

function closeModal(modal){
    if (modal == null) {
        return;
    };

    const overlay = document.getElementById('overlay');
    modal.classList.remove('active');
    overlay.classList.remove('active');
    console.log('Closing new project modal...');
};
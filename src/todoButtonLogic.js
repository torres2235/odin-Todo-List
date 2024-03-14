export default function todoButtonLogic(project) {
    const modal = document.getElementById('addTodoModal');
    openModal(modal);
};

function openModal(modal){
    if (modal == null) {
        return;
    };

    const overlay = document.getElementById('overlay');
    modal.classList.add('active');
    overlay.classList.add('active');

};

function closeModal(modal){
    if (modal == NULL) {
        return
    }

    const overlay = document.getElementById('overlay');
    modal.classList.remove('active');
    overlay.classList.remove('active');  
};
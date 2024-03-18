import openModal from "../openModal";
import closeModal from "../closeModal";

export default function addTaskButtonLogic(project) {
    const modal = document.getElementById('addTodoModal');
    openModal(modal);

    const closeModalBtn = document.querySelectorAll('[data-close-button]');
    closeModalBtn.forEach(button => {
        button.addEventListener('click', () => {
            const close = button.closest('.modal');
            closeModal(close);
        });
    });
};
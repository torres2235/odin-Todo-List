import openModal from "./openModal";
import closeModal from "./closeModal";

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
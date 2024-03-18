export default function closeModal(modal){
    if (modal == null) {
        return;
    };

    const overlay = document.getElementById('overlay');
    modal.classList.remove('active');
    overlay.classList.remove('active');
    console.log('Closing modal...');
};
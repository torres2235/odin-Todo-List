export default function openModal(modal){
    if (modal == null) {
        return;
    };

    const overlay = document.getElementById('overlay');
    modal.classList.add('active');
    overlay.classList.add('active');
    console.log('Opening modal...');
};
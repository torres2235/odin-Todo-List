export default function closeModal(body, modal){
    if (modal == null) {
        return;
    }
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('active');
    body.removeChild(modal);
    console.log('Closing modal...');
}
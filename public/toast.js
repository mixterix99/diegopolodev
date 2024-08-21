// public/toast.js
function showToast(message, type = 'info', duration = 3000) {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`; // Agrega la clase para el tipo de mensaje
    toast.innerText = message;

    toastContainer.appendChild(toast);

    // Show toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 10); // Usa un pequeño timeout para asegurar que la clase se añada después de agregar el elemento

    // Hide toast after duration
    setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.add('hide');
        setTimeout(() => {
            toast.remove();
        }, 500); // Coincide con la duración del desvanecimiento
    }, duration);
}

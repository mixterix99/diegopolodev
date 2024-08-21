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
    }, 10); // Use a small timeout to ensure the class is added after appending

    // Hide toast after duration
    setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.add('hide');
        setTimeout(() => {
            toast.remove();
        }, 500); // Match the duration of the fade-out
    }, duration);
}

// Example usage
// showToast('Hello World!', 'success', 5000);
// showToast('Something went wrong.', 'error', 5000);

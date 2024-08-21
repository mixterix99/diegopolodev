// public/typewriter.js
document.addEventListener("DOMContentLoaded", function() {
    const element = document.getElementById("typewriter");
    const text = "Diego";
    let index = 0;

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 400); // Ajusta la velocidad del efecto aquí
        }
    }
    type();
});

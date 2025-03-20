document.getElementById("startBtn").addEventListener("click", function () {
    document.querySelector(".screen-main").style.display = "none";
    document.querySelector(".screen-spoiler").style.display = "block";
});

document.getElementById("nextBtn").addEventListener("click", function () {
    document.querySelector(".screen-spoiler").style.display = "none";
    document.querySelector(".screen-mensaje").style.display = "block";
    startTextAnimation();
});

const messages = [
    "No sé cómo debería empezar esto... Quizá sea algo repentino, pero quiero decirte que me gustas jaja.",
    "Espero no haberte sorprendido demasiado... ",
    "Pero en serio, me gustas mucho. ❤️",
    "No sé, quizá te guste leer lo siguiente o quizá hasta aquí llegue esto jaja, depende de ti..."
];

let messageIndex = 0;

function startTextAnimation() {
    const textBox = document.getElementById("textBox");
    textBox.innerHTML = ""; // Limpiar el cuadro antes de empezar
    let index = 0;
    let text = messages[messageIndex];

    function typeWriter() {
        if (index < text.length) {
            textBox.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // Velocidad de escritura
        } else {
            setTimeout(deleteText, 2000); // Esperar 2 segundos antes de borrar
        }
    }

    function deleteText() {
        if (textBox.innerHTML.length > 0) {
            textBox.innerHTML = textBox.innerHTML.slice(0, -1);
            setTimeout(deleteText, 50); // Velocidad de borrado
        } else {
            messageIndex++;

            if (messageIndex < messages.length) {
                // Si hay más mensajes, escribir el siguiente
                setTimeout(startTextAnimation, 500);
            } else {
                // Si ya no hay más mensajes, mostrar el botón final
                document.getElementById("finalBtn").style.display = "block";
            }
        }
    }

    typeWriter();
}

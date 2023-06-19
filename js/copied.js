function copyText(text) {
    // Crea un elemento temporal para almacenar el texto
    var tempInput = document.createElement("input");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px";
    tempInput.value = text;
    document.body.appendChild(tempInput);

    // Selecciona el contenido del elemento temporal
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    // Copia el texto a la clipboard del usuario
    document.execCommand('copy');

    // Elimina el elemento temporal
    document.body.removeChild(tempInput);

    // Cambia el texto del botón temporalmente
    var button = event.target;
    var originalText = button.innerText;
    button.innerText = button.dataset.textEnd;

    // Vuelve a cambiar el texto del botón después de 2 segundos
    setTimeout(function() {
        button.innerText = originalText;
    }, 2000);
}
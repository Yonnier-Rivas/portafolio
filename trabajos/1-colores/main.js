/*Obtenemos los elementos del DOM*/ 
const $generate = document.getElementById('generate'),
    $reset = document.getElementById('reset'),
    $showColor = document.querySelector('.color-hex');

let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

/*Valores del array de hexadecimal*/ 
document.addEventListener('click', e => {
    /*Generamos un color random cuando se hace un click en el boton generate*/ 
    if (e.target === $generate) {
        let color = "#";
        for (let i = 0; i < 6; i++) color += hex[randomNumber()];
        $showColor.innerHTML = color;
        document.body.style.background = color;
    }

    // Resetear background a defecto.
    if (e.target === $reset) {
        $showColor.innerHTML = "#aec0ee";
        document.body.style.background = "#aec0ee";
    }

})

// Funcion para generar a random un numero random para generar el color.
function randomNumber() {
    return Math.floor(Math.random() * hex.length)
}
let puntosUsurio = 0;
let puntoPC = 0;

let manual = document.querySelector("#instrucciones");
let contPuntosUsuario = document.querySelector("#puntos-usurio");
let contPuntosPC = document.querySelector("#puntos-computadora");
let mensaje = document.querySelector("#mensaje");
let contGanaPunto = document.querySelector("#gana-punto");
let ElegirElemento = document.querySelector("#elegi-tu-ele");

let ContElecUsuario= document.querySelector("#eleccion-usuario");
let ContElecPC= document.querySelector("#eleccion-computadora");

let botonesElementos= document.querySelectorAll(".elemento");
botonesElementos.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
});

function iniciarTurno(e) {
    let eleccionPC = Math.floor(Math.random() * 3);
    let eleccionUsurio = e.currentTarget.id;
    
    // piedra = 0 
    // papel = 1
    // tigera = 2

    if (eleccionPC == 0){
        eleccionPC = "piedra✊"
    } else if (eleccionPC == 1 ) {
        eleccionPC = "papel✋"
    } else if (eleccionPC == 2){
        eleccionPC = "tijera✌"
    } 

    
    if (
        (eleccionUsurio === "piedra✊" && eleccionPC === "tijera✌") ||
        (eleccionUsurio === "tijera✌" && eleccionPC === "papel✋" ) ||
        (eleccionUsurio === "papel✋" && eleccionPC === "piedra✊" ) 
    ) {
        ganaUsurio();
    } else if (
        (eleccionPC == "piedra✊" && eleccionUsurio == "tijera✌") ||
        (eleccionPC == "tijera✌" && eleccionUsurio === "papel✋" ) ||
        (eleccionPC == "papel✋" && eleccionUsurio === "piedra✊" ) 
    ) {
        ganaPC();
    } else {
        empate();
    }
    
    mensaje.classList.remove("disabled");
    ContElecUsuario.innerText = eleccionUsurio;
    ContElecPC.innerText = eleccionPC;

    if (puntosUsurio === 3 || puntoPC === 3){

        if (puntosUsurio === 3){
            instrucciones.innerText = "🥳🔥¡Ganaste el juego¡🥳🔥"
        }

        if (puntoPC === 3){
            instrucciones.innerText = "¡Perdiste el juego¡😭"
        }

        ElegirElemento.classList.add("disabled");
        reiniciar.classList.remove("disabled")
        reiniciar.addEventListener("click", reiniciarJuego);
    }
}

function ganaUsurio(){
    puntosUsurio++;
    contPuntosUsuario.innerText = puntosUsurio;
    contGanaPunto.innerText = "¡Has ganado un punto!🥳🔥";
}

function ganaPC(){
    puntoPC++;
    contPuntosPC.innerText = puntoPC;
    contGanaPunto.innerText = "¡La IA ha ganado un punto!😭";
}

function empate(){
    contGanaPunto.innerText = "¡Empate!😨";
}

function reiniciarJuego(){
    reiniciar.classList.add("disabled");
    ElegirElemento.classList.remove("disabled");
    mensaje.classList.add("disabled")

    puntosUsurio = 0;
    puntoPC = 0;

    contPuntosUsuario.innerText = puntosUsurio;
    contPuntosPC.innerText = puntoPC;

    instrucciones.innerText = "¡El mejor de 3 gana!"
}




// Definimos los valores de los billetes y la cantidad disponible de cada uno
const billetes = [100000, 50000, 20000, 10000, 5000];
const billetesDisponibles = [100, 100, 100, 100, 100];

// Función para retirar el dinero
function retirarDinero() {

  
  const monto = parseInt(document.getElementById("monto").value); // Obtenemos el monto ingresado por el usuario
  const resultado = document.getElementById("resultado"); // Obtenemos el elemento HTML donde mostraremos el resultado

  // Verificamos que el monto ingresado sea un número entero
  if (isNaN(monto)) {  
    resultado.innerHTML = "Ingresa una cantidad válida.";
    return;
  }

  if (monto % 1 !== 0) {
    resultado.innerHTML = "Solo se permiten cantidades enteras.";
    return;
  }

  let cantidadBilletes = []; // aArray para almacenar la cantidad de billetes entregados de cada valor
  let montoRestante = monto; //Monto que se debe entregar

  for (let i = 0; i < billetes.length; i++) {
    let billetesUsados = Math.floor(montoRestante / billetes[i]);
    billetesUsados = Math.min(billetesUsados, billetesDisponibles[i]);

   
    cantidadBilletes.push(billetesUsados);  // Almacenamos la cantidad de billetes entregados en el array

    montoRestante -= billetesUsados * billetes[i];  //  monto restante a entregar
  }

// Si el monto restante no es cero, significa que no pudimos entregar la cantidad exacta solicitada 
  if (montoRestante !== 0) {
    resultado.innerHTML = "Lo sentimos, no podemos entregarte la cantidad exacta solicitada.";
    return;
  }

  let resultadoHtml = `Recibiste:<br>`;   // Creamos una cadena HTML con la cantidad de billetes entregados para cada valor

  
  for (let i = 0; i < cantidadBilletes.length; i++) {
    if (cantidadBilletes[i] > 0) {
      resultadoHtml += `${cantidadBilletes[i]} billetes de ${billetes[i]}<br>`;
    }
  }

  // Mostramos en pantalla la cantidad de billetes entregados
  resultado.innerHTML = resultadoHtml;
}

const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  retirarDinero();
});

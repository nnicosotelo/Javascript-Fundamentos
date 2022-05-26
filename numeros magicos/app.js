let numero = 0;

const playGame = function () {
  numero = Math.round(Math.random() * 10);
  document.querySelector("#play").disabled = true;
};

function probarNumero() {
  let numeroJugador = document.getElementById("numero_jugador").value;
  console.log(`El numero del jugador es ${numeroJugador}`);

  if (numeroJugador == numero) {
    alert("Ganaste!");
    document.getElementById("numero_jugador").value = "";
    document.getElementById("numero_jugador").focus();
    document.querySelector("#play").disabled = false;
  } else if (numeroJugador > numero) {
    alert("El numero ingresado es mayor que el numero magico");
    document.getElementById("numero_jugador").select();
  } else {
    alert("El numero ingresado es menor que el numero magico");
    document.getElementById("numero_jugador").select();
  }
}

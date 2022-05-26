let tareas = [];
let counter = document.getElementById("contador");
let contadorTarjetas = document.getElementById("contenedor");

const holdSubmit = function (e) {
  e.preventDefault();
  let tarea = document.getElementById("text_tarea");
  tareas.push(tarea.value);
  console.log(tareas);
  tarea.value = "";
  tarea.select();
  counter.innerText = tareas.length;
  agregarTarjeta();
};

const agregarTarjeta = function () {
  contenedorTarjetas.innerHTML = "";
  tareas.forEach(function (tarea, index) {
    let tarjeta = document.createElement("div");
    tarjeta.classList = "card mb-1";

    let contenidoTarjeta = ` <div
        class="card-body d-flex justify-content-between align-items-center"
      >
        <div>
          <span>Estudiar bootstrap</span>
          <button class="btn btn-danger btn-sm">x</button>
        </div>`;

    tarjeta.innerHTML = contenidoTarjeta;

    contenedorTarjetas.appendChild(tarjeta);
  });
};

document.getElementById("formulario").addEventListener("submit", holdSubmit);

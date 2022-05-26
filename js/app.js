// DOM document object model
let titulo1 = document.getElementsByTagName("h1");

// obtener elemento por su id

let titulo2 = document.getElementById("title");

// obtener elemento por su clase
let titulo3 = document.getElementsByClassName("titulo-uno");

let parrafo1 = document.querySelector("h3");
let parrafo2 = document.querySelector("#parrafo2");
let parrafo3 = document.querySelector(".parrafo3");

// cambiar el valor de un elemento
// title2.innerText = "Ahora si";
parrafo3.innerText = "usando el DOM";

// agregar un elemento al DOM

let nuevoParrafo = document.createElement("p");
nuevoParrafo.innerText = "nuevo parrafo con js";

document.body.appendChild(nuevoParrafo);

let imagen = document.createElement("img");
imagen.src =
  "https://neliosoftware.com/es/wp-content/uploads/sites/3/2018/07/aziz-acharki-549137-unsplash-1200x775.jpg";

imagen.alt = "imagen linda";
imagen.classList = "img-dom";

document.body.appendChild(imagen);

// reemplazar un elemento
let span = document.createElement("span");
span.innerText = "esta es la etiqueta span";

document.body.replaceChild(span, parrafo3);

// quitar un elemento
document.body.removeChild(span);

// clonar un elemento
document.body.appendChild(imagen.cloneNode(true));
document.body.appendChild(imagen.cloneNode(true));

// -------------------------------------------------
let lista = document.getElementById("lista");
let item = document.createElement("li");
item.innerText = "dormir mas";
let ul = document.querySelector("ul");

ul.appendChild(item);
// ------------------------------------------------

// Eventos-----------------------------
function mostrarMensaje() {
  alert("este es un mensaje importante");
}

function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}

function cambiarColor() {
  document.querySelector("#campo").classList = "fondo";
}

function quitarColor() {
  document.querySelector("#campo").classList = "";
}

function cambioInput(e) {
  console.log(e.target.value);
  console.log(e.target.name);
}

let nombre = "";

function obtenerNombre(e) {
  nombre = e.target.value;
}

function inputSaludar() {
  alert(`Bienvenido ${nombre}`);
}

let darkmode = false;

function modoOscuro() {
  if (!darkmode) {
    document.body.classList = "dark-mode";
    darkmode = true;
  } else {
    document.body.classList = " ";
    darkmode = false;
  }
}

document
  .getElementById("text_nombre")
  .addEventListener("change", obtenerNombre);

document.getElementById("toggle").addEventListener("click", modoOscuro);

// clase 15----------------------------------------

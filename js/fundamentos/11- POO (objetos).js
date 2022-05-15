// prototipos y clases
class persona {
  constructor(nombre, edad) {
    (this.nombre = nombre), (this.edad = edad);
  }
  hablar() {
    console.log(`${this.nombre} esta hablando`);
  }
}

let nico = new persona("Nico", 23);
let emma = new persona("Emma", 3);

class Profesor extends persona {
  constructor(nombre, edad, tipo) {
    super(nombre, edad, tipo);
    this.tipo = tipo;
  }
  tipoFormateado() {
    return `Tipo de contratacion ${this.tipo}`;
  }
}

// objetos en arreglos
let alumnos = [
  {
    nombre: "Emma",
    curso: "Fullstack",
  },
  {
    nombre: "Mateo",
    curso: "Frontend",
  },
  {
    nombre: "Valen",
    curso: "Javascript",
  },
];

// recorrer un arreglo de objetos
for (let i = 0; i < alumnos.length; i++) {
  console.log(`Nombre:${alumnos[i].nombre} + ${alumnos[i].curso}`);
}
let data = [
  {
    id: 7,
    email: "michael.romero@reqres.in",
    first_name: "Michael",
    last_name: "Romero",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    id: 8,
    email: "dolph27@reqres.in",
    first_name: "Dolph",
    last_name: "Main",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
  },
  {
    id: 9,
    email: "randylogress@reqres.in",
    first_name: "Randy",
    last_name: "Logress",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
  },
  {
    id: 10,
    email: "codycena@reqres.in",
    first_name: "Cody",
    last_name: "Cena",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
  },
  {
    id: 11,
    email: "codycena@reqres.in",
    first_name: "Lisa",
    last_name: "Louson",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
  },
  {
    id: 12,
    email: "codycena@reqres.in",
    first_name: "Emma",
    last_name: "Lynch",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
  },
];

// mostrar una lista con los nombres en orden alfabetico

const listaUsuarios = function () {
  let usuariosOrdenados = data.map(function (alumno) {
    return `${alumno.last_name} ${alumno.first_name}`;
  });

  usuariosOrdenados.sort().forEach(function (alumno, index) {
    console.log(`${index + 1} - ${alumno}`);
  });
};

// crear tarjetas de presentacion con los datos del usuario

function tarjetasPresentacion() {
  data.forEach(function (user) {
    document.write("-----Tarjeta de Presentacion-----<br/>");
    document.write(`<b>Nombre: </b>${user.last_name} ${user.first_name}<br/>`);
    document.write(`Correo: ${user.email}<br/>`);
  });
}

// agregar un usuario mas al final de la lista
function agregarUsuario() {
  let idNuevo = data[data.length - 1].id + 1;

  let nombre = prompt("Ingrese el nombre del usuario");
  let apellido = prompt("Ingrese el apellido del usuario");
  let correo = prompt("Ingrese el correo del usuario");
  let avatar = prompt("Ingrese la direccion de la imagen de su avatar");

  data.push({
    id: idNuevo,
    email: correo,
    first_name: nombre,
    last_name: apellido,
    avatar: avatar,
  });
}

// actualizar el nombre de usuario
// la funcion permite saber cual es el usuario
// usar el id para identificar al usuario
// pedir el nombre

const actualizarNombre = function (id) {
  let index = data.findIndex(function (user) {
    return user.id === id;
  });

  if (index < 0) {
    return "El id ingresado no existe";
  }

  let nuevoNombre = prompt(
    "Ingrese el nuevo nombre para " + data[index].first_name
  );

  data[index].first_name = nuevoNombre;

  // console.log(index);
};

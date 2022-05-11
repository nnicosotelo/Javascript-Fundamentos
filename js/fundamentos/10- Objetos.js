// objetos
let alumno = {
  Nombre: "Enzo Perez",
  edad: 29,
  dni: 24145678,
  curso: "FullStack",
  saludar: function () {
    console.log(`Hola, soy ${this.Nombre}`);
  },
};

// obtener valores
console.log(alumno.Nombre);
console.log(alumno["curso"]);

// agregar una nueva propiedad al objeto
alumno.domicilio = "Cazon 912";

// modificar un valor de alguna propiedad
alumno.Nombre = "Julian Alvarez";

// eliminar una propiedad del objeto
delete alumno.edad;

// como recorrer un objeto
for (const atributo in alumno) {
  if (atributo !== "saludar") {
    console.log(`${atributo}: ${alumno[atributo]}`);
  }
}

// ejercicio
// mostrar en pantalla las propiedades del objeto
let persona = {
  nombre: "Julian Alvarez",
  edad: 22,
  genero: "Masculino",
  obtDetalles: function () {
    for (const propiedad in this) {
      if (propiedad !== "obtDetalles") {
        console.log(`${propiedad}:${this[propiedad]}`);
      }
    }
  },
};

// ejercicio
// crear objeto llamado auto con sus propiedades

let auto = {
  marca: "Ford",
  modelo: "Raptor F-150",
  color: "negro",
  anio: 2022,
  encendido: false,
  encenderApagar: function () {
    this.encendido = !this.encendido;
    if (this.encendido) {
      console.log("El vehiculo esta encendido");
    } else {
      console.log("El vehiculo esta apagado");
    }
  },
};

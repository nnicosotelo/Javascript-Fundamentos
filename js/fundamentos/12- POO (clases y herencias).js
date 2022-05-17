// usuarios modelo

class Usuario {
  constructor(nombre, username, password, estado = true) {
    this.nombre = nombre;
    this.username = username;
    this.password = password;
    this.estado = estado;
  }

  presentacion() {
    console.log("--------Tarjeta de presentacion--------");
    console.log(`Nombre:${this.nombre}`);
    console.log(`Nombre de usuario:${this.username}`);
  }
}

let user1 = new Usuario("Nico", "nnicosotelo", "2798");
let user2 = new Usuario("Emma", "emma10", "1245", false);

Usuario.prototype.saludar = function () {
  console.log(`Hola soy ${this.nombre}`);
};

// herencia
class Admistrador extends Usuario {
  constructor(nombre, username, password, estado = true) {
    super(nombre, username, password, estado);
    this.puesto = puesto;
  }
  cambiarEstado() {
    this.estado = !this.estado;
  }
  superPresentacion() {
    this.presentacion();
    console.log(`Puesto: ${this.puesto}`);
  }
}

let admin = new Admistrador(
  "Anabella Perez",
  "anaperez3",
  "emma123",
  false,
  "Gerente de Ventas"
);

//Ejercicio programa con objeto cuenta

class Cuenta {
  constructor(titular, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }
  ingresar(valor = 0) {
    if (valor > 0) {
      this.saldo += valor;
    } else {
      console.error("El monto debe ser mayor a 0");
    }
    this.informar();
  }
  extraer(valor = 0) {
    if (valor > this.saldo || valor < 0) {
      console.error("Monto invalido o Saldo insuficiente");
    } else {
      this.saldo -= valor;
    }
  }
  informar() {
    console.log("------Estado de Cuenta------");
    console.log(`Titular:${this.titular}`);
    console.log(`Saldo:${this.saldo}`);
  }
}

let cuenta001 = new Cuenta("Mateo Rodriguez");

// Ejercicio 2 clase persona

class Persona {
  constructor(nombre, edad, sexo, peso, altura, nacimiento, dni) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.nacimiento = nacimiento;
  }
  mostrarGeneracion() {
    switch (true) {
      case this.nacimiento >= 1930 && this.nacimiento <= 1948:
        console.log(
          "Sos de la Silent Generation y tu rasgo caracteristico es la Austeridad"
        );
        break;
      case this.nacimiento >= 1949 && this.nacimiento <= 1968:
        console.log(
          "Sos de la generacion Baby Boom y tu rasgo caracteristico es la Ambision"
        );
        break;
      case this.nacimiento >= 1969 && this.nacimiento <= 1980:
        console.log(
          "Sos de la generacion X y tu rasgo caracteristico es la Obsesion por el extio"
        );
        break;
      case this.nacimiento >= 1981 && this.nacimiento <= 1993:
        console.log(
          "Sos de la generacion Y y tu rasgo caracteristico es la Frustacion"
        );
        break;
      case this.nacimiento >= 1994 && this.nacimiento <= 2010:
        console.log(
          "Sos de la generacion Z y tu rasgo caracteristico es la Irreverencia"
        );
        break;
      default:
        break;
    }
  }
  mostrarDatos() {
    console.log("----Datos Personales");
    console.log(`Nombre: ${(this.nombre = nombre)}`);
    console.log(`Edad: ${(this.edad = edad)}`);
    console.log(`Dni:${(this.dni = dni)}`);
    console.log(`Sexo: ${(this.sexo = sexo)}`);
    console.log(`Peso: ${(this.peso = peso)}`);
    console.log(`Altura: ${(this.altura = altura)}`);
    console.log(`Nacimiento: ${(this.nacimiento = nacimiento)}`);
  }
  generarDni() {
    if (this.dni) {
      for (let i = 0; i < 8; i++) {
        let numero = Math.round(Math.random() * 9);
        this.dni = String(numero);
      }
      console.log(`El DNI generado es: ${this.dni}`);
    }
  }
}

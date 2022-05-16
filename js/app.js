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

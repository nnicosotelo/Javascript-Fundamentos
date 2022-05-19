class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.precio = precio;
    this.nombre = nombre;
  }
  imprimirDatos() {
    document.write("<b>-----Datos del Producto-----</b>");
    document.write(`<br/><b>Codigo:</b> ${this.codigo}`);
    document.write(`<br/><b>Codigo:</b> ${this.nombre}`);
    document.write(`<br/><b>Codigo:</b> ${this.precio} <br/> <br/>`);
  }
}

let productos = [];

// let producto1=new Producto()

function agregarProducto() {
  for (let index = 0; index < 4; index++) {
    let codigo = new Date().getTime();
    let nombre = prompt("Ingrese el nombre del producto");
    let precio = prompt("Ingrese el precio del producto");
    productos.push(new Producto(codigo, nombre, precio));
  }
}

function mostrarDatos() {
  for (let i = 0; i < productos.length; i++) {
    productos[i].imprimirDatos();
  }
}

// ejercicio libro

class Libro {
  constructor(isbn, titulo, autor, numpag) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.numpag = numpag;
  }
  mostrarLibro() {
    console.log(
      `El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor${this.autor} tiene ${this.numpag} paginas`
    );
  }
  compararPaginas(libro) {
    if (this.numpag > libro.numpag) {
      let cantidadPaginasDif = this.numpag - libro.numpag;
      return `El libro ${this.titulo} tiene ${cantidadPaginasDif} paginas mas que el libro ${libro.titulo}`;
    }
    if (this.numpag < libro.numpag) {
      let cantidadPaginasDif = this.numpag - libro.numpag;
      return `El libro ${libro.titulo} tiene ${cantidadPaginasDif} paginas mas que el libro ${this.titulo}`;
    }
    return "Ambos libros tienen la misma cantidad de paginas";
  }
}

let libro1 = new libro(
  "235-525-65-1",
  "Como hacer amigos",
  "Franco Armani",
  "912"
);

let libro2 = new libro("246-865-36-74-3", "PHP desde cero", "User", 134);

function compararPaginas() {}

let productos = [];

let formulario;
let inputId;
let inputNombre;
let inputPrecio;
let inputCantidad;
let contenedorProductos;


class Producto {
  constructor(id, nombre, precio, cantidad) {
    this.id = id;
    this.nombre = nombre.toUpperCase();
    this.precio = precio;
    this.cantidad = cantidad;
  }
  calcularPrecio = () => this.precio * this.cantidad;
}

function inicializarElementos() {
  formulario = document.getElementById("formulario");
  inputId = document.getElementById("inputId");
  inputNombre = document.getElementById("inputNombreProducto");
  inputPrecio = document.getElementById("inputPrecio");
  inputCantidad = document.getElementById("inputCantidad");
  contenedorProductos = document.getElementById("contenedorProductos");
}

function inicializarEventos() {
  formulario.onsubmit = (event) => validarFormulario(event);
}

function validarFormulario(event) {
  event.preventDefault();
  let idProducto = inputId.value;
  let nombre = inputNombre.value;
  let precio = parseFloat(inputPrecio.value);
  let cantidad = parseInt(inputCantidad.value);

  const idExiste = productos.some((producto) => producto.id === idProducto);
  if (!idExiste) {
    let producto = new Producto(
      idProducto,
      nombre,
      precio,
      cantidad
    );

    productos.push(producto);
    formulario.reset();

    pintarProductos();
  } else {
    alert("El codigo ya existe");
  }
}

function eliminarProducto(idProducto) {
  let columnaBorrar = document.getElementById(`columna-${idProducto}`);
  let indiceBorrar = productos.findIndex(
    (producto) => Number(producto.id) === Number(idProducto)
  );

  productos.splice(indiceBorrar, 1);
  columnaBorrar.remove();
}

function pintarProductos() {
  contenedorProductos.innerHTML = "";
  productos.forEach((producto) => {
    let column = document.createElement("div");
    column.className = "col-md-4 mt-3";
    column.id = `columna-${producto.id}`;
    column.innerHTML = `
            <div class="card">
                <div class="card-body">
                <p class="card-text">ID:
                    <b>${producto.id}</b>
                </p>
                <p class="card-text">Nombre:
                    <b>${producto.nombre}</b>
                </p>
                <p class="card-text">Precio:
                    <b>${producto.precio}</b>
                </p>
                <p class="card-text">Cantidad:
                    <b>${producto.cantidad}</b>
                </p>
                </div>
                <div class="card-footer">
                    <button class="btn btn-outline-warning" id="botonEliminar-${producto.id}" >Eliminar</button>
                </div>
            </div>`;

    contenedorProductos.append(column);

    let botonEliminar = document.getElementById(`botonEliminar-${producto.id}`);
    botonEliminar.onclick = () => eliminarProducto(producto.id);
  });
}

function main() {
  inicializarElementos();
  inicializarEventos();
}

main();


inputPrecio.addEventListener('input', validarKey);

function validarKey(e) {
  if (e != ''){
  inputPrecio.classList.add("is-valid")
  }
}

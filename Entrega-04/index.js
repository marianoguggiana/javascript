const productos = [{ id: 1, producto: "Laptop", precio: 1000 },
{ id: 2,  producto: "Mouse", precio: 50 },
{ id: 3,  producto: "Auricular", precio: 150 }];


console.log(productos)

function agregarProducto(){
     nombre = prompt("Ingresar nombre:")
     precio = prompt("Ingresar precio:")
     id = productos.length + 1
     const nuevoprod = new productoClass(id, nombre, precio)
     productos.push(nuevoprod)
}
class productoClass{
         constructor(id, nombre, precio){
             this.id = id
             this.producto = nombre
             this.precio = precio
}
}

agregarProducto()

console.log(productos)

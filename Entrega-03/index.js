const productos = [{ id: 1, producto: "Laptop", precio: 1000 },
                  { id: 2,  producto: "Mouse", precio: 50 },
                  { id: 3,  producto: "Auricular", precio: 150 }];

for (const producto of productos) {
    console.log(producto.id);
    console.log(producto.producto);
    console.log(producto.precio);
    console.log("================");
}

console.log(productos)

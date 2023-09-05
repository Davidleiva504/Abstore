// Función para mostrar la pantalla emergente con detalles del producto
function mostrarDetalleProducto(producto, imagen, descripcion, precio) {
    document.getElementById("detalle-titulo").textContent = producto;
    document.getElementById("detalle-imagen").src = imagen;
    document.getElementById("detalle-descripcion").textContent = descripcion;
    document.getElementById("detalle-precio").textContent = "Precio: " + precio;
}

// Función para agregar el producto al carrito (puedes personalizar esta función según tus necesidades)
function agregarAlCarrito() {
    // Aquí puedes agregar lógica para agregar el producto al carrito de compras.
    alert("Producto agregado al carrito.");
}

// Asigna la función mostrarDetalleProducto al evento click de los botones Comprar
document.querySelectorAll('.btn-primary').forEach(function (btn) {
    btn.addEventListener('click', function () {
        var producto = this.getAttribute('data-producto');
        var imagen = this.getAttribute('data-imagen');
        var descripcion = this.getAttribute('data-descripcion');
        var precio = this.getAttribute('data-precio');
        mostrarDetalleProducto(producto, imagen, descripcion, precio);
    });
});

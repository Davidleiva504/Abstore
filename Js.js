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

// Obtener todos los botones con la clase "enviarWhatsApp"
const buttons = document.querySelectorAll(".enviarWhatsApp");

// Agregar un evento clic a cada botón
buttons.forEach((button) => {
    button.addEventListener("click", function () {
        const producto = this.getAttribute("data-producto");
        const imagen = this.getAttribute("data-imagen");
        const descripcion = this.getAttribute("data-descripcion");
        const precio = this.getAttribute("data-precio");

        // Reemplaza "NUMERODETELEFONO" con el número de teléfono de WhatsApp +504 98557819  
        const numeroDeTelefono = "97477523";

        // Construir el mensaje de WhatsApp con los datos del producto
        const mensajeWhatsApp = `¡Hola! Estoy interesado en ${producto}. Descripción: ${descripcion}, Precio: ${precio}`;

        // Codificar el mensaje para usarlo en el enlace de WhatsApp
        const mensajeCodificado = encodeURIComponent(mensajeWhatsApp);

        // Crear el enlace de WhatsApp
        const url = `https://wa.me/${numeroDeTelefono}?text=${mensajeCodificado}`;

        // Abrir WhatsApp en una nueva ventana o pestaña
        window.open(url, "_blank");
    });
});

//envio de formulario contactanos
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = encodeURIComponent(document.getElementById("nombre").value);
    const mensaje = encodeURIComponent(document.getElementById("mensaje").value);
    const numeroDeTelefono = encodeURIComponent(document.getElementById("numeroDeTelefono").value);

    const mensajeWhatsApp = `Hola, soy ${nombre}. Estoy interesado en: ${mensaje}`;
    const url = `https://wa.me/${numeroDeTelefono}?text=${mensajeWhatsApp}`;

    // Abre WhatsApp en una nueva ventana o pestaña
    window.open(url, "_blank");
});
// Las ordenes 
let ordenes = [
    { cliente: "Elizabeth Bennet", producto: "Tacones Negros con Detalles Dorados", cantidad: 1, estado: "Pendiente" },
    { cliente: "Diana Barry", producto: "Tacones Rosados Pastel con Plataforma", cantidad: 2, estado: "Enviado" },
    { cliente: "Ginebra Le Fay", producto: "Tacones Plateados con Brillo", cantidad: 1, estado: "Pendiente" },
    { cliente: "Arwen Undómiel", producto: "Tacones Blancos con Detalles Plateados", cantidad: 1, estado: "Pendiente" },
    { cliente: "Daphne Bridgerton", producto: "Tacones Rojos", cantidad: 1, estado: "Enviado" },
    { cliente: "Clarisse McClellan", producto: "Blusa Beige Sin Mangas", cantidad: 3, estado: "Pendiente" },
    { cliente: "Jo March", producto: "Blusa Negra Asimétrica con Nudo", cantidad: 2, estado: "Enviado" },
    { cliente: "Lucy Pevensie", producto: "Blusa Negra con Cuello Blanco Cuadrado", cantidad: 1, estado: "Pendiente" },
    { cliente: "Ophelia Hamlet", producto: "Blusa Blanca con Fruncido", cantidad: 1, estado: "Pendiente" },
    { cliente: "Sophie Hatter", producto: "Vestido con Rosas", cantidad: 2, estado: "Enviado" },
    { cliente: "Catherine Earnshaw", producto: "Vestido Negro de Tirantes", cantidad: 1, estado: "Pendiente" },
    { cliente: "Violet Beauregarde", producto: "Pantalón Blanco Formal", cantidad: 1, estado: "Cancelado" },
    { cliente: "Eowyn Se Anillos", producto: "Jeans Blanco Acampanado", cantidad: 2, estado: "Enviado" }
];

// Función para eliminar una orden
function eliminarOrden(indice) {
    ordenes.splice(indice, 1);  // Eliminar la orden
    renderizarListaDeOrdenes();  // Actualizar la interfaz
}

// interactuar con la lista de órdenes cuando este corriendo 
function renderizarListaDeOrdenes() {
    const listaOrdenes = document.getElementById("listaDeOrdenes");
    listaOrdenes.innerHTML = ""; 

    // Recorre el array de órdenes y crea los elementos d HTML
    ordenes.forEach((orden, indice) => {
        const elementoOrden = document.createElement("li");
        elementoOrden.classList.add("orden");
        elementoOrden.innerHTML = `
            <div>
                <strong>Cliente:</strong> ${orden.cliente}<br>
                <strong>Producto:</strong> ${orden.producto}<br>
                <strong>Cantidad:</strong> ${orden.cantidad}<br>
                <strong>Estado:</strong> ${orden.estado}
            </div>
            <button class="boton-eliminar" onclick="eliminarOrden(${indice})">Eliminar</button>
        `;
        listaOrdenes.appendChild(elementoOrden);
    });
}


// Llamar a la función interactuar con las órdenes al cargar la página (renderizar)
renderizarListaDeOrdenes();

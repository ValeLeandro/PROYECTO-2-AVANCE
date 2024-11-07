// Llamar a esta función cuando se cargan los productos o antes de agregar nuevos productos
window.onload = function() {
    eliminarProductosVacios();
    cargarProductos();
};


//Esto es para cargar todos los productos que estan en el js datos en la tabla de mantenimiento
function cargarProductos() {
    const cuerpoTabla = document.getElementById('cuerpoTablaProductos');
    // Limpiar el cuerpo de la tabla antes de llenarlo
    cuerpoTabla.innerHTML = '';

    // Esto recorre el array de productos
    productos.forEach(producto => {
        // esto crea una nueva fila 
        const fila = document.createElement('tr');

        // Esto ya es cada fila, el 0 es el id, el 1 es la imagen, el 2 es el descuento, el 3 el titulo y asi
        fila.innerHTML = `
            <td>${producto[0]}</td>
            <td><img src="${producto[1]}" alt="${producto[3]}" style="width:50px;height:50px;"></td>
            <td>${producto[3]}</td>
            <td>${producto[2]}%</td>
            <td>$${producto[4]}</td>
            <td>${producto[5]}</td>
            <td><img src="${producto[6]}" alt="Imagen adicional" style="width:50px;height:50px;"></td>
            <td>
                <img class="icono" onclick="editarProducto(${producto[0]})" src="imagenes/boton-editar.png" alt="">
                <img class="icono" onclick="eliminarProducto(${producto[0]})" src="imagenes/eliminar.png" alt="">
                <img class="icono" onclick="eliminarProductosVacios()" src="imagenes/eliminar.png" alt="">
            </td>
        `;

        // Agregar la fila al cuerpo de la tabla 
        cuerpoTabla.appendChild(fila);
    });
}

// Función para editar un producto
function editarProducto(id) {
    const producto = productos.find(p => p[0] === id);
    if (producto) {
        // Rellenar los campos con los datos del producto
        document.getElementById('idProducto').value = producto[0];
        document.getElementById('imagenProducto').value = producto[1];
        document.getElementById('nombreProducto').value = producto[3];
        document.getElementById('precioConDescuento').value = producto[2];
        document.getElementById('precioOriginal').value = producto[4];
        document.getElementById('categoriaProducto').value = producto[5];
        document.getElementById('imagenAdicional').value = producto[6];

        // Mostrar el modal de edición
        const modal = new bootstrap.Modal(document.getElementById('modalProducto'));
        modal.show();
    }
}

// Función para guardar los cambios de un producto
function guardarCambiosProducto() {
    const id = document.getElementById('idProducto').value;
    const imagen = document.getElementById('imagenProducto').value;
    const nombre = document.getElementById('nombreProducto').value;
    const descuento = document.getElementById('precioConDescuento').value;
    const precio = document.getElementById('precioOriginal').value;
    const categoria = document.getElementById('categoriaProducto').value;
    const imagenAdicional = document.getElementById('imagenAdicional').value;

    // Encuentra el producto por id
    const producto = productos.find(p => p[0] == id);

    if (producto) {
        // Actualiza las propiedades del producto
        producto[1] = imagen; // Imagen
        producto[3] = nombre; // Nombre
        producto[2] = descuento; // Descuento
        producto[4] = precio; // Precio 
        producto[5] = categoria; // Categoría
        producto[6] = imagenAdicional; // Imagen adicional

        // Actualizar el localStorage con el array de productos actualizado
        localStorage.setItem('productos', JSON.stringify(productos));

        // Recargar la tabla con los productos actualizados
        cargarProductos();

        // Cerrar el modal de edición
        const modal = bootstrap.Modal.getInstance(document.getElementById('modalProducto'));
        modal.hide();
    }
}
// Función para agregar un producto
function agregarProducto() {
    // Obtener los valores del formulario
    const id = document.getElementById('idProducto').value;
    const imagen = document.getElementById('imagenProducto').value;
    const nombre = document.getElementById('nombreProducto').value;
    const descuento = document.getElementById('Descuento').value;
    const precio = document.getElementById('precio').value;
    const categoria = document.getElementById('categoriaProducto').value;
    const imagenAdicional = document.getElementById('imagenAdicional').value;

    // Validar que todos los campos requeridos estén llenos
    if (!id || !imagen || !nombre || !descuento || !precio || !categoria) {
        alert("Por favor completa todos los campos");
        return; // Salir de la función si hay campos vacíos
    }

    // Crear un nuevo producto
    const nuevoProducto = [id, imagen, descuento, nombre, precio, categoria, imagenAdicional];

    productos.push(nuevoProducto);

    // Actualizar el localStorage
    localStorage.setItem('productos', JSON.stringify(productos));

    cargarProductos();

    // Cerrar el modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('modalAgregarProducto'));
    modal.hide();
}

// Función para eliminar un producto
function eliminarProducto(id) {
    
    productos = productos.filter(p => p[0] !== id);
    console.log(productos);
    // Actualizar el localStorage con el nuevo array de productos


    localStorage.setItem('productos', JSON.stringify(productos));

    // Recarga la tabla con los productos actualizados
    cargarProductos();
}


function eliminarProductosVacios() {
    // Filtrar los productos para eliminar aquellos que tienen campos vacíos
    productos = productos.filter(producto => {
        // Verificamos que el producto no tenga campos vacíos (por ejemplo, el ID no puede estar vacío)
        return producto[0] && producto[3] && producto[4]; // Asegúrate de que los campos ID, nombre y precio no estén vacíos
    });

    // Actualizar el localStorage con el array de productos limpio
    localStorage.setItem('productos', JSON.stringify(productos));

    // Recargar la tabla con los productos limpios
    cargarProductos();
}


// Llamar a esta función cuando se cargan los productos o antes de agregar nuevos productos
window.onload = function() {
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

          // Cambiar el título del modal 
        document.getElementById('modalProductoLabel').innerText = 'Editar Producto';

        // Mostrar el modal de edición
        const modal = new bootstrap.Modal(document.getElementById('modalProducto'));
        modal.show();
    }
}



// Función para abrir el modal y preparar el formulario para agregar un nuevo producto
function agregarProducto() {

    // Limpiar los campos del formulario y el id es para que se ponga automatico 

    document.getElementById('idProducto').value = productos.length +1;
    document.getElementById('imagenProducto').value ="";
    document.getElementById('nombreProducto').value ="";
    document.getElementById('precioConDescuento').value ="";
    document.getElementById('precioOriginal').value ="";
    document.getElementById('categoriaProducto').value ="";
    document.getElementById('imagenAdicional').value ="";

    // esto es nada mas estetico para cuando uno abre el modal que salga el teto bien
    document.getElementById('modalProductoLabel').innerText = 'Agregar Producto';
    
    // Mostrar el modal
    const modal = new bootstrap.Modal(document.getElementById('modalProducto'));
    modal.show();
}




// Esta es la funcion para guardar los cambios tanto de la agregar producto como la de editar
function guardarCambios(event) {

    event.preventDefault(); // Prevenir que se recargue la página


    // Obtener los valores de los campos del formulario
    const id = document.getElementById('idProducto').value;
    const imagen = document.getElementById('imagenProducto').value;
    const nombre = document.getElementById('nombreProducto').value;
    const descuento = document.getElementById('precioConDescuento').value;
    const precio = document.getElementById('precioOriginal').value;
    const categoria = document.getElementById('categoriaProducto').value;
    const imagenAdicional = document.getElementById('imagenAdicional').value;

    // Verificar si el producto ya existe
    const productoExistente = productos.find(p => p[0] == id);
    console.log(productos);
    if (productoExistente !=null) {
        // Si el producto ya existe, lo actualizamos

        console.log("El producto si existe");
        productoExistente[1] = imagen;
        productoExistente[3] = nombre;
        productoExistente[2] = descuento;
        productoExistente[4] = precio;
        productoExistente[5] = categoria;
        productoExistente[6] = imagenAdicional;

        Swal.fire({
            title: 'Producto actualizado!',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            customClass: {
              confirmButton: 'alertbutton', 
            }
            
          })


        localStorage.setItem('productos', JSON.stringify(productos));

        console.log(productos);

    } else {
        // Si el producto no existe, lo agregamos como nuevo
        const nuevoProducto = [parseInt(id), imagen, descuento, nombre, precio, categoria, imagenAdicional];
        productos.push(nuevoProducto);
// sweet alert para mostrar si se agrego
        Swal.fire({
            title: 'Producto guardado!',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            customClass: {
              confirmButton: 'alertbutton', 
            }
            
          })
        localStorage.setItem('productos', JSON.stringify(productos));
        console.log(productos);
    }

    // Recargar la tabla de productos para que en el html se vea bien actualizado
    cargarProductos();

    // Cerrar el modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('modalProducto'));
    modal.hide();
}





// Función para eliminar un producto
function eliminarProducto(id) {
    // Confirmar si el usuario está seguro de eliminar el producto
    const confirmar = confirm("¿Estás seguro de que quieres eliminar este producto?");
    
    if (confirmar) {
        // Eliminar el producto del array
        productos = productos.filter(p => p[0] !== id);

        // Guardar los cambios en el localStorage
        localStorage.setItem('productos', JSON.stringify(productos));


        alert("Producto eliminado con éxito.");
        // recarga la tabla
        cargarProductos();

        
    }
}







//Profe no vea mucho esto, es que tuve como 300 problemas con campos vacios pero se pudo resolver:D
function eliminarProductosVacios() {
    // Filtrar los productos para eliminar aquellos que tienen campos vacíos
    productos = productos.filter(producto => {
        // Verificamos que el producto no tenga campos vacíos (por ejemplo, el ID no puede estar vacío)
        return producto[0] && producto[3] && producto[4]; 
    });

    // Esto actualiza el localStorage con el array de productos limpio
    localStorage.setItem('productos', JSON.stringify(productos));

    // Recargar la tabla con los productos limpios
    cargarProductos();
}




// Cargar los productos desde localStorage o basicamente inicializarlos si no existen
let productos = JSON.parse(localStorage.getItem('productos'));

if (!productos || productos.length === 0) {
    productos =[
        [1,"imagenes objetos/zapato1.jfif","13","Tacones negros con detalles dorados",20,"zapatos","imagenes objetos/modelozapa1.jpeg"],
        [2,"imagenes objetos/zapato2.jfif","5","Tacones rosados pastel con plataforma",35,"zapatos","imagenes objetos/modelozapa2.jpg"],
        [3,"imagenes objetos/zapato3.jfif","15","Tacones negros elegantes",35,"zapatos","imagenes objetos/modelozapa3.jpg"],
        [4,"imagenes objetos/zapato4.jfif","15","Tacones plateados con brillo",35,"zapatos","imagenes objetos/modelozapa4.jpg"],
        [5,"imagenes objetos/zapato5.jfif","10","Zapatos negros con plataforma",35,"zapatos","imagenes objetos/modelozapa5.jpg"],
        [6,"imagenes objetos/zapato6.jfif","10","Tacones blancos con detalles plateados",35,"zapatos","imagenes objetos/modelozapa6.jpg"],
        [7,"imagenes objetos/zapato7.jfif","10","Tacones negros con plataforma",35,"zapatos","imagenes objetos/modelozapa7.jpg"],
        [8,"imagenes objetos/zapato8.jfif","10","Tacones rojos",35,"zapatos","imagenes objetos/modelozapa8.jpg"],
        [9,"imagenes objetos/zapato9.jfif","10","Tacones blancos con detalle de tela",35,"zapatos","imagenes objetos/modelozapa9.jpg"],
        [10,"imagenes objetos/zapato10.jfif","10","Zapato plateado con detalles brillantes",35,"zapatos","imagenes objetos/modelozapa10.jpg"],
        [11,"imagenes objetos/zapato11.jpeg","13","Tacones plateados",35,"zapatos","imagenes objetos/modelozapa11.jpeg"],
        [12,"imagenes objetos/zapato12 .jpg","5","Tacones rosados",35,"zapatos","imagenes objetos/modelozapa12.jpg"],
        [13,"imagenes objetos/blusa1.jpg","20","Blusa blanca con mangas acampanadas",20,"blusas","imagenes objetos/modeloblusa1.jfif"],
        [14,"imagenes objetos/blusa2.jpg","5","Blusa beige sin mangas",30,"blusas","imagenes objetos/modelo2blusa.jfif"],
        [15,"imagenes objetos/blusa3.jpeg","15","Blusa Negra Asimétrica con Nudo",28,"blusas","imagenes objetos/modelo3blusa.jpeg"],
        [16,"imagenes objetos/blusa4.jpg","15","Blusa Negra con Cuello Blanco Cuadrado",25,"blusas","imagenes objetos/modeloblusa4.jpg"],
        [17,"imagenes objetos/blusa5.jpg","10","Blusa Polo Negra con Blanco",35,"blusas","imagenes objetos/modeloblusa5.jpg"],
        [18,"imagenes objetos/blusa6.jpg","13","Blusa Blanca con Fruncido",35,"blusas","imagenes objetos/modeloblusa6.jpg"],
        [19,"imagenes objetos/blusa7.jpg","13","Blusa Blanca Off-Shoulder",20,"blusas","imagenes objetos/modeloblusa7.jpg"],
        [20,"imagenes objetos/blusa8.jpg","10","Blusa Negra Espalda Descubierta",35,"blusas","imagenes objetos/modeloblusa8.jpg"],
        [21,"imagenes objetos/blusa9.jpg","5","Blusa Blanca con flores azules",25,"blusas","imagenes objetos/modeloblusa9.jpg"],
        [22,"imagenes objetos/blusa10.jpg","10","Blusa Beige Asimétrica",30,"blusas","imagenes objetos/modeloblusa10.jpg"],
        [23,"imagenes objetos/blusa11.jpg","13","Blusa Café Manga Larga con Nudo",20,"blusas","imagenes objetos/modeloblusa11.jpg"],
        [24,"imagenes objetos/blusa12.jpg","5","Blusa Café con Encaje",30,"blusas","imagenes objetos/modeloblusa12.jpg"],
        [25,"imagenes objetos/vestido1azul.jpg","20","Vestido azul floreado",20,"vestidos","imagenes objetos/modelo1azul.jpg"],
        [26,"imagenes objetos/vestido2.jpg","5","Vestido vintage",30,"vestidos","imagenes objetos/vestido2modelo.jpg"],
        [27,"imagenes objetos/vestido3.jpg","15","Vestido con rosas",28,"vestidos","imagenes objetos/vestido3modelo.jpg"],
        [28,"imagenes objetos/vestido4.jpg","15","Vestido blanco elegante",35,"vestidos","imagenes objetos/vestido4 modelo.jpg"],
        [29,"imagenes objetos/vestido 5.jpg","10","Vestido claro largo",35,"vestidos","imagenes objetos/vestido5modelo.jpg"],
        [30,"imagenes objetos/vestido6.jpg","13","Vestido con cerezas",35,"vestidos","imagenes objetos/modelo6.jpeg"],
        [31,"imagenes objetos/vestido7.jpg","13","Vestido negro de tirantes",29,"vestidos","imagenes objetos/modelo7.jpg"],
        [32,"imagenes objetos/vestido8.jpg","10","Vestido cafe con espalda abierta",35,"vestidos","imagenes objetos/modelo8.jpg"],
        [33,"imagenes objetos/vestido9.jpg","5","Vestido verde",25,"vestidos","imagenes objetos/modelo9.jpg"],
        [34,"imagenes objetos/vestido10.jpg","10","Vestido celeste",20,"vestidos","imagenes objetos/modelo10.jpg"],
        [35,"imagenes objetos/vestido11.jpg","13","Vestido amarillo",20,"vestidos","imagenes objetos/modelo11.jpg"],
        [36,"imagenes objetos/vestido12.jpg","5","Vestido beige elegante",38,"vestidos","imagenes objetos/modelo12.jpg"],
        [37,"imagenes objetos/pantalon1.jpg","10","Pantalon negro estilo campana",35,"pantalones","imagenes objetos/modelopanta1.jpg"],
        [38,"imagenes objetos/pantalon2.jpg","5","Pantalon blanco formal",25,"pantalones","imagenes objetos/modelopanta2.jpg"],
        [39,"imagenes objetos/pantalon3.jpg","13","Pantalon beige estilo acampanado",30,"pantalones","imagenes objetos/modelopanta3.jpg"],
        [40,"imagenes objetos/pantalon4.jpg","5","Jeans tipo recto",30,"pantalones","imagenes objetos/modelopanta4.jpg"],
        [41,"imagenes objetos/pantalon5.jpg","10","Pantalon formal cafe",35,"pantalones","imagenes objetos/modelopanta5.jpg"],
        [42,"imagenes objetos/pantalon6.jpg","13","Jeans estilo campana",25,"pantalones","imagenes objetos/modelopanta6.jpg"],
        [43,"imagenes objetos/pantalon7.jpg","13","Jeans oscuros",29,"pantalones","imagenes objetos/modelopanta7.jpg"],
        [44,"imagenes objetos/pantalon8.jpg","10","Jeans blanco acampanado",30,"pantalones","imagenes objetos/modelopanta8.jpg"],
        [45,"imagenes objetos/pantalon9.jpg","5","Jeans negro ancho",25,"pantalones","imagenes objetos/modelopanta9.jpg"],
        [46,"imagenes objetos/pantalon10.jpg","10","Pantalon formal beige",30,"pantalones","imagenes objetos/modelopanta10.jpg"],
        [47,"imagenes objetos/pantalon11.jpg","13","Jeans casual",27,"pantalones","imagenes objetos/modelopanta11.jpg"],
        [48,"imagenes objetos/pantalon12.jpg","5","Pantalon formal talle alto",38,"pantalones","imagenes objetos/modelopanta12.jpg"]
    ];
    localStorage.setItem('productos', JSON.stringify(productos));
}


function mostrarProductos(filtroStock = 0, filtroCategoria = '', filtroPrecio = Infinity) {
    const tabla = document.getElementById('product-table').getElementsByTagName('tbody')[0];
    tabla.innerHTML = '';  // Limpiar contenido anterior

    const productosFiltrados = productos.filter(producto => {
        const stock = parseInt(producto[2], 10);
        const categoria = producto[5];
        const precio = parseFloat(producto[4]);

        return (
            stock >= filtroStock &&
            (filtroCategoria === '' || categoria === filtroCategoria) &&
            precio <= filtroPrecio
        );
    });

    // Esto comprueba si hay productos para mostrarle al usuario 
    if (productosFiltrados.length === 0) {
        const fila = document.createElement('tr');
        const celda = document.createElement('td');
        celda.colSpan = 7;
        celda.textContent = "No se encontraron productos.";
        fila.appendChild(celda);
        tabla.appendChild(fila);
        return;
    }

    productosFiltrados.forEach(producto => {
        const fila = document.createElement('tr');

        producto.forEach((item, index) => {
            const celda = document.createElement('td');

            if (index === 1 || index === 6) {  // Mostrar las imágenes de Kavaleza
                const imagen = document.createElement('img');
                imagen.src = item;
                imagen.alt = "Imagen del producto";
                celda.appendChild(imagen);
            } else {
                celda.textContent = item;
            }

            fila.appendChild(celda);
        });

        tabla.appendChild(fila);
    });
}

// Función para obtener los valores que se agregaron en los filtros y mostrar productos
function aplicarFiltros() {
    const stock = parseInt(document.getElementById('stockFilter').value, 10) || 0;
    const categoria = document.getElementById('categoryFilter').value;
    const precio = parseFloat(document.getElementById('priceFilter').value) || Infinity;
    mostrarProductos(stock, categoria, precio);
}

// Función para quitar los filtros
function limpiarFiltros() {
    document.getElementById('stockFilter').value = '';
    document.getElementById('categoryFilter').value = '';
    document.getElementById('priceFilter').value = '';
    mostrarProductos();
}

// Listeners para los botones (no se como llamarlos)
document.getElementById('applyFilters').addEventListener('click', aplicarFiltros);
document.getElementById('clearFilters').addEventListener('click', limpiarFiltros);

// mostrar todos los productos al cargar la página
document.addEventListener('DOMContentLoaded', () => mostrarProductos());

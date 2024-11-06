// Función para armar los productos según una categoría específica
function armarProductosCat(valor) {
  // Itera sobre cada producto del otro js que se llama datos
  for (var producto of productos) {
    var html = "";

    // Verifica si el producto pertenece a la categoría dada

    if (producto[5] == valor) {
      // Esto de acá construye el HTML para los productos de la categoría
      html = `
            <div class="pro"> 
                <a href="producto.html?id=${producto[0]}">
                    <div class="card-product">
                        <div class="container-img">
                            <img class="imgPro" src="${producto[1]}" alt="" />
                            <span class="discount">${producto[2]}</span>
                            </a>
                            <div class="button-group">
                                <span>
                                    <img id="imgcarrito" onclick="addCart(${producto[0]})" src="imagenes objetos/icons8-carrito-de-compras-48.png" alt="">
                                </span>
                            </div>
                        </div>
                        <div class="content-card-product">
                            <h3>${producto[3]}</h3>
                            <p class="price">$${producto[4]}</p><br>
                            <button onclick="addCart(${producto[0]});" class="btnCart">
                                <p>Agregar al Carrito </p>
                                <img class="imgcarrito" src="imagenes/carrito-de-compras.png" alt="">
                            </button>
                        </div>
                    </div>
                </div>
            `;
    }

    document.write(html); // Escribe el HTML en el documento
  }
}

// Función para armar la página individual de cada producto
function armarProducto() {
  const queryString = window.location.search; // Básicamente estobtiene los parámetros de la URL
  const urlParams = new URLSearchParams(queryString); // Crea un objeto de búsqueda

  var id = urlParams.get("id"); // Obtiene el ID del producto
  var index = id - 1; // Ajusta el índice para acceder al array

  // Esto actualiza el título de la página con el nombre del producto
  document.getElementById("titlePage").innerHTML = productos[index][3];

  var tallasHtml; // Variable para almacenar las opciones de tallas

  // Esto de acá verifica si el producto es de tipo zapatos y define las tallas disponibles si es zapatos
  if (productos[index][5] === "zapatos") {
    tallasHtml = `
            <option>Escoge una talla</option>
            <option>35</option>
            <option>36</option>
            <option>37</option>
            <option>38</option>
            <option>39</option>
            <option>40</option>
            <option>41</option>
            <option>42</option>
        `;
  } else {
    // Si no es zapatos, se definen otras opciones de tallas
    tallasHtml = `
            <option>Escoge una talla</option>
            <option>XXL</option>
            <option>XL</option>
            <option>L</option>
            <option>M</option>
            <option>S</option>
            <option>XS</option>
            <option>XXS</option>
        `;
  }

  // Construye el HTML para el producto individual
  var html = `
        <div class='producto'>
            <div class='imagen'>
                <div id='carouselExampleFade${id}' class='carousel slide carousel-fade'>
                    <div class='carousel-inner'>
                        <div class='carousel-item active'>
                            <img src='${productos[index][1]}' class='d-block w-100' alt='${productos[index][2]}'>
                        </div>
                        <div class='carousel-item'>
                            <img src='${productos[index][6]}' class='d-block w-100'> 
                        </div>
                    </div>
                    <button class='carousel-control-prev' type='button' data-bs-target='#carouselExampleFade${id}' data-bs-slide='prev'>
                        <span class='carousel-control-prev-icon' aria-hidden='true'></span>
                        <span class='visually-hidden'>Anterior</span>
                    </button>
                    <button class='carousel-control-next' type='button' data-bs-target='#carouselExampleFade${id}' data-bs-slide='next'>
                        <span class='carousel-control-next-icon' aria-hidden='true'></span>
                        <span class='visually-hidden'>Siguiente</span>
                    </button>
                </div>
            </div>
            <div class='detalles'>
            <h1>${productos[index][3]}</h1><hr><br>
                <div class='opciones'>
                    <label for='talla'>Talla</label>
                    <select id='talla'>
                        ${tallasHtml} <!-- Inserta las opciones de tallas -->
                    </select>
                </div>
                <hr>
                <h4>Precio: $${productos[index][4]}</h4><hr>
                <ul>
                    <li>Categoría: ${productos[index][5]}</li>
                    <li>Colección de Verano 2024</li>
                    <li>Descuento:-${productos[index][2]}%</li>
                </ul><hr>
                <button onclick="addCart(${id});" class="btnCart">
                        <p>Agregar al Carrito </p>
                        <img class="imgcarrito" src="imagenes/carrito-de-compras.png" alt="">
                </button>
                
            </div>
        </div>
    `;

  document.write(html); // Escribe el HTML en el documento
}


// Función para armar todos los productos en en html del catalogo
function armarProductos() {
  let html = "";

  for (var producto of productos) {
    // esto es para que pegue absolutamente
    html += `
        <div class="pro"> 
            <a href="producto.html?id=${producto[0]}">
                <div class="card-product">
                    <div class="container-img">
                        <img class="imgPro" src="${producto[1]}" alt="" />
                        <span class="discount">${producto[2]}</span>
                    </a>
                    <div class="button-group">
                        <span>
                            <img id="imgcarrito" onclick="addCart(${producto[0]})" src="imagenes objetos/icons8-carrito-de-compras-48.png" alt="">
                        </span>
                    </div>
                </div>
                <div class="content-card-product">
                    <h3>${producto[3]}</h3>
                    <p class="price">$${producto[4]}</p><br>
                        <button onclick="addCart(${producto[0]});" class="btnCart">
                            <p>Agregar al Carrito </p>
                            <img class="imgcarrito" src="imagenes/carrito-de-compras.png" alt="">
                        </button>
                </div>
            </div>
        </div>
        `;
  }

  document.write(html); // Escribe el HTML en el documento
}

// Esta funcion es para que en la pagina principal salgan 3 divs que tienen productos aleatorios
function mostrarProductosAleatorios() {
  // Esto es un arreglo normal que sirve para almacenar los productos seleccionados aleatoriamente
  const productosAleatorios = [];
  
  // Generamos 3 ids

  while (productosAleatorios.length < 3) {
    const idAleatorio = Math.floor(Math.random() * 48) + 1; //Esto es porque tenemos 48 productos entones hacemos que escoga un numero random entre esos entre 1 y 48
    // Esto es para que no se repitan los id 
    if (!productosAleatorios.includes(idAleatorio)) {
      productosAleatorios.push(idAleatorio);
    }
  }
// Esto busca los productos de acuerdo a su id
  const productosSeleccionados = productosAleatorios.map(id => {
    return productos.find(producto => producto[0] === id);
  });

  // HTML para mostrar los productos seleccionados
  let html = "";
  productosSeleccionados.forEach(producto => {
    if (producto) {
      html += `
        <div class="pro">
          <a href="producto.html?id=${producto[0]}">
            <div class="card-product">
              <div class="container-img">
                <img class="imgPro" src="${producto[1]}" alt="${producto[3]}" />
                <span class="discount">${producto[2]}</span>
              </div>
              </a>
              
              <div class="content-card-product">
                <h3>${producto[3]}</h3>
                <p class="price">$${producto[4]}</p>
                <img id="imgcarrito" onclick="addCart(${producto[0]})" src="imagenes objetos/icons8-carrito-de-compras-48.png" alt="Agregar al carrito">
              </div>
            </div>
        
        </div>
      `;
    }
  });

  // Y ya esto nada mas inserta los productos aleatorios en el contenedor 
  document.querySelector(".productos-aleatorios").innerHTML = html;
}


// Aseguramos que el código se ejecute una vez que la página esté completamente cargada
document.addEventListener('DOMContentLoaded', function() {
  // Aseguramos que el contenedor de resultados esté oculto al inicio
  const contenedorResultados = document.getElementById('resultadosBusqueda');
  contenedorResultados.classList.add('oculto'); // Ocultamos el contenedor de resultados al cargar la página
});

// Función para buscar productos
function buscarProducto() {
  const query = document.getElementById('entradaBusqueda').value.trim().toLowerCase();
  const contenedorResultados = document.getElementById('resultadosBusqueda');

  // Limpiamos los resultados anteriores
  contenedorResultados.innerHTML = `
      <img src="imagenes/close.svg" class="cerrarBusqueda" id="cerrarResultados">
  `;
  
  // Si se ingresa un término de búsqueda
  if (query) {
      // Filtramos los productos que coinciden con el término de búsqueda
      const resultados = productos.filter(producto => 
          producto[3].toLowerCase().includes(query) ||  // Filtramos por nombre
          producto[5].toLowerCase().includes(query)     // Filtramos por categoría
      );

      // Si se encuentran resultados
      if (resultados.length > 0) {
          resultados.forEach(producto => {
              const item = document.createElement('div');
              item.classList.add('itemResultado');
              item.innerHTML = `
                  <a href="producto.html?id=${producto[0]}">
                      <img class="imgresultado" src="${producto[1]}" alt="${producto[3]}" width="50px" height="50px">
                      <p class="presultado">${producto[3]}</p>
                      <span class="precioresultado">Precio $${producto[2]}</span><hr>
                  </a>
              `;
              contenedorResultados.appendChild(item);
          });
          contenedorResultados.classList.remove('oculto'); // Mostrar los resultados
      } else {
          contenedorResultados.innerHTML += '<p>No se encontraron productos.</p>';
          contenedorResultados.classList.remove('oculto'); // Mostrar los resultados
      }
  } else {
      contenedorResultados.classList.add('oculto'); // Ocultar resultados si no hay búsqueda
  }

  // Agregar el evento para cerrar el contenedor de resultados
  document.getElementById('cerrarResultados').addEventListener('click', function() {
      contenedorResultados.classList.add('oculto'); // Ocultar los resultados
  });
}

// Mostrar el campo de búsqueda cuando se hace clic en el ícono
document.getElementById('iconoBusqueda').addEventListener('click', function() {
  document.getElementById('entradaBusqueda').classList.toggle('mostrar');
});

// Cerrar el contenedor de resultados al hacer clic fuera de él
document.addEventListener('click', function(event) {
  const contenedorResultados = document.getElementById('resultadosBusqueda');
  const entradaBusqueda = document.getElementById('entradaBusqueda');
  
  // Si el clic no es dentro del contenedor de resultados ni en el campo de búsqueda
  if (!contenedorResultados.contains(event.target) && event.target !== entradaBusqueda) {
      contenedorResultados.classList.add('oculto');
  }
});

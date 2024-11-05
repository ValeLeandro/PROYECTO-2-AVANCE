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


function mostrarProductosAleatorios() {
  // Creamos un arreglo para almacenar los productos seleccionados aleatoriamente
  const productosAleatorios = [];
  
  // Generamos 3 IDs aleatorios únicos

  while (productosAleatorios.length < 3) {
    const idAleatorio = Math.floor(Math.random() * 48) + 1; //Esto es porque tenemos 48 productos entones hacemos que escoga un numero random entre esos entre 1 y 48
    // Verificamos que no se repitan los productos seleccionados
    if (!productosAleatorios.includes(idAleatorio)) {
      productosAleatorios.push(idAleatorio);
    }
  }

  // Buscamos los productos correspondientes a los IDs aleatorios
  const productosSeleccionados = productosAleatorios.map(id => {
    return productos.find(producto => producto[0] === id);
  });

  // Creamos el HTML para mostrar los productos seleccionados
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

  // Insertamos los productos aleatorios en el contenedor correspondiente
  document.querySelector(".productos-aleatorios").innerHTML = html;
}


// esto selecciona cosas del html, como el boton del carrito, el contenedor de los productos en el carrito, boton de comprar y pagar
const btnCart = document.querySelector(".container-cart-icon"); 
const containerCartProducts = document.querySelector(".container-cart-products"); 
const btnComprar = document.querySelector(".btn1.btn-primary[data-bs-toggle='modal']"); 
const btnPagar = document.querySelector(".btn2.btn-primary"); 

// Esto muestra u oculta el carrito al hacer clic en el ícono que se llama btnCart
btnCart.addEventListener("click", () => {
  containerCartProducts.classList.toggle("hidden-cart"); 
});


// Seleccióona elementos que mostraran la información del carrito
const cartInfo = document.querySelector(".cart-product");
const rowProduct = document.querySelector(".row-product");
const rowProduct2 = document.querySelector(".row-product2");
const productsList = document.querySelectorAll(".container-products"); 
const valorTotal = document.querySelector(".total-pagar");
const valorTotal2 = document.querySelector(".total-pagar2"); 
const countProducts = document.querySelector("#contador-productos"); 
const cartEmpty = document.querySelector(".cart-empty"); 
const cartTotal = document.querySelector(".cart-total"); 
const cartTotal2 = document.querySelector(".cart-total2"); 

// Función para agregar un producto al carrito

function addCart(id) {
  console.log(cart);

  var nuevo = true; // Esto es como que asume que el producto es nuevo

  // Recorre el carrito para verificar si el producto ya existe
  for (var i = 0; i < cart.length; i++) {
    if (cart[i][0] == id) {
      // Si el ID ya existe en el carrito entonces pues el producto no es nuevo kklsj
      console.log(cart[i][5]);
      nuevo = false;
      cart[i][5] = cart[i][5] + 1; // Incrementa la cantidad del producto
    }
  }

  // Si el producto es nuevo, se extraen tipo sus datos y se añade al carrito
  if (nuevo) {
    var id = productos[getIndex(id)][0];
    var imagen = productos[getIndex(id)][1];
    var descuento = productos[getIndex(id)][2];
    var titulo = productos[getIndex(id)][3];
    var precio = productos[getIndex(id)][4];
    var cantidad = 1;

    // Añade el producto al carrito
    cart.push([id, imagen, descuento, titulo, precio, cantidad]);
  }

  // Muestra una alerta de éxito
  Swal.fire({
    title: "Agregaste un producto al carrito!",
    text: "Sigue comprando en KAVALEZA!",
    customClass: {
      confirmButton: "alertbutton",
    },
  });

  showHTML(); // Muestra el contenido del carrito
  console.log(cart);
}

// Función para obtener el índice de un producto de los productos

function getIndex(id) {
  var result = -1; 
  for (var i = 0; i < productos.length; i++) {
    if (productos[i][0] == id) {
      // Si se encuentra el ID
      result = i; // Guarda el índice
      break; // Sale del bucle
    }
  }
  return result; // Devuelve el índice encontrado
}

// Función para eliminar un producto del carrito

function removeCart(id) {
  console.log(cart);

  var cart2 = new Array();

  for (var i = 0; i < cart.length; i++) {
    if (cart[i][0] != id) {
      cart2.push(cart[i]);
    }
  }

  cart = cart2; // Actualiza el carrito
  console.log(cart); // Esto es una prueba
  showHTML(); // Muestra el contenido actualizado del carrito
}

// Función para actualizar la vista del carrito
const showHTML = () => {
  // Esto es si el carrito está vacío (todo lo que dice 2 es para el resumen del modal)
  if (!cart.length) {
    cartEmpty.classList.remove("hidden"); 
    rowProduct.classList.add("hidden"); 
    rowProduct2.classList.add("hidden"); 
    cartTotal.classList.add("hidden");
    cartTotal2.classList.add("hidden"); 
  } else {
    // Esto si hay productos en el carrito
    cartEmpty.classList.add("hidden"); 
    rowProduct.classList.remove("hidden"); 
    cartTotal.classList.remove("hidden"); 
    cartTotal2.classList.remove("hidden"); 
    rowProduct2.classList.remove("hidden"); 
  }

  // Limpia las listas de productos
  rowProduct.innerHTML = "";
  rowProduct2.innerHTML = "";

  let total = 0; // Total a pagar
  let totalOfProducts = 0; // Contador de productos

  // Itera sobre cada producto en el carrito
  cart.forEach((product) => {
    // Crea contenedores para cada producto
    const containerProduct = document.createElement("div");
    const containerProduct2 = document.createElement("div");
    containerProduct.classList.add("cart-product"); // Clase para el producto

    // Agrega el HTML del producto
    containerProduct.innerHTML = `
            <div class="info-cart-product">
                <img src="${product[1]}" class="cart-product-image" style="width:50px; height:50px;">
                <span class="cantidad-producto-carrito">${product[5]}</span>
                <p class="titulo-producto-carrito">${product[3]}</p>
                <span class="precio-producto-carrito">$${product[4]}</span>
            </div>
            <img onclick="removeCart(${product[0]});" class="icon-close" src="imagenes/close.svg" alt="">
        `;

    containerProduct2.innerHTML = `
            <div class="info-cart-product">
                <img src="${product[1]}" class="cart-product-image" style="width:50px; height:50px;">
                <span class="cantidad-producto-carrito">${product[5]}</span>
                <p class="titulo-producto-carrito">${product[3]}</p>
                <span class="precio-producto-carrito">$${product[4]}</span>
            </div><hr>
        `;

    // Agrega los productos a la vista
    rowProduct.append(containerProduct);
    rowProduct2.append(containerProduct2);

    // Calcula el total y la cantidad de productos
    total += parseInt(product[5] * product[4]); // Suma el costo
    totalOfProducts += product[5]; // Suma la cantidad
  });

  // Muestra el total y la cantidad 
  valorTotal.innerText = `$${total}`;
  valorTotal2.innerText = `$${total}`;
  countProducts.innerText = totalOfProducts; 
};

// Esto es un try catch para validar el formulario de compra
function validarFormulario() {
  try {
    // Verifica si el carrito está vacío
    if (!cart.length) {
      throw new Error("Tu carrito está vacío. Agrega productos de KAVALEZA antes de continuar.");
    }

    // Obtiene valores del formulario
    const nombre = document.getElementById('nombre').value;
    const direccion = document.getElementById('direccion').value;
    const ciudad = document.getElementById('ciudad').value;
    const pais = document.getElementById('pais').value;
    const numeroTarjeta = document.getElementById('numero-tarjeta').value;
    const fechaExpiracion = document.getElementById('fecha-expiracion').value;
    const cvv = document.getElementById('cvv').value;

    // Esto verifica que todos los campos estén llenos
    if (!nombre || !direccion || !ciudad || !pais || !numeroTarjeta || !fechaExpiracion || !cvv) {
      throw new Error("Necesitas llenar todos los campos para continuar tu compra de KAVALEZA.");
    }

    // Valida el número de tarjeta que pueda ponerle espacios si gusta o si quiere ponelo corrido
    const tarjetaPermitido = /^(\d{4}\s?){3}\d{4}$/; 
    if (!tarjetaPermitido.test(numeroTarjeta)) {
      throw new Error("El número de tarjeta debe tener 16 dígitos y puede tener espacios cada 4.");
    }

    // Valida el CVV
    const cvvPermitido = /^\d{3}$/; 
    if (!cvvPermitido.test(cvv)) {
      throw new Error("El CVV debe contener exactamente 3 dígitos.");
    }

    // Muestra un mensaje de éxito
    Swal.fire({
      title: '¡Gracias por tu compra!',
      text: 'Tu pedido ha sido realizado con éxito. Gracias por comprar en KAVALEZA',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      customClass: {
        confirmButton: 'alertbutton', 
      }
      
    }).then(() => {
      // Vaciar el carrito SOLO si la compra fue exitosa
      cart = [];  // Vacía el carrito
      showHTML();  // Actualiza la interfaz para reflejar que el carrito está vacío
    });

  } catch (error) {
    // Esto es una sweet alert que muestra errores al usuario
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message,
      confirmButtonText: 'Aceptar',
      customClass: {
        confirmButton: 'alertbutton', 
      }
    });
  }
}

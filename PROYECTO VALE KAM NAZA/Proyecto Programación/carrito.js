const btnCart = document.querySelector(".container-cart-icon");
const containerCartProducts = document.querySelector(".container-cart-products");
const btnComprar = document.querySelector(".btn1.btn-primary[data-bs-toggle='modal']");
const btnPagar = document.querySelector(".btn2.btn-primary");

btnCart.addEventListener("click", () => {
  containerCartProducts.classList.toggle("hidden-cart");
});


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



const showHTML = () => {
  if (!cart.length) {
    cartEmpty.classList.remove("hidden");
    rowProduct.classList.add("hidden");
    rowProduct2.classList.add("hidden");
    cartTotal.classList.add("hidden");
    cartTotal2.classList.add("hidden");
  } else {
    cartEmpty.classList.add("hidden");
    rowProduct.classList.remove("hidden");
    cartTotal.classList.remove("hidden");
    cartTotal2.classList.remove("hidden");
    rowProduct2.classList.remove("hidden");
  }

  rowProduct.innerHTML = "";
  rowProduct2.innerHTML = "";

  let total = 0;
  let totalOfProducts = 0;

  cart.forEach((product) => {
    const containerProduct = document.createElement("div");
    const containerProduct2 = document.createElement("div");
    containerProduct.classList.add("cart-product");

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
                <span class="precio-producto-carrito">${product[4]}</span>
            </div><hr>
        `;

    rowProduct.append(containerProduct);

    rowProduct2.append(containerProduct2);

    console.log(product[4]);
    total =
      total +
      parseInt(product[5] * product[4]);
    totalOfProducts = totalOfProducts + product[5];


  });

  valorTotal.innerText = `$${total}`;
  valorTotal2.innerText = `$${total}`;
  countProducts.innerText = totalOfProducts;
};

function validarFormulario() {
  try {
    if (!cart.length) {
      throw new Error("Tu carrito está vacío. Agrega productos de KAVALEZA antes de continuar.");
    }
    const nombre = document.getElementById('nombre').value;
    const direccion = document.getElementById('direccion').value;
    const ciudad = document.getElementById('ciudad').value;
    const pais = document.getElementById('pais').value;
    const numeroTarjeta = document.getElementById('numero-tarjeta').value;
    const fechaExpiracion = document.getElementById('fecha-expiracion').value;
    const cvv = document.getElementById('cvv').value;

    if (!nombre || !direccion || !ciudad || !pais || !numeroTarjeta || !fechaExpiracion || !cvv) {
          throw new Error("Necesitas llenar todos los campos para continuar tu compra de KAVALEZA.");
      }

      const tarjetaPermitido = /^\d{16,20}$/;
    if (!tarjetaPermitido.test(numeroTarjeta)) {
      throw new Error("El número de tarjeta debe tener 16 dígitos y no debe contener letras.");
    }


      Swal.fire({
        title: '¡Gracias por tu compra!',
        text: 'Tu pedido ha sido realizado con éxito. Gracias por comprar en KAVALEZA',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        customClass: {
          confirmButton: 'alertbutton', 
        }
      });

  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message,
      confirmButtonText: 'Aceptar',
  customClass: {
    confirmButton: 'alertbutton', 
  }
    })
  }
}

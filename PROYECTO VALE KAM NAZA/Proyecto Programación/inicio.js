// esto es del formulario cada campo
function validarFormulario() {
    try {
      // Obtiene los valores del formulario
      const usuario = document.getElementById('usuario').value;
      const contraseña = document.getElementById('contraseña').value;
  
      // Verifica que ambos campos estén llenos
      if (!usuario || !contraseña) {
        throw new Error("Debes completar ambos campos (usuario y contraseña) para acceder.");
      }
  
      // Valida la longitud mínima de la contraseña (por ejemplo, 6 caracteres)
      if (contraseña.length < 6) {
        throw new Error("La contraseña debe tener al menos 6 caracteres.");
      }
  
      // Si todo es correcto, muestra un mensaje de éxito
      Swal.fire({
        title: '¡Acceso exitoso a KAVALEZA!',
        text: 'Bienvenido, has iniciado sesión correctamente, ahora podrás comprar nuestros productos <3',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        customClass: {
          confirmButton: 'alertbutton', 
        }
      }).then(() => {
        // Redirige al usuario a la página de inicio
        window.location.href = "Inicio.html";
      });
  
    } catch (error) {
      // Muestra un mensaje de error con la SweetAlert
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


  function validarFormulario2() {
    try {
      // Obtiene los valores de los campos
      const nombreCompleto = document.getElementById('nombreCompleto').value;
      const numeroCelular = document.getElementById('numeroCelular').value;
      const email = document.getElementById('email').value;
      const contraseña = document.getElementById('contraseña').value;
  
      // Verifica que todos los campos estén llenos
      if (!nombreCompleto || !numeroCelular || !email || !contraseña) {
        throw new Error("Todos los campos son obligatorios. Por favor, completa todos los campos.");
      }
  
      // Valida la contraseña con la expresión regular
      const contraseñaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6}$/;
      if (!contraseñaRegex.test(contraseña)) {
        throw new Error("La contraseña debe tener al menos 6 caracteres, una letra mayúscula, una minúscula y un número");
      }
  
      // Si todo es correcto, muestra un mensaje de éxito
      Swal.fire({
        title: '¡Cuenta creada con éxito!',
        text: 'Bienvenido a Kavaleza. Ya puedes acceder a tu cuenta.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        customClass: {
          confirmButton: 'alertbutton', 
        }
      }).then(() => {
        // Redirige al usuario a la página de inicio
        window.location.href = "Inicio.html";
      });
  
    } catch (error) {
      // Muestra un mensaje de error con la SweetAlert
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
  
  
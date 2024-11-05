// esto es un array que va a tener las imagenes de las florecitas
const imagenesFlores = [
    'imagenes/petalos.png', 
    'imagenes/flor-de-cerezo.png',
    'imagenes/sakura.png'
];

// esta función crear un flor y la hace caer
function crearFlorCayendo() {

    // elemento de imagen para la flor
    const flor = document.createElement('img');
    flor.classList.add('flor');

    // Esto selecciona una imagen aleatoria de las flores qu estan en el array
    const imagenAleatoria = imagenesFlores[Math.floor(Math.random() * imagenesFlores.length)];
    flor.src = imagenAleatoria;

    // Asignar tamaño aleatorio a cada flor 
    const tamano = Math.random() * (40 - 13) + 13;
    flor.style.width = `${tamano}px`;
    flor.style.height = `${tamano}px`;

    // Posicionar la flor aleatoriamente 
    flor.style.left = `${Math.random() * 100}%`;

    // Añadir la flor al contenedor
    document.querySelector('.contenedor-caida').appendChild(flor);

    // Remover la flor después de que termine la animación
    flor.addEventListener('animationiteration', () => {
        flor.remove();
    });
}

// Crear flores cada 200ms (más rápido = más flores)
setInterval(crearFlorCayendo, 220);
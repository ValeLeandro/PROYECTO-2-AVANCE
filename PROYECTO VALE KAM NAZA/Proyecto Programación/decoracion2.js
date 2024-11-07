// esto es un array que va a tener la imageb
const imagenCopitos = [ 
    'imagenes/copo-de-nieve.png'
];

// esta función crear un flor y la hace caer
function crearCopitoCayendo() {

    // elemento de imagen para el copito
    const copo = document.createElement('img');
    copo.classList.add('copo');

    // Esto selecciona la imagen que estan en el array
    const imagenAleatoria = imagenCopitos[Math.floor(Math.random() * imagenCopitos.length)];
    copo.src = imagenAleatoria;

    // Asignar tamaño aleatorio a cada copo
    const tamano = Math.random() * (30 - 10) + 10;
    copo.style.width = `${tamano}px`;
    copo.style.height = `${tamano}px`;

    // Posiciona el copo aleatoriamente 
    copo.style.left = `${Math.random() * 100}%`;

    // Añadir el copo al contenedor
    document.querySelector('.contenedor-caida2').appendChild(copo);

    // Remover el copo después de que termine la animación
    copo.addEventListener('animationiteration', () => {
        copo.remove();
    });
}

// Crear copos cada cierto tiempo, si uno pone muy poquito son un monton de flores y asi 
setInterval(crearCopitoCayendo, 230);
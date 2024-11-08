// esto es un array que va a tener las imagenes de las florecitas
const imagenesFlores = [ 
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
    const tamano = Math.random() * (30 - 10) + 10;
    flor.style.width = `${tamano}px`;
    flor.style.height = `${tamano}px`;

    // Posicionar la flor aleatoriamente 
    flor.style.left = `${Math.random() * 100}%`;

    // Esto nada más agrega la flor al contenedor
    document.querySelector('.contenedor-caida').appendChild(flor);

    // Esto remueve la flor después de que termine la animación
    flor.addEventListener('animationiteration', () => {
        flor.remove();
    });
}

// Crear flores cada cierto tiempo, si uno pone muy poquito son un monton de flores y asi 
setInterval(crearFlorCayendo, 230);



//Audio

let audio = new Audio(''); 

    // Configuración del audio esto es para repetirlo infinitamente
    audio.loop = true; 
    audio.volume = 0.2; 

    // Función para reproducir el audio
    function playAudio() {
        audio.play();  
    }

    // Función para pausar el audio
    function pauseAudio() {
        audio.pause();
    }
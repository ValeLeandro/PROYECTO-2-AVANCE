/*funcion para que luego del video se diriga a la pagina principal*/

window.addEventListener('load', function() {
    const delay = 6000;

    setTimeout(function() {
        window.location.href = 'inicio.html'; 
    }, delay);
});

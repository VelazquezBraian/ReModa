//popup cliente
var overlay=document.getElementById('overlay');

function abrirPopup() {
    overlay.classList.add('active');
    document.getElementById('popup').classList.add('active');
}

function cerrarPopup() {
    overlay.classList.remove('active');
    document.getElementById('popup').classList.remove('active');
}
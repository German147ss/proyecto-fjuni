function movimientoDeMouseBody(e) {
    const body = document.getElementsByTagName('body')[0];
    body.addEventListener('mousemove', function (e) {
        const cursor = document.getElementById('cursor');
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = (e.clientY - 40) + 'px'; 
    });
}

function agregarMouseOver(event) {
    document.getElementById('cursor').classList.add('mini');
}

function agregarMouseOut(event) {
    document.getElementById('cursor').classList.remove('mini');
}

function agregarMovimiento(event) {
    for (let index = 0; index < document.getElementsByClassName('a').length; index++) {
        const elementoA = document.getElementsByClassName('a')[index];
        elementoA.addEventListener('mouseover', agregarMouseOver);
        elementoA.addEventListener('mouseout', agregarMouseOut);
    }
}

document.addEventListener("DOMContentLoaded", function(e) {
    movimientoDeMouseBody(e);
    agregarMovimiento(e);
});
function movimientoDeMouseBody() {
    const body = document.querySelector('body');
    body.addEventListener('mousemove', moverPosiciónCursor);
}

function moverPosiciónCursor(e) {
    const cursor = document.getElementById('cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = (e.clientY - 40) + 'px'; 
}

function agregarMouseOver() {
    document.getElementById('cursor').classList.add('mini');
}

function agregarMouseOut() {
    document.getElementById('cursor').classList.remove('mini');
}

function agregarMovimientoSobreBotones() {
    const botonesA = document.getElementsByClassName('a');
    for (let index = 0; index < botonesA.length; index++) {
        const botonA = botonesA[index];
        botonA.addEventListener('mouseover', agregarMouseOver);
        botonA.addEventListener('mouseout', agregarMouseOut);
    }
}
/* 
var i = 0;
var txt = document.getElementById("title-name").innerHTML;
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title-name").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
} */

movimientoDeMouseBody();
agregarMovimientoSobreBotones();
/* typeWriter(); */
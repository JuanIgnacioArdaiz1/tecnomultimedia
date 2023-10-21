//LINK AL VIDEO: https://www.youtube.com/watch?v=kX2kDFSlJ-M&ab_channel=NachoArdaiz

let juego;

function setup() {
  createCanvas(600, 400);
  juego = new Principal();
}

function draw() {
  juego.dibujar();

  if (keyIsPressed) {
    juego.MovimientoCerdito(keyCode);
  }
}

function mousePressed() {
  juego.TocoBoton();
}

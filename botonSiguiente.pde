void botonSiguiente() {

  if ( dist( mouseX, mouseY, width/2, 50) <= 35 ) {
    fill( 82, 240, 120 );
  } else {
    fill( colorAleatorio());
  }
  ellipse( width/2, 50, 70, 70 );
  fill(0);
  textSize(12);
  text("AVANZAR", width/2, 50);
}

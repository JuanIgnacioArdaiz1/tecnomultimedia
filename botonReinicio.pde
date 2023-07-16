 void botonReinicio(){
 
 if ( dist( mouseX, mouseY, width/2, 300) <= 50 ) {
    fill( 255, 0, 0 );
  } else {
    fill( 0, 0, 255 );
  }
  ellipse( width/2, 300, 100, 100 );
  fill(0);
  textSize(16);
  text("IR AL\n INICIO", width/2, 300);
}

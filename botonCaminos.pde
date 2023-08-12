 void botonCaminos(){
 
 if ( dist( mouseX, mouseY, 100, 270) <= 25 ) {
    fill( 255);
  } else {
    fill( colorAleatorio() );
  }
  ellipse( 100, 270, 50, 50 );
  fill(0);
  textSize(18);
  text("A", 100, 270);
  
  
 if ( dist( mouseX, mouseY, 240 , 260) <= 25 ) {
    fill( 255 );
  } else {
    fill( colorAleatorio() );
  }
  ellipse( 240, 260, 50, 50 );
  fill(0);
  textSize(18);
  text("B", 240, 260);
  
  if ( dist( mouseX, mouseY, 460 , 200) <= 25 ) {
    fill( 255 );
  } else {
    fill(colorAleatorio() );
  }
  ellipse( 460, 200, 50, 50 );
  fill(0);
  textSize(18);
  text("C", 460, 200);
}

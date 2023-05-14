//MOVIMIENTO

int posY;
int posX;


// IMAGENES---------------------------------------------------------------------------

PImage tuc1;
PImage tuc2;
PImage tuc3;
PImage tuc4;

//TIPOGRAFIA--------------------------------------------------------------------------------------

PFont fuente;

void setup() { 
  size(640, 480);
  posY = 250;


  //ASIGNACIÓN FUENTE
  fuente = createFont("Hertical Sans.ttf", 18);
  textFont(fuente);


  //ASIGNACION IMAGENES---------------------------------------------------------------

  tuc1 = loadImage("tucan1.png");
  tuc2 = loadImage("tucan2.png");
  tuc3 = loadImage("tucan3.jpg");
  tuc4 = loadImage("tucan4.jpg");
}


void draw() {


  //PRIMERA ESCENA----------------------------------------------------------------------------------------------------

  if (frameCount > 0  && frameCount <= 260 ) { 
    image(tuc1, 0, 0);
    text("Los tucanes son aves americanas,\n ampliamente distribuidas desde\n          Mexico hasta Argentina.", 287, posY);
    posY++;
  }



  //SEGUNDA ESCENA------------------------------------------------------------------------------------------------------


  if (frameCount > 260  && frameCount <= 780) { 
    image(tuc2, 0, 0);
    pushStyle();
    textSize(22);
    text(" Tienen plumas y picos de colores muy llamativos.\n Su pico es largo con una longitud aproximada\n                             de 20 cm.", 0, posY-500);
    posY++;
    popStyle();
  }


  //TERCERA ESCENA-----------------------------------------------------------------------------------------------------

  if (frameCount > 780 && frameCount <= 1300 ) {
    image(tuc3, 0, 0);
    pushStyle();
    textSize(18);
    text("Se alimentan de bayas, semillas y fruta madura mayormente,\n    ya que pasan la mayor parte de su vida en los arboles.", 15, posY-1000);
    posY++;
    popStyle();
  }

  //CUARTA ESCENA----------------------------------------------------------------------------------------------------------

  if (frameCount > 1300) {

    image(tuc4, 0, 0);

    //BOTON REINICIO
    pushStyle();
    if ( dist( mouseX, mouseY, width/2, height/2) <= 50 ) { 
      fill( 255, 255, 0 );
    } else 
    fill( 255, 142, 0 );
    ellipse( width/2, height/2, 100, 100 );
    popStyle();

    pushStyle();
    textSize(48);
    text("REINICIAR", 200, 340);
    text("PRESENTACION", 150, 390);
    popStyle();
  }
}
void mouseClicked() {

  if (dist( mouseX, mouseY, width/2, height/2) <= 50  && frameCount>1300) {
    frameCount= 0;
    posY = 250;
  }
}

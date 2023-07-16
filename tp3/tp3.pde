//DECLARACIÓN VARIABLES

String estado;

PImage [] imagenes = new PImage [20];


void setup() {

  size(600, 600);

  for (int i = 0; i< 20; i++) {
    imagenes[i] = loadImage(i+".png");
  }

  estado = "inicio";
}

void draw() {

  //PRIMERA PANTALLA
  if ( estado.equals("inicio") ) {

    image(imagenes[0], 0, 0);
    botonCreditos();
    botonSiguiente();
 
    
  } else if (estado.equals("segunda") ){;

  image(imagenes[1], 0, 0);
  textoEscena(20);
  text("ERASE UNA VEZ TRES CERDITOS QUE VIVIAN EN UN BOSQUE.\nCADA UNO DE ELLOS CONSTRUYÓ SU CASA.", 300, 560);

  botonSiguiente();
  
  
} else if ( estado.equals("tercera") ) {

  image(imagenes[2], 0, 0);
  textoEscena(18);
  text("HASTA QUE UN DÍA EL LOBO FEROZ Y HAMBRIENTO APARECIÓ", 300, 580);

  botonSiguiente();
} else if ( estado.equals("cuarta") ) {

  image(imagenes[3], 0, 0);
  textoEscena(20);
  text("Y SOPLÓ,\n SOPLÓ Y SOPLÓ", 130, 100);

  botonSiguiente();
} else if ( estado.equals("quinta") ) {

  image(imagenes[4], 0, 0);
  textoEscena(20);
  text("Y LA CASA DE\n PAJA VOLÓ", 130, 100);

  botonSiguiente();
} else if ( estado.equals("sexta") ) {

  image(imagenes[5], 0, 0);
  textoEscena(20);
  text("LUEGO FUE A LA CASA DEL SEGUNDO CHANCHITO", 300, 580);

  botonSiguiente();
} else if ( estado.equals("septima") ) {

  image(imagenes[6], 0, 0);
  textoEscena(20);
  text("Y SOPLO, SOPLÓ Y SOPLÓ", width/2, 580);

  botonSiguiente();
} else if ( estado.equals("octava") ) {

  image(imagenes[7], 0, 0);
  textoEscena(20);
  text("Y LA CASA DE MADERA VOLÓ", 400, 200);

  botonSiguiente();
} else if ( estado.equals("novena") ) {

  image(imagenes[8], 0, 0);
  textoEscena(20);
  text("POR ULTIMO, FUE A\n LA CASA DEL\n ULTIMO CERDITO", 170, 120);

  botonSiguiente();
} else if ( estado.equals("decima") ) {

  image(imagenes[9], 0, 0);
  textoEscena(20);
  text("Y SOPLÓ,\n SOPLÓ Y SOPLÓ", 150, 100);

  botonSiguiente();
} else if ( estado.equals("onceava") ) {

  image(imagenes[10], 0, 0);
  textoEscena(20);
  text("PERO LA CASA DE\n LADRILLO INTACTA QUEDÓ", 205, 140);

  botonSiguiente();
} else if ( estado.equals("doceava") ) {

  image(imagenes[11], 0, 0);
  textoEscena(20);
  text("EL LOBO NO SE RINDIÓ, Y UNA GRAN IDEA SE LE OCURRIÓ", 300, 560);

  botonSiguiente();
} else if ( estado.equals("treceava") ) {

  image(imagenes[12], 0, 0);
  textoEscena(20);
  text("SUBIÓ AL TECHO Y POR LA CHIMENEA SE COLÓ", 300, 200);

  botonSiguiente();
} else if ( estado.equals("catorce") ) {

  image(imagenes[13], 0, 0);
  textoEscena(20);
  text("PERO EN EL AGUA HIRVIENDO CAYÓ", 300, 560);

  botonSiguiente();
} else if ( estado.equals("quince") ) {

  image(imagenes[14], 0, 0);
  textoEscena(20);
  text("Y EL LOBO FEROZ\n POR LOS AIRES VOLÓ", 150, 350);

  botonSiguiente();
} else if ( estado.equals("dieciseis") ) {

  image(imagenes[15], 0, 0);
  textoEscena(20);
  text("HASTA QUE EN\n EL BOSQUE ATERRIZÓ", 150, 350);

  botonReinicio();
} else if ( estado.equals("diecisiete") ) {

  image(imagenes[16], 0, 0);
  textoEscena(20);
  text("Y LE VOLÓ LA CASA AL CHOTO", 300, 560);

  botonSiguiente();
} else if ( estado.equals("dieciocho") ) {

  image(imagenes[17], 0, 0);
  textoEscena(20);
  text("Y LE VOLÓ LA CASA AL CHOTO", 300, 560);

  botonSiguiente();
} else if ( estado.equals("diecinueve") ) {

  image(imagenes[18], 0, 0);
  textoEscena(20);
  text("Y LE VOLÓ LA CASA AL CHOTO", 300, 560);

  botonSiguiente();
} else if ( estado.equals("veinte") ) {

  image(imagenes[19], 0, 0);
  textoEscena(20);
  text("Y LE VOLÓ LA CASA AL CHOTO", 300, 560);

  botonSiguiente();
  
  
}else if ( estado.equals("creditos") ){
 image(imagenes[19], 0, 0);
 textoEscena(20);
 text("¨LOS TRES CERDITOS¨ - ANONIMO\n HECHO POR JUAN IGNACIO ARDAIZ\n LEGAJO 91404/8 \n COMISION 2 - MATIAS JAUREGUI LORDA\nDISEÑO MULTIMEDIAL FDA UNLP", 380, 500);
 botonVolver();

}


}

void mousePressed() {

  if (estado.equals("inicio") && dist( mouseX, mouseY, width/2, 50) <= 35 ) {
    estado = "segunda";
  }else if (estado.equals("inicio") && dist( mouseX, mouseY, 200, 50) <= 35 ) {
    estado = "creditos";
  }else if (estado.equals("creditos") && dist( mouseX, mouseY, width/2, 50) <= 35){
    estado = "inicio";
  } else if (estado.equals("segunda") && dist( mouseX, mouseY, width/2, 50) <= 35) {
    estado = "tercera";
  } else if (estado.equals("tercera") && dist( mouseX, mouseY, width/2, 50) <= 35) {
    estado = "cuarta";
  } else if (estado.equals("cuarta") && dist( mouseX, mouseY, width/2, 50) <= 35) {
    estado = "quinta";
  } else if (estado.equals("quinta") && dist( mouseX, mouseY, width/2, 50) <= 35) {
    estado = "sexta";
  } else if (estado.equals("sexta") && dist( mouseX, mouseY, width/2, 50) <= 35) {
    estado = "septima";
  } else if (estado.equals("septima") && dist( mouseX, mouseY, width/2, 50) <= 35) {
    estado = "octava";
  } else if (estado.equals("octava") && dist( mouseX, mouseY, width/2, 50) <= 35) {
    estado = "novena";
  } else if (estado.equals("novena") && dist( mouseX, mouseY, width/2, 50) <= 35) {
    estado = "decima";
  } else if (estado.equals("decima") && dist( mouseX, mouseY, width/2, 50) <= 35) {
    estado = "onceava";
  } else if (estado.equals("onceava") && dist( mouseX, mouseY, width/2, 50) <= 35) {
    estado = "doceava";
  } else if (estado.equals("doceava") && dist( mouseX, mouseY, width/2, 50) <= 35) {
    estado = "treceava";
  } else if (estado.equals("treceava") && dist( mouseX, mouseY, width/2, 50) <= 35) {
    estado = "catorce";
  } else if (estado.equals("catorce") && dist( mouseX, mouseY, width/2, 50) <= 35) {
    estado = "quince";
  } else if (estado.equals("quince") && dist( mouseX, mouseY, width/2, 50) <= 35) {
    estado = "dieciseis";
  } else if (estado.equals("dieciseis") && dist( mouseX, mouseY, width/2, 50) <= 35) {
    estado = "diecisiete";
  } else if (estado.equals("diecisiete") && dist( mouseX, mouseY, width/2, 50) <= 35){
    estado = "dieciocho";
  } else if (estado.equals("dieciseis") && dist ( mouseX, mouseY, width/2, 100) <= 50) {
    estado = "inicio";
  }
  
}

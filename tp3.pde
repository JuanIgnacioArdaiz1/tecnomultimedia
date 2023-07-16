//ARDAIZ, JUAN IGNACIO - 91404/8 
// TP3 TECNO MULTIMEDIA - COMISION 2 MATIAS JAUREGUI LORDA - FDA UNLP

//LINK AL VIDEO: https://www.youtube.com/watch?v=uttUVhcA0iM&ab_channel=NachoArdaiz

//DECLARACIÓN VARIABLES

String estado;

PImage [] imagenes = new PImage [21];


void setup() {

  size(600, 600);

  for (int i = 0; i<21; i++) {
    imagenes[i] = loadImage(i+".png");
  }

  estado = "inicio";
}

void draw() {

  //PRIMERA PANTALLA - ACCESO A CREDITOS E INICIAR LA HISTORIA------------------------------------------------
  if ( estado.equals("inicio") ) {

    image(imagenes[0], 0, 0);
    botonCreditos();
    botonSiguiente();

    
  //CREDITOS------------------------------------------------------------------------------------------------

}else if ( estado.equals("creditos") ){
 image(imagenes[20], 0, 0);
 textoEscena(20);
 text("¨LOS TRES CERDITOS¨ - ANONIMO\n HECHO POR JUAN IGNACIO ARDAIZ\n LEGAJO 91404/8 \n COMISION 2 - MATIAS JAUREGUI LORDA\nDISEÑO MULTIMEDIAL FDA UNLP", 380, 500);
 botonVolver();


  //ELECCION DEL USUARIO DE QUE CASA ATACAR-------------------------------------------------------------
} else if (estado.equals("uno") ){;
  image(imagenes[1], 0, 0);
  textoEscena(20);
  text("ERES UN LOBO FEROZ HAMBRIENTO.\n CADA CERDITO CONSTRUYÓ SU CASA.\n ESCOGE CUAL ATACAR", 250, 550); 
  botonCaminos();
  
 
 //PRIMER FINAL (C) ----------------------------------------------------------------------------------
} else if ( estado.equals("dos") ) {
  image(imagenes[2], 0, 0);
  textoEscena(18);
  text("BUENA ELECCIÓN, LA DE PAJA PARECE DÉBIL", 300, 580);  
  botonSiguiente();
  
  
} else if ( estado.equals("tres") ) {
  image(imagenes[3], 0, 0);
  textoEscena(20);
  text("Y SOPLÉ,\n SOPLÉ Y SOPLÉ", 130, 100); 
  botonSiguiente();
  
  
} else if ( estado.equals("cuatro") ) {
  image(imagenes[4], 0, 0);
  textoEscena(20);
  text("Y LA CASA DE\n PAJA VOLÉ", 130, 100); 
  botonSiguiente();
  
  
} else if ( estado.equals("cinco") ) {
  image(imagenes[5], 0, 0);
  textoEscena(20);
  text("NO SOLO VOLÉ LA CASA...", 300, 550);
  botonReinicio();
  
  
  
  
  //SEGUNDO FINAL (B) -------------------------------------------------------------------------------------
} else if ( estado.equals("seis") ) {

  image(imagenes[6], 0, 0);
  textoEscena(18);
  text("MMM MADERA, PUEDE COSTAR UN POCO PERO NO ES IMPOSIBLE", width/2, 580);
  botonSiguiente();
  
} else if ( estado.equals("siete") ) {

  image(imagenes[7], 0, 0);
  textoEscena(20);
  text("Y SOPLÉ, SOPLÉ Y SOPLÉ", width/2, 580);
  botonSiguiente();
  
  
} else if (estado.equals("ocho")  ) {
  
  image(imagenes [8], 0, 0);
  textoEscena(20);
  text(" Y LA CASA DE MADERA VOLÉ", 400, 200);  
  botonSiguiente();
  
} else if (estado.equals("nueve")  ) {
  
  image(imagenes [9], 0, 0);
  textoEscena(20);
  text("LOS CERDITOS SOBREVIVIERON Y\nFUERON EN BUSCA DE AYUDA", 300, 450);
  botonSiguiente();
  
}else if (estado.equals("diez") ) {
  
  image(imagenes [10], 0, 0);
  textoEscena(20);
  text( "SE REUNIERON EN EL BOSQUE Y\nPLANEARON SU VENGANZA", width/2, 500);
  botonSiguiente();


} else if (estado.equals("once") ) {
  
  image(imagenes [11], 0, 0);
  botonReinicio();
  
  
  
  //TERCER FINAL (A)
} else if ( estado.equals("doce") ) {

  image(imagenes[12], 0, 0);
  textoEscena(20);
  text("CASA DE LADRILLO.\n PARECE SÓLIDA Y RESISTENTE", 170, 120);
  botonSiguiente();
  
  
} else if ( estado.equals("trece") ) {

  image(imagenes[13], 0, 0);
  textoEscena(20);
  text("Y SOPLÉ,\n SOPLÉ Y SOPLÉ", 150, 100);
  botonSiguiente();
  
  
} else if ( estado.equals("catorce") ) {

  image(imagenes[14], 0, 0);
  textoEscena(20);
  text("NADA. ES UNA MISIÓN DIFICIL.", 205, 140);
  botonSiguiente();
  
  
} else if ( estado.equals("quince") ) {

  image(imagenes[15], 0, 0);
  textoEscena(20);
  text("NO ME VOY A RENDIR, TENGO UNA IDEA", 300, 560);
  botonSiguiente();
  
  
} else if ( estado.equals("dieciseis") ) {

  image(imagenes[16], 0, 0);
  textoEscena(20);
  text("ME COLARÉ POR AQUÍ Y LOS\nAGARRARÉ DE SORPRESA", 300, 200);
  botonSiguiente();
  
  
} else if ( estado.equals("diecisiete") ) {

  image(imagenes[17], 0, 0);
  textoEscena(20);
  text("AAAAYYYYYY", 300, 560);
  botonSiguiente();
  
} else if ( estado.equals("dieciocho") ) {

  image(imagenes[18], 0, 0);
  botonSiguiente();
  
  
} else if ( estado.equals("diecinueve") ) {

  image(imagenes[19], 0, 0);
  botonReinicio();
  
  
} 
  
}

void mousePressed() {

 //PANTALLA DE SELECCION-------------------------------------------------------------------------------------------------------------------------
  if (estado.equals("inicio") && dist( mouseX, mouseY, width/2, 50) <= 35 ) {
    estado = "uno";
   
  //CREDITOS-------------------------------------------------------------------------------------------------------------------------------------
  }else if (estado.equals("inicio") && dist( mouseX, mouseY, 200, 50) <= 35 ) {
    estado = "creditos";
  }else if (estado.equals("creditos") && dist( mouseX, mouseY, width/2, 50) <= 35){
    estado = "inicio";
  
  
  //PRIMER FINAL (C)-----------------------------------------------------------------------------------------------------------------------------
  
  } else if (estado.equals("uno") && dist( mouseX, mouseY, 460, 200) <= 25) {
    estado= "dos";
  } else if (estado.equals("dos") && dist( mouseX, mouseY, width/2, 50) <= 35) {
    estado = "tres";
  } else if (estado.equals("tres") && dist( mouseX, mouseY, width/2, 50) <= 35) {
    estado = "cuatro";
  } else if (estado.equals("cuatro") && dist( mouseX, mouseY, width/2, 50) <= 35) {
    estado = "cinco";
  } else if (estado.equals("cinco") && dist( mouseX, mouseY, width/2, 300) <= 50) {
    estado = "inicio";

    
  //SEGUNDO FINAL (B)-----------------------------------------------------------------------------------------------------------------------------
    
  } else if (estado.equals("uno") && dist( mouseX, mouseY, 240, 260) <= 25) {
    estado = "seis";
  } else if (estado.equals("seis") && dist( mouseX, mouseY, width/2, 50) <= 35) {
    estado = "siete";
  } else if (estado.equals("siete") && dist( mouseX, mouseY, width/2, 50) <= 35) {
    estado = "ocho";
  } else if (estado.equals("ocho") && dist( mouseX, mouseY, width/2, 50) <= 35) {
    estado = "nueve";
  } else if (estado.equals("nueve") && dist( mouseX, mouseY, width/2, 50) <= 35) {
    estado = "diez";
  } else if (estado.equals("diez") && dist( mouseX, mouseY, width/2, 50) <= 35) {
    estado = "once"; 
  } else if (estado.equals("once") && dist( mouseX, mouseY, width/2, 300) <= 50) {
    estado = "inicio";   
    
    
    
  //TERCER FINAL (A)------------------------------------------------------------------------------------------------------------------------------
  
  } else if (estado.equals("uno") && dist( mouseX, mouseY, 100, 270) <= 25) {
    estado = "doce";
  } else if (estado.equals("doce") && dist( mouseX, mouseY, width/2, 50) <= 35) {
    estado = "trece";
  } else if (estado.equals("trece") && dist( mouseX, mouseY, width/2, 50) <= 35){
    estado = "catorce";
  } else if (estado.equals("catorce") && dist ( mouseX, mouseY, width/2, 50) <= 35) {
    estado = "quince";
  } else if(estado.equals("quince") && dist (mouseX, mouseY, width/2, 50) <= 35){
    estado = "dieciseis";  
  } else if( estado.equals("dieciseis") && dist (mouseX, mouseY, width/2, 50) <= 35){
    estado = "diecisiete";
  } else if (estado.equals("diecisiete") && dist ( mouseX, mouseY, width/2, 50) <= 35) {
    estado = "dieciocho";
  } else if (estado.equals("dieciocho") && dist (mouseX, mouseY, width/2, 50) <= 35) {
    estado = "diecinueve";
  } else if (estado.equals("diecinueve") && dist (mouseX, mouseY, width/2, 300) <=50) {
    estado = "inicio";

}

}




//OPCION QUE INTENTÉ HACER CON FUNCIONES CON PARAMETROS Y NO ME SALIÓ (SI PUDIERAN INDICARME QUE HICE MAL SE AGRADECE)! <3


  //CREDITOS-----------------------------------------------------
  
  //estadoBotones("inicio", 200, 50, 35, "creditos");
  //estadoBotones("creditos", width/2, 50, 35, "inicio");
  
  
  ////PRIMER FINAL (C)----------------------------------------------
  
  //estadoBotones("inicio", width/2, 50, 35, "uno");
  //estadoBotones("uno", 460, 200, 25, "dos");
  //estadoBotones("dos", width/2, 50, 35, "tres");
  //estadoBotones("tres", width/2, 50, 35, "cuatro");  
  //estadoBotones("cuatro", width/2, 50, 35, "cinco");
  
  ////SEGUNDO FINAL (B)------------------------------------------------
  
  //estadoBotones("inicio", 240, 260, 25, "seis");
  //estadoBotones("seis", width/2, 50, 35, "siete");
  //estadoBotones("siete", width/2, 50, 35, "ocho");
  //estadoBotones("ocho", width/2, 50, 35, "nueve");
  //estadoBotones("nueve", width/2, 50, 35, "diez");
  //estadoBotones("diez", width/2, 50, 35, "once");

  
  
  ////TERCER FINAL (A)------------------------------------------------
  
  //estadoBotones("uno", 100, 270, 25, "doce");
  //estadoBotones("doce", width/2, 50, 35, "trece");
  //estadoBotones("trece", width/2, 50, 35, "catorce");
  //estadoBotones("catorce", width/2, 50, 35, "quince");
  //estadoBotones("quince", width/2, 50, 35, "dieciseis");
  //estadoBotones("dieciseis", width/2, 50, 35, "diecisiete");
  //estadoBotones("diecisiete", width/2, 50, 35, "dieciocho");
  //estadoBotones("dieciocho", width/2, 50, 35, "diecinueve");
  
  
  
  
  ////REINICIO------------------------------------------------
  
  //estadoBotones("seis", width/2, 200, 50, "inicio");
  //estadoBotones("veinte", width/2, 200, 50, "inicio");
  

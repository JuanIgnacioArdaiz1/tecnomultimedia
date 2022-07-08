
import ddf.minim.*;

Minim minim;
AudioPlayer player;


//DECLARACIÓN VARIABLES
int distancia= 600;  //cantidad de clics para ganar
String estado;
int tiempo;
int posX = 0;

//VARIABLE FUENTE
PFont fifa;

//ARREGLOS
PImage [] imagenes = new PImage [6];

//VARIABLES IMAGENES
PImage firma;
PImage diegocorriendo;
PImage copamundo;
PImage bandera;


void setup() {

  size(800, 600 );
  textAlign( CENTER, CENTER );
  
  for(int i = 0; i< 6; i++){
   imagenes[i] = loadImage(i+".jpg"); 
  }

  estado = "inicio";


  //ASIGNACIÓN VARIABLES DE IMAGEN PNG Y FUENTE
  firma = loadImage("firma.png");
  fifa = createFont("fifa.ttf", 28);
  diegocorriendo = loadImage("diegocorriendo.png");
  copamundo = loadImage("copamundo.png");
  bandera = loadImage("bandera.png");

  //MÚSICA - LIVE IS LIFE
  //OJO QUE SE ESCUCHA FUERTE
  minim = new Minim(this);
  player = minim.loadFile("cancion.wav");
}

void draw() {

   if(frameCount > 0){
    player.play();
  }


  //INICIO DEL JUEGO
  if ( estado.equals("inicio") ) {
    image(imagenes[0], 0, 0, 800, 600);
    textFont(fifa);
    fill(119, 220, 245);
    noStroke();
    rect(170, 37, 460, 30);
    fill(255);
    text( "presione '1' para ir a instrucciones", width/2, 50 ); 
    fill(255);
    rect(170, 87, 445,30);
    fill(119,220,245);
    text( "presione '2' para ir a los creditos", width/2-10, 100);
   

  //CREDITOS
  } else if(estado.equals("creditos")){
   creditos();
  
  
    //INSTRUCCIONES
  }else if ( estado.equals("instrucciones") ) {
    image(imagenes[1], 0, 0, 800, 600);
    fill(119, 220, 245 );
    rect(100, 37, 200, 30);
    fill(255);
    text( estado, 200, 50 );  
    pushStyle();
    textSize(26);
    text("¡Logra que Maradona alcance\nla Copa del Mundo!", 190, 150);
    textSize(30);
    fill(119, 220, 245);
    text("AVANZA HACIENDO CLICK\nY LLEGA ANTES DE QUE\n SE ACABE EL TIEMPO", 190, 300);
    popStyle();
    pushStyle();
    textSize(20);
    text("click en el boton para jugar", 205, 450);
    popStyle();
    textSize(24);
    fill(244, 252, 15);
    text("BUENA SUERTE!", 100, 570);

    //
    //BOTON PARA INICIAR EL JUEGO
    pushStyle();
    if ( dist( mouseX, mouseY, 200, 500) <= 25 ) {
      fill( 119, 220, 245 );
    } else {
      fill( 255 );
    }
    ellipse( 200, 500, 50, 50 );
    popStyle();


    //JUGANDO
  } else if ( estado.equals("jugando") ) {


    image(imagenes[2], 0, 0, 800, 600);
    image(diegocorriendo, posX, 240, 120, 100 );
    image(copamundo, 700, 230, 100, 120);   
    
    //ESTO SE TIENE QUE CUMPLIR PARA GANAR
    if(posX >= distancia) {
      estado = "ganar";
    }
    
    //ESTO SE TIENE QUE CUMPLIR PARA PERDER
    tiempo++;
    if(tiempo >= 5*40 ) {
      estado = "perder";
    }
    //--------------------------------------------
  } else if ( estado.equals("ganar") ) {
    image(imagenes[3], 0, 0, 800, 600);
    noStroke();
    fill(105, 250, 246 );
    rect(22, 200, 250, 100);
    fill(255);
    rect(15, 60, 330, 75);
    textSize(80);
    fill(105, 250, 246 );
    text("GANASTE", 180, 90);
    fill(255);
    textSize(30);
    text("PRESIONA 'R' PARA\nVOLVER AL INICIO", 150, 250 );


    //
  } else if ( estado.equals("perder") ) {
    image(imagenes[4], 0, 0, 800, 600);
    noStroke();
    fill(0 );
    rect(275, 505, 250, 100);
    fill(255);
    textSize(80);
    fill(255, 0, 0 );
    text("PERDISTE", 400, 30);
    fill(255, 0, 0);
    textSize(30);
    text("PRESIONA 'R' PARA\nVOLVER AL INICIO", 400, 550 );
    //
  }
}

void keyPressed() {
  

  //CAMBIO DE INICIO A INSTRUCCIONES TOCANDO 1
  if(estado.equals("inicio") && key == '1') {       
    estado = "instrucciones";
  }
  
  
  //GANANDO O PERDIENDO SE REINICIA MEDIANTE LA FUNCION PROPIA DE REINICIAR
  if(keyCode == 'R'  || key == 'r') {
    if(estado.equals("perder") || estado.equals("ganar")){
      reiniciar();
    }
  }
  
  //CAMBIO DE INICIO A CREDITOS TOCANDO 2
  if(estado.equals("inicio") && key == '2') {
  estado = "creditos";
  }
  
  //CAMBIO DE CREDITOS A INICIO TOCANDO 3
  if(estado.equals("creditos") && key == '3'){
    estado = "inicio";
  }
  
  
}

void mousePressed() {
  
//CAMBIO DE INSTRUCCE

if(estado.equals("instrucciones") && dist( mouseX, mouseY, 200, 500) <= 25 ) {
    estado = "jugando";
  }
  posX = posX+20;
}

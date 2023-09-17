//LINK AL VIDEO: https://youtu.be/TYwkEJbbQgU


//DECLARACIÓN VARIABLES

let distancia= 800;
let estadoActual = "inicio";
let vida = 3; // Vidas
let x1, y1, x2, y2;
let pelotas = [];



//VARIABLE FUENTE
let fifa;


//VARIABLES IMAGENES
let cero;
let uno;
let dos;
let tres;
let cuatro;
let cinco;
let messicorriendo;
let copamundo;
let pelota;

function preload() {
  
//ASIGNACIÓN VARIABLES DE IMAGEN PNG Y FUENTE
  cero = loadImage('assets/cero.jpg');
  uno = loadImage('assets/uno.jpg');
  dos = loadImage('assets/dos.jpg');
  tres = loadImage('assets/tres.jpg');
  cuatro = loadImage('assets/cuatro.jpg');
  cinco = loadImage('assets/cinco.jpg');
  messicorriendo = loadImage('assets/messicorriendo.png');
  copamundo = loadImage('assets/copamundo.png');
  pelota = loadImage('assets/pelota.png');
  fifa = loadFont('assets/fifa.ttf');

  
  }

function setup() {
  createCanvas(800, 600);
  textAlign( CENTER, CENTER );
  textFont(fifa);

 
  estadoActual = "inicio";

  x2 = random(width); // Inicializa la posición de las pelotas
  y2 = random(height);

  //CICLO FOR PARA QUE APAREZCAN MUCHAS PELOTAS EN PANTALLA
  for (let i = 0; i < 20; i++) {
    let x = random(110, width-110);
    let y = random(height);
    pelotas.push({ x, y });
  }


}

function draw() {

  //MANEJO DE LA IMAGEN DE MESSI CON EL MOUSE
  x1 = mouseX;
  y1= mouseY;



  //INICIO DEL JUEGO
  if (estadoActual === "inicio") {
    image(cero, 0, 0, 800, 600);
  
    fill(119, 220, 245);
    noStroke();
    rect(170, 37, 460, 30);
    fill(255);
    text( "PRESIONE 1 PARA IR A INSTRUCCIONES", width/2, 50 ); 
    fill(255);
    rect(170, 87, 445,30);
    fill(119,220,245);
    text( "PRESIONE 2 PARA IR A LOS CREDITOS", width/2-10, 100);
   

  //CREDITOS
  } else if(estadoActual === "creditos"){
   creditos();
  
  
    //INSTRUCCIONES
  }else if ( estadoActual === "INSTRUCCIONES" ) {
    image(uno, 0, 0, 800, 600);
    fill(119, 220, 245 );
    rect(100, 37, 200, 30);
    fill(255);
    text( estadoActual, 200, 50 );  
    textSize(26);
    text("¡Ayuda a Lionel a ganar el Mundial!", 200, 130);
    fill(119, 220, 245);
    textSize(20);
    text("¡ESQUIVA LAS PELOTAS PARA", 200, 180);
    text("NO PERDER VIDAS!", 200, 200);
    fill(255);
    text("CLICK EN EL BOTÓN PARA JUGAR", 170, 350);
    textSize(24);
    fill(244, 252, 15);
    text("BUENA SUERTE!", 670, 570);

    //BOTON PARA INICIAR EL JUEGO
    if ( dist( mouseX, mouseY, 50, height/2) <= 25 ) {
      fill( 119, 220, 245 );
    } else {
      fill( 255 );
    }
    ellipse( 50 , height/2, 50, 50 );

    //JUGANDO
  } else if ( estadoActual === "jugando" ) {


    image(dos, 0, 0, 800, 600);
    push();
    imageMode(CENTER)
    for (let i = 0; i < pelotas.length; i++) {
      let pelotaPos = pelotas[i];
      image(pelota, pelotaPos.x, pelotaPos.y, 50, 50);
    }
    image(messicorriendo, x1, y1, 100, 120 ); 
    for (let i = 0; i < pelotas.length; i++) {
      let pelotaPos = pelotas[i];
      let colision = dist(x1, y1, pelotaPos.x, pelotaPos.y);
      if (colision < 75) { //DISTANCIA Q TIENE Q HABER ENTRE MESSI Y LAS PELOTAS PARA COLISIONAR
        vida = vida - 1; //REDUCCION DE 1 VIDA POR CADA COLISION 
        pelotaPos.x = random(110,width-110); //REUBICACIÓN DE CADA PELOTA EN LA PANTALLA UNA VEZ COLISIONADA
        pelotaPos.y = random(height);
      }
    }
    pop()
    image(copamundo, 700, 230, 100, 120);  
    

      textSize(50);
      fill(255, 255, 0);
      text("VIDAS:", 120, 50)
      text(vida, 220, 50);
      

      
//CONDICION PARA PERDER: SI SE ACABAN LAS VIDAS 
      if (vida == 0) {
        estadoActual = "perder";
      }

//CONDICION PARA GANAR: QUE LA POSICION EN X DE MESSI SEA MAYOR A LA VARIABLE DISTANCIA (800, WIDTH DE LA PANTALLA)
      if(x1 >= distancia) {
        estadoActual = "ganar";
      }
    
//PANTALLA DE GANAR
  } else if ( estadoActual === "ganar" ) {
    image(tres, 0, 0, 800, 600);
    textSize(40);
    fill(105, 250, 246 );
    text("¡SOS CAMPEON DEL MUNDO!", 400, 200);
    fill(0, 255, 0);
    textSize(30);
    text("PRESIONA '4' PARA VOLVER AL INICIO", 400, 550 );


    //PANTALLA DE PERDER
  } else if ( estadoActual === "perder" ) {
    image(cuatro, 0, 0, 800, 600);
    fill(255);
    textSize(40);
    fill(255,255,0 );
    text("PERDISTE LA FINAL CON ALEMANIA", 400, height/2);
    fill(255, 0, 0);
    textSize(30);
    text("PRESIONA '4' PARA VOLVER AL INICIO", 400, 550 );
    //
  }
}

function keyPressed() {
  
  
  //CAMBIO DE INICIO A INSTRUCCIONES TOCANDO 1
  if((estadoActual === "inicio") && key === '1') {       
    estadoActual = "INSTRUCCIONES"; 
  }
  
  
  //GANANDO O PERDIENDO SE REINICIA MEDIANTE LA FUNCION PROPIA DE REINICIAR
  if ((estadoActual === "ganar" || estadoActual === "perder") && key == '4') {
    reiniciar();
}
  
  
  //CAMBIO DE INICIO A CREDITOS TOCANDO 2
  if(estadoActual === "inicio" && key == '2') {
  estadoActual = "creditos";
  }
  
  //CAMBIO DE CREDITOS A INICIO TOCANDO 3
  if(estadoActual === "creditos" && key == '3'){
    estadoActual = "inicio";
  }
  
}


function mouseClicked() {
  
//CAMBIO DE INSTRUCCIONES A JUGANDO MEDIANTE EL BOTON CREADO ANTERIORMENTE

if(estadoActual === "INSTRUCCIONES" && dist( mouseX, mouseY, 50, height/2) <= 25 ) {
    estadoActual = "jugando";
  }
}


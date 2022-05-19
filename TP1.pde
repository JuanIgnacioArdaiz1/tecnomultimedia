import ddf.minim.*;

Minim minim;
AudioPlayer player;

//DECLARACIÓN VARIABLES-----------------------------------------------------------------------------------------

PFont edo;
PImage logo;

void setup(){ //-------------------------------------------------------------------------------------------------
  
  size(1000,500); 
  smooth();
  frameRate(30);
  textMode(CENTER);
  
  //ASIGNACIÓN DE VARIABLES---------------------------------------------------------------------------------------
  
  logo = loadImage("marginal.png.png");
  edo = createFont("edosz.ttf", 64);
  minim = new Minim(this);
  player = minim.loadFile("cancion.wav");

  
 }

void draw(){ //-----------------------------------------------------------------------------------------------------

  background(0);

  //MUSICA--------------------------------------------------------------------------------------------------------
  
  if(frameCount > 0){
    player.play();
  }
  
  //PRIMERA ESCENA----------------------------------------------------------------------------------------------------

if(frameCount > 20 && frameCount < 300){
  image(logo, 250, 110, 500, 210);
  
} 
  
if(frameCount > 40 && frameCount < 300){
  textFont(edo);
  textSize(random(70, 100));
  fill(157, 89, 97);
  text("5", 475, 350);
}
  if(frameCount > 60 && frameCount < 300){;
  fill(255);
  textSize(60);
  text("ÚLTIMA", 260, 450, 24);
}

if(frameCount > 80 && frameCount < 300){;
  fill(255);
  textSize(60);
  text("TEMPORADA", 455, 450, 24);
}
  
//SEGUNDA ESCENA------------------------------------------------------------------------------------------------------


  if(frameCount > 310 && frameCount < 450){
  textSize(48);
  text("CREADO Y PRODUCIDO POR\n     SEBASTIÁN ORTEGA", 260, 220);
  }
  
  //TERCERA ESCENA-----------------------------------------------------------------------------------------------------
  
  if(frameCount >460 && frameCount < 600){
  fill(157, 89, 97);
  textSize(30);
  text("DIRECCIÓN SEGUNDA UNIDAD", 340, 200);
  fill(255);
  textSize(48);
  text("MARIANO ARDANAZ", 320, 270);
  text("EDUARDO RIPARI", 350, 330);
  
  }
  
  
//CUARTA ESCENA----------------------------------------------------------------------------------------------------------

  if(frameCount > 605 && frameCount < 750){
    fill(157, 89, 97);
    textSize(30);
    text("ELENCO PROTAGÓNICO", 360, 80);
    
    textFont(edo);
    textSize(48);
    fill(255);
    text("JUAN MINUJÍN", 150, 240);
    text("NICOLÁS FURTADO", 150, 300);
    text("CLAUDIO RISSI", 150, 360);
    text("GERARDO ROMANO", 150, 420);

    fill(157, 89, 97);
    textSize(30);
    text("'MIGUEL'", 700, 230);
    text("'DIOSITO'", 700, 295);
    text("'BORGES'", 700, 355);
    text("'ANTÍN'", 700, 420);
  }
  
    
    //QUINTA ESCENA-----------------------------------------------------------------------------------------------
    if(frameCount >755 && frameCount< 900){;
    fill(157, 89, 97);
    textSize(30 );
    text("ELENCO SECUNDARIO", 370, 80);
    fill(255);
    textSize(48);
    text("DANIEL PACHECO", 150, 240);
    text("ARIEL STALTARI", 150, 300);
    text("ANA GARIBALDI", 150, 360);
    text("ABEL AYALA", 150, 420);
    
    fill(157, 89, 97);
    textSize(30);
    text("'JAMES'", 700, 230);
    text("'BARDO'", 700, 290);
    text("'GLADYS'", 700, 355);
    text("'CÉSAR'", 700, 420);
    }
    
    //SEXTA ESCENA------------------------------------------------------------------------------------------------------
    if(frameCount >905 && frameCount< 1050){
    textSize(30);
    fill(157, 89, 97);
    text("TEMA MUSICAL ORIGINAL", 355, 50);
    text("INCLUSIÓN MUSICAL", 390, 300);
    fill(255);
    textSize(40);
    text("'PINTA'", 450, 100);
    textSize(38);
    text("L-GANTE - PABLO LESCANO - BIZARRAP", 200, 150);
    text("(DALE PLAY RECORDS)", 340, 200);
    textSize(40);
    text("'LA OTRA CIUDAD'", 360, 350);
    text("ÉL MATÓ A UN POLICIA MOTORIZADO", 200, 400);
    textSize(30);
    text("DISCOGRÁFICA/FONOGRAMA: LAPTRA - SANTIAGO BARRIONUEVO", 100, 470);
    }
    
    //BOTÓN DE REINICIO---------------------------------------------------------------------------------------------------------
    if(frameCount> 1060){;
    fill( 157, 89, 97);
    circle(500, 250, 200);
    fill(0);
    textSize(30);
    text("CLICK PARA\n REINICIAR\n CRÉDITOS", 435, 220);
    }
    
    }
    
    void mouseClicked(){ //----------------------------------------------------------------------------------------------------
 
      float d1 = dist(mouseX, mouseY, 500, 250);
      int r1 = 200/2;
      if( d1<r1);{
      frameCount= 0;
      }
      
    
    }
    
    

    
    
   

    
    
    
    
    
    
    
    
    
    
 
  
  
  
  


 




  

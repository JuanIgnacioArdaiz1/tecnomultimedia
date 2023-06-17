// ARDAIZ, JUAN IGNACIO - 91404/8

//VIDEO: https://www.youtube.com/watch?v=yLE6wCUdMu4&ab_channel=NachoArdaiz

//DECLARACIÓN DE MIS VARIABLES---------------------------------------------------------------------

int cant= 14; //DECLARADA Y ASIGNADA-----------------------------------------------------------
int tam;
PImage ilu;

void setup(){
size (800,400);
cursor(CROSS);  

//ASIGNACIÓN DE MIS VARIABLES---------------------------------------------------------------------

tam=width/cant;
ilu= loadImage("ilusion.png");

}
void draw (){
  
background(0); 
  
  //CUADRADOS E INTERACCION CON EL MOUSE VARIANDO EL COLOR------------------------------------------
for (int i=0; i<cant; i++){
   for (int j=0; j<cant; j++){
        float d = dist(mouseX, mouseY, i+tam, j+tam);
        float t = d*255/dist(width, height, 0,0);
        if((i+j)%2==0) {
        fill(0, 0, 255, t);
        rect(i*tam,j*tam,tam,tam);
       }else {
       fill(0, 0, 200, t);
       stroke(160);
       strokeWeight(6);
       rect(i*tam,j*tam,tam,tam);
}
}
}
  //CIRCULITOS ENTRE LOS CUADRADOS - FUNCIÓN PROPIA--------------------------------------------------------------
  circulosIlusion();
  
  //EJEMPLO UTILIZADO
image(ilu, width/2, 0);
  
  //LINEA SEPARADORA
 pushStyle();
strokeWeight(30);
stroke(255,0,0);
line(width/2, 0, width/2, 400);
popStyle();
}


void keyPressed() { //AL PRESIONAR CUALQUIER TECLA LA VARIABLE CANT VUELVE A 0--------------------------------
  cant = 0; 
}

void mousePressed(){ //AL CLICKEAR AUMENTA LA CANTIDAD DE CUADRADOS Y CIRCULOS--------------------------------
cant++;
}

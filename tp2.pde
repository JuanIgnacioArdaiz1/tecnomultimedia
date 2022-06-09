// ARDAIZ, JUAN IGNACIO - 91404/8
//https://www.youtube.com/watch?v=y7LZE-xFSl0&ab_channel=NachoArdaiz

//DECLARACIÓN DE MIS VARIABLES---------------------------------------------------------------------

int cant= 20; //DECLARADA Y ASIGNADA-----------------------------------------------------------
int tam;

void setup(){
size (800,600);
cursor(CROSS);  

//ASIGNACIÓN DE MIS VARIABLES---------------------------------------------------------------------

tam=width/cant;

}
void draw (){
  
background(155); 
  
  //CUADRADOS E INTERACCION CON EL MOUSE VARIANDO EL COLOR------------------------------------------


for (int i=0; i<cant; i++){
   for (int j=0; j<cant; j++){
        float d = dist(mouseX, mouseY, i+tam, j+tam);
        float t = d*255/dist(width, height, 0,0);
        if((i+j)%2==0) {
        fill(255, t);
        rect(i*tam,j*tam,tam,tam);
       }else {
       fill(0, t);
       stroke(0);
       strokeWeight(10);
       rect(i*tam,j*tam,tam,tam);

}
}
}
  //CIRCULITOS ENTRE LOS CUADRADOS - FUNCIÓN PROPIA--------------------------------------------------------------
  circulosIlusion();
}

void mousePressed(){ //AL CLICKEAR AUMENTA LA CANTIDAD DE CUADRADOS Y CIRCULOS--------------------------------
cant++;
}

void keyPressed() { //AL PRESIONAR CUALQUIER TECLA LA VARIABLE CANT VUELVE A 0--------------------------------
  cant = 0; 
}

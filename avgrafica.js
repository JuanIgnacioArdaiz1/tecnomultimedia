class avgrafica {

  constructor() {
    this.imagenes = [];
    this.pantalla = 0;
    this.mipreload();
    this.i=0;
    this.ArregloBoton = [];
    this.ArregloBoton[0] = new Boton(width/2,  70, 100, 50); // Botón siguiente
    this.ArregloBoton[1] = new Boton(100, 270, 60, 40); // Botón elegir camino A
    this.ArregloBoton[2] = new Boton(240, 260, 60, 40); // Botón elegir camino B
    this.ArregloBoton[3] = new Boton(460, 200, 60, 40); // Botón elegir camino C
    this.ArregloBoton[4] = new Boton(width / 2, 100, 100, 130); // Botón volver
    this.ArregloBoton[5] = new Boton(width / 2, 100, 110, 120); // Botón reiniciar  
    this.ArregloBoton[6] = new Boton(width / 2, 560, 100, 50); // Botón creditos
    
  }

  backgr() {
    image( this.imagenes[this.i], 0, 0 );
  }

  mipreload() {
    for ( this.i = 0; this.i < 21; this.i++ ) {
      this.imagenes.push(loadImage('assets/'+this.i+'.png') );
    }
  }
  pantallas() {


  //PRIMER pantalla - ACCESO A CREDITOS E INICIAR LA HISTORIA------------------------------------------------
  if ( this.pantalla === 0) {

    image(this.imagenes[0], 0, 0);
    this.ArregloBoton[0].DibujarBoton(0, 1);   
    this.ArregloBoton[6].DibujarBoton(0, 20);   
    textSize(18);
    fill(0)
    text("INICIAR", 265, 75);
    text("CREDITOS", 255, 565)

    
  //CREDITOS------------------------------------------------------------------------------------------------

}else if ( this.pantalla === 20){
 image(this.imagenes[20], 0, 0);
 this.ArregloBoton[4].DibujarBoton(20, 0);

fill(255)
 text("¨LOS TRES CERDITOS¨ - ANONIMO\n HECHO POR JUAN IGNACIO ARDAIZ\n LEGAJO 91404/8 \n COMISION 2 - MATIAS JAUREGUI LORDA\nDISEÑO MULTIMEDIAL FDA UNLP", 220, 450);


  //ELECCION DEL USUARIO DE QUE CASA ATACAR-------------------------------------------------------------
} else if (this.pantalla === 1 ){;

  image(this.imagenes[1], 0, 0);


  this.ArregloBoton[1].DibujarBoton(1, 12);  //CAMINO A
  fill(0)
  text("A", 95, 275)

  this.ArregloBoton[2].DibujarBoton(1, 6);  //CAMINO B
  fill(0)
text("B", 235, 265)

  this.ArregloBoton[3].DibujarBoton(1, 2);  //CAMINO C
  fill(0)
  text("C", 455, 205)


  
textSize(15)
fill(255)
  text("ERES UN LOBO FEROZ HAMBRIENTO. CADA CERDITO CONSTRUYÓ SU CASA.\n                                           ESCOGE CUAL ATACAR", 15, 560); 
   
 
 //PRIMER FINAL (C) ----------------------------------------------------------------------------------
} else if ( this.pantalla === 2){
  image(this.imagenes[2], 0, 0);
  this.ArregloBoton[0].DibujarBoton(2, 3);


  text("BUENA ELECCIÓN, LA DE PAJA PARECE DÉBIL", 300, 580);  
  
  
} else if ( this.pantalla === 3) {
  image(this.imagenes[3], 0, 0);
  this.ArregloBoton[0].DibujarBoton(3, 4);
  
  text("Y SOPLÉ,\n SOPLÉ Y SOPLÉ", 130, 100); 
  
  
} else if ( this.pantalla === 4) {
  image(this.imagenes[4], 0, 0);
  this.ArregloBoton[0].DibujarBoton(4, 5);

  text("Y LA CASA DE\n PAJA VOLÉ", 130, 100); 
  
  
} else if ( this.pantalla === 5){
  image(this.imagenes[5], 0, 0);
  this.ArregloBoton[5].DibujarBoton(5, 0);

  text("NO SOLO VOLÉ LA CASA...", 300, 550);
  
  
  
  
  //SEGUNDO FINAL (B) -------------------------------------------------------------------------------------
} else if ( this.pantalla === 6){

  image(this.imagenes[6], 0, 0);
  this.ArregloBoton[0].DibujarBoton(6, 7);

  text("MMM MADERA, PUEDE COSTAR UN POCO PERO NO ES IMPOSIBLE", width/2, 580);
  
  
} else if ( this.pantalla === 7){

  image(this.imagenes[7], 0, 0);
  this.ArregloBoton[0].DibujarBoton(7, 8);

  text("Y SOPLÉ, SOPLÉ Y SOPLÉ", width/2, 580);
  

  
} else if (this.pantalla === 8){
  
  image(this.imagenes [8], 0, 0);
  this.ArregloBoton[0].DibujarBoton(8, 9);
 
  text(" Y LA CASA DE MADERA VOLÉ", 400, 200);  
  
  
} else if (this.pantalla === 9){
  
  image(this.imagenes [9], 0, 0);
  this.ArregloBoton[0].DibujarBoton(9, 10);

  text("LOS CERDITOS SOBREVIVIERON Y\nFUERON EN BUSCA DE AYUDA", 300, 450);
  
  
}else if (this.pantalla == 10) {
  
  image(this.imagenes [10], 0, 0);
  this.ArregloBoton[0].DibujarBoton(10, 11);

  text( "SE REUNIERON EN EL BOSQUE Y\nPLANEARON SU VENGANZA", width/2, 500);
  


} else if (this.pantalla === 11){
  
  image(this.imagenes [11], 0, 0);
  this.ArregloBoton[5].DibujarBoton(11, 0);
  
  
  
  
  //TERCER FINAL (A)
} else if ( this.pantalla === 12){

  image(this.imagenes[12], 0, 0);
  this.ArregloBoton[0].DibujarBoton(12, 13);
;
  text("CASA DE LADRILLO.\n PARECE SÓLIDA Y RESISTENTE", 170, 120);
  
  
  
} else if ( this.pantalla == 13){

  image(this.imagenes[13], 0, 0);
  this.ArregloBoton[0].DibujarBoton(13, 14);
 
  text("Y SOPLÉ,\n SOPLÉ Y SOPLÉ", 150, 100);
  
  
  
} else if ( this.pantalla == 14){

  image(this.imagenes[14], 0, 0);
  this.ArregloBoton[0].DibujarBoton(14, 15);

  text("NADA. ES UNA MISIÓN DIFICIL.", 205, 140);
  
  
  
} else if ( this.pantalla == 15){

  image(this.imagenes[15], 0, 0);
  this.ArregloBoton[0].DibujarBoton(15, 16);

  text("NO ME VOY A RENDIR, TENGO UNA IDEA", 300, 560);
  
  
  
} else if ( this.pantalla == 16){

  image(this.imagenes[16], 0, 0);
  this.ArregloBoton[0].DibujarBoton(16, 17);

  text("ME COLARÉ POR AQUÍ Y LOS\nAGARRARÉ DE SORPRESA", 300, 200);
  
  
  
} else if ( this.pantalla == 17){

  image(this.imagenes[17], 0, 0);
  this.ArregloBoton[0].DibujarBoton(17, 18);
 
  text("AAAAYYYYYY", 300, 560);
  
  
} else if ( this.pantalla == 18){

  image(this.imagenes[18], 0, 0);
  this.ArregloBoton[0].DibujarBoton(18, 19);
  
  
  
} else if ( this.pantalla === 19){

  image(this.imagenes[19], 0, 0);
  this.ArregloBoton[5].DibujarBoton(19, 0);
 
} 

  }
  
  TocoBoton(){
    
    if (this.ArregloBoton[0].YATOQUE(width / 2, 70, 100, 50) && this.pantalla === this.ArregloBoton[0].ahora) {
      this.pantalla = this.ArregloBoton[0].despues;
    }
  
    if (this.ArregloBoton[1].YATOQUE(100, 270, 60, 40) && this.pantalla === this.ArregloBoton[1].ahora) {
      this.pantalla = this.ArregloBoton[1].despues;
    }
  
    if (this.ArregloBoton[2].YATOQUE(240, 260, 60, 40) && this.pantalla === this.ArregloBoton[2].ahora) {
      this.pantalla = this.ArregloBoton[2].despues;
    }
  
    if (this.ArregloBoton[3].YATOQUE(460, 200, 60, 40) && this.pantalla === this.ArregloBoton[3].ahora) {
      this.pantalla = this.ArregloBoton[3].despues;
    }

    if (this.ArregloBoton[4].YATOQUE(460, 200, 60, 40) && this.pantalla === this.ArregloBoton[4].ahora) {
      this.pantalla = this.ArregloBoton[4].despues;
    }

    if (this.ArregloBoton[5].YATOQUE(460, 200, 60, 40) && this.pantalla === this.ArregloBoton[5].ahora) {
      this.pantalla = this.ArregloBoton[5].despues;
    }

    if (this.ArregloBoton[6].YATOQUE(width / 2, 560, 100, 50) && this.pantalla === this.ArregloBoton[6].ahora) {
      this.pantalla = this.ArregloBoton[6].despues;
    }
  }
  

}
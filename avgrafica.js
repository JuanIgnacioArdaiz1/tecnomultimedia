class avgrafica {

  constructor() {
    

//INICIO DE LA AVENTURA GRAFICA
    this.pantalla = 0;
    this.imagenes = [];
    this.preload();
    this.i=0;

//ARREGLO DE BOTONES DE LA CLASE "BOTON" 

    this.ArregloBoton = [];
    this.ArregloBoton[0] = new Boton(width/2,  70, 100, 50); // BOTON SIGUIENTE
    this.ArregloBoton[1] = new Boton(100, 270, 60, 40); // BOTON ELEGIR CAMINO A
    this.ArregloBoton[2] = new Boton(240, 260, 60, 40); // BOTON ELEGIR CAMINO B
    this.ArregloBoton[3] = new Boton(460, 200, 60, 40); // BOTON ELEGIR CAMINO C
    this.ArregloBoton[4] = new Boton(400, 350, 100, 50); // BOTON VOLVER
    this.ArregloBoton[5] = new Boton(width / 2, height / 2, 120, 50); // BOTON REINICIAR 
    this.ArregloBoton[6] = new Boton(width / 2, 560, 100, 50); // BOTON CREDITOS

    //JUEGO
    this.Tiempo = 0;  //VALOR INICIAL DEL TIEMPO, DESPUES AUMENTA POR MILLIS
    this.IndiceTiempo = 0;   
    this.premio = new CasaLadrillo(this.imagenes[24], width / 2, 50, 50); //PRIMER CLASE VINCULADA A LA CLASE AV GRAFICA
    this.chanchito = new Cerdito(this.imagenes[23], 550, height - 80 / 2, 40); //SEGUNDA CLASE VINCULADA A LA CLASE AV GRAFICA

//ARREGLO DE LOBOS / ENEMIGOS
    this.ArregloLobos = [];
    for (let i = 0; i < 8; i++) {
      this.ArregloLobos.push(new Enemigo(this.imagenes[22], 50));

    }
    
  }

  backgr() {
    image( this.imagenes[this.i], 0, 0 );
  }

  preload() { //CARGA DE LAS IMAGENES A TRAVES DE UN CICLO FOR QUE RECORRE EL ARREGLO "IMAGENES"

    for ( this.i = 0; this.i < 26; this.i++ ) {
      this.imagenes.push(loadImage('assets/'+this.i+'.png') );
    }

  }

  pantallas() {  //LOGICA DE ESTADOS DE LAS PANTALLAS


  this.Reinicio();
  
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
 textSize(18)
 fill(0);
 text("VOLVER", 363, 355 )

fill(255);
 text("¨LOS TRES CERDITOS¨ - ANONIMO\n HECHO POR JUAN IGNACIO ARDAIZ\n LEGAJO 91404/8 \n COMISION 2 - MATIAS JAUREGUI LORDA\nDISEÑO MULTIMEDIAL FDA UNLP", 220, 450);


  //ELECCION DEL USUARIO DE QUE CASA ATACAR-------------------------------------------------------------
} else if (this.pantalla === 1 ){

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
   
 
 //PRIMER FINAL (C) CASA DE PAJA ----------------------------------------------------------------------------------
 
} else if ( this.pantalla === 2){
  image(this.imagenes[2], 0, 0);
  this.ArregloBoton[0].DibujarBoton(2, 3);

fill(255)
text("BUENA ELECCIÓN, LA DE PAJA PARECE DÉBIL", 120, 590); 
fill(0) 
text("AVANZAR", 265, 75);
  
} else if ( this.pantalla === 3) {
  image(this.imagenes[3], 0, 0);
  this.ArregloBoton[0].DibujarBoton(3, 4);
  
  fill(255)
  text("Y SOPLÉ, SOPLÉ Y SOPLÉ", 200, 590); 
  fill(0)
  text("AVANZAR", 265, 75);
  
  
} else if ( this.pantalla === 4) {
  image(this.imagenes[4], 0, 0);
  this.ArregloBoton[0].DibujarBoton(4, 9);

  fill(255)
  text("Y LA CASA DE PAJA VOLÉ", 200, 590); 
  fill(0)
  text("AVANZAR", 265, 75);

  
} else if ( this.pantalla === 5){
  image(this.imagenes[5], 0, 0);
  this.ArregloBoton[5].DibujarBoton(5, 0);

  fill(255,255,0)
  text("NO SOLO VOLÉ LA CASA...", 225, 530);
  fill(0)
  text("REINICIAR", 260, 305)
  
  
  //SEGUNDO FINAL (B) CASA DE MADERA -------------------------------------------------------------------------------------
} else if ( this.pantalla === 6){

  image(this.imagenes[6], 0, 0);
  this.ArregloBoton[0].DibujarBoton(6, 7);

  fill(255)
  text("MMM MADERA, PUEDE COSTAR UN POCO PERO NO ES IMPOSIBLE", 50, 590);
  fill(0)
  text("AVANZAR", 265, 75);
  
  
} else if ( this.pantalla === 7){

  image(this.imagenes[7], 0, 0);
  this.ArregloBoton[0].DibujarBoton(7, 8);

fill(255)
  text("Y SOPLÉ, SOPLÉ Y SOPLÉ", 200, 590);
  fill(0)
  text("AVANZAR", 265, 75);
  

  
} else if (this.pantalla === 8){
  
  image(this.imagenes [8], 0, 0);
  this.ArregloBoton[0].DibujarBoton(8, 9);
 
  fill(255)
  text(" Y LA CASA DE MADERA VOLÉ", 200, 590);  
  fill(0)
  text("AVANZAR", 265, 75);


  
  
  
} else if (this.pantalla === 9){ //PANTALLA DONDE DEBE IR EL JUEGO-------------------------------------------------------------------------
  
  image(this.imagenes[21], 0, 0);
  image(this.imagenes[25], 550, 520)

  this.actualizarTiempo(1000); // ACTUALIZO EL TIEMPO SUMANDO 1000 MILISEGUNDOS

  this.chanchito.DibujoCerdito();
  this.premio.DibujoCasaLadrillo();

  for (let i = 0; i < this.ArregloLobos.length; i++) {
    this.ArregloLobos[i].DibujoEnemigo();
  }

  this.Meatropello();  //COLISIÓN ENTRE CHANCHITO Y LOBOS
  this.gane(); //LLAMO A LA INSTANCIA "GANE" DE AVGRAFICA 
  fill(255);
  push();
  textSize(40)
  text(this.IndiceTiempo, 550, 50);
  pop();

  //---------------------------------------------------------------------------------------------------------------------------------------


}else if (this.pantalla == 10) {
  
  image(this.imagenes [10], 0, 0);
  this.ArregloBoton[0].DibujarBoton(10, 11);
  
  fill(255)
  text( "SE REUNIERON EN EL BOSQUE Y\n     PLANEARON SU VENGANZA", 200, 570);
  fill(0)
  text("AVANZAR", 265, 75);
  


} else if (this.pantalla === 11){  //PANTALLA DE REINICIAR
  
  image(this.imagenes [11], 0, 0);
  this.ArregloBoton[5].DibujarBoton(11, 0);
  fill(0)
  text("REINICIAR", 260, 305)
  
  
  
  
  //TERCER FINAL (A) CASA DE LADRILLO---------------------------------------------------------------------------------------------------------------------

} else if ( this.pantalla === 12){

  image(this.imagenes[12], 0, 0);
  this.ArregloBoton[0].DibujarBoton(12, 13);

  fill(255)
  text("CASA DE LADRILLO. PARECE SÓLIDA Y RESISTENTE", 100, 590);
  fill(0)
  text("AVANZAR", 265, 75);
  
  
  
} else if ( this.pantalla == 13){

  image(this.imagenes[13], 0, 0);
  this.ArregloBoton[0].DibujarBoton(13, 14);
 
  fill(255)
  text("Y SOPLÉ, SOPLÉ Y SOPLÉ", 200, 590);
  fill(0)
  text("AVANZAR", 265, 75);
  
  
} else if ( this.pantalla == 14){

  image(this.imagenes[14], 0, 0);
  this.ArregloBoton[0].DibujarBoton(14, 15);

fill(255)
  text("NADA. ES UNA MISIÓN DIFICIL.", 200, 590);
  fill(0)
  text("AVANZAR", 265, 75);
  
  
} else if ( this.pantalla == 15){

  image(this.imagenes[15], 0, 0);
  this.ArregloBoton[0].DibujarBoton(15, 16);

  fill(255)
  text("NO ME VOY A RENDIR, TENGO UNA IDEA", 280, 580);
  fill(0)
  text("AVANZAR", 265, 75);
  
  
} else if ( this.pantalla == 16){

  image(this.imagenes[16], 0, 0);
  this.ArregloBoton[0].DibujarBoton(16, 17);

  fill(255)
  text("ME COLARÉ POR AQUÍ Y LOS\n   AGARRARÉ DE SORPRESA", 205, 230);
  fill(0)
  text("AVANZAR", 265, 75);
  
  
} else if ( this.pantalla == 17){

  image(this.imagenes[17], 0, 0);
  this.ArregloBoton[0].DibujarBoton(17, 18);
 
  fill(255)
  text("AAAAYYYYYY", 300, 560);
  fill(0)
  text("AVANZAR", 265, 75);
  
  
} else if ( this.pantalla == 18){

  image(this.imagenes[18], 0, 0);
  this.ArregloBoton[0].DibujarBoton(18, 19);
  fill(0)
  text("AVANZAR", 265, 75);
  
  
} else if ( this.pantalla === 19){

  image(this.imagenes[19], 0, 0);
  this.ArregloBoton[5].DibujarBoton(19, 0);
  fill(0)
  text("REINICIAR", 260, 305)


}else if (this.pantalla === 21) { // GANAR
  image(this.imagenes[10], 0, 0);
  this.ArregloBoton[5].DibujarBoton(21, 0);
  textSize(11)
  fill(0)
  text("REINICIAR", 273, 103)
}

  }
  
  actualizarTiempo(TE) {
    
    if (millis() >= this.Tiempo + TE) {
      this.IndiceTiempo++;
      this.Tiempo = millis(); 
    }
    if (this.IndiceTiempo >= 10) { // CAMBIA A LA PANTALLA DE PERDER DESPUES DE 10 SEGUNDOS (PANTALLA 5)
      this.pantalla = 5;
    }
  }

  gane() {  
    let distancia = dist(this.chanchito.Cx, this.chanchito.Cy, this.premio.Zx, this.premio.Zy);
    if (distancia < this.chanchito.Ct / 4 + this.premio.Zt / 4) {
      this.chanchito.Auch = false;
      this.premio.llego();
      this.pantalla = 10;
    
    }
  }

  Reinicio() {  //PANTALLA DE REINICIO-------------------------------------------------------------------------------------------

    if (this.pantalla === 0) {
      this.IndiceTiempo = 0;
      this.Tiempo = 0;
      this.chanchito.Cx = 550;
      this.chanchito.Cy = height - 80 / 2;
      

    }
  }

  TocoBoton(){  // EVENTO CON LAS CONDICIONES PARA QUE LOS BOTONES FUNCIONEN (DELIMITO ZONAS SEGUN EL BOTON QUE SEA: REINICIO, AVANZAR, ETC)------------------------------
    
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

    if (this.ArregloBoton[4].YATOQUE(400, 350, 100, 50) && this.pantalla === this.ArregloBoton[4].ahora) {
      this.pantalla = this.ArregloBoton[4].despues;
    }

    if (this.ArregloBoton[5].YATOQUE(width / 2, height / 2, 120, 50) && this.pantalla === this.ArregloBoton[5].ahora) {
      this.pantalla = this.ArregloBoton[5].despues;
    }

    if (this.ArregloBoton[6].YATOQUE(width / 2, 560, 100, 50) && this.pantalla === this.ArregloBoton[6].ahora) {
      this.pantalla = this.ArregloBoton[6].despues;
    }
  }
  
  MovimientoCerdito(keyCode) {
    this.chanchito.moverCerdito(keyCode);
  }

  Meatropello() {
    for (let i = 0; i < this.ArregloLobos.length; i++) {
      let distancia = dist(this.chanchito.Cx, this.chanchito.Cy, this.ArregloLobos[i].Ex, this.ArregloLobos[i].Ey);
      if (distancia < this.chanchito.Ct / 2 + this.ArregloLobos[i].Et / 2) {
        this.chanchito.Auch = false;
        this.ArregloLobos[i].choque();
        this.chanchito.Cx = 550;
        this.chanchito.Cy = height - 80 / 2;
      }
    }
  }

}

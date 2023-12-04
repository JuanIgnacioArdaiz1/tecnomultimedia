class Boton {
  constructor(BxParametro, By, Ancho, Alto) {  //PASO COMO PARAMETRO LAS MEDIDAS DEL RECTANGULO
    this.BxPropiedad = BxParametro;
    this.By = By;
    this.Ancho = Ancho;
    this.Alto = Alto;
    this.ahora = 0;
    this.despues = 0;
  }

  DibujarBoton(aqui, alla) {  //EL PARAMETRO "AQUI (PANTALLA ACTUAL), ALLA (A LA QUE QUIERO IR)" PERMITE DESPLAZARME ENTRE LAS PANTALLAS A TRAVÉS DE LOS BOTONES
    this.ahora = aqui;
    this.despues = alla;
    fill(0);
    fill(255, 255, 0);
    stroke(50);
    rectMode(CENTER);
    rect(this.BxPropiedad, this.By, this.Ancho, this.Alto);
  }

  YATOQUE(BxParametro, By, Ancho, Alto) { //TOMA LOS PARAMETROS DEL RECTANGULO
    this.BxPropiedad = BxParametro;
    this.By = By;
    this.Ancho = Ancho;
    this.Alto = Alto;
    return mouseX > this.BxPropiedad - this.Ancho / 2 &&  // VERIFICA SI LAS COORDENADAS DE MOUSEX Y MOUSEY ESTAN DENTRO DEL AREA RECTANGULAR
      mouseX < this.BxPropiedad + this.Ancho / 2 &&
      mouseY > this.By - this.Alto / 2 &&
      mouseY < this.By + this.Alto / 2;
  }
}

class Principal {
  constructor() {
    this.Tiempo = 0;
    this.IndiceTiempo = 0;
    this.pantalla = 0;
    this.game = loadImage("assets/game.jpg");
    this.home = loadImage("assets/home.png");
    this.instrucciones = loadImage("assets/instrucciones.png");
    this.perdiste = loadImage("assets/perdiste.png");
    this.ganaste = loadImage("assets/ganaste.png");
    this.cerdito = loadImage("assets/cerdito.png");
    this.enemigo = loadImage("assets/enemigo.png");
    this.casaladrillo = loadImage("assets/casaladrillo.png");
    this.casamadera = loadImage("assets/casamadera.png")
    this.premio = new CasaLadrillo(this.casaladrillo, width / 2, height / 4 - 70, 50);
    this.chanchito = new Cerdito(this.cerdito, width / 2, height - 80 / 2, 40);

    this.ArregloLobos = [];
    for (let i = 0; i < 12; i++) {
      this.ArregloLobos.push(new Enemigo(this.enemigo, 50));
    }

    this.ArregloBoton = [];
    this.ArregloBoton[0] = new Boton(300, 360, 100, 50); // Botón pantallaInicio
    this.ArregloBoton[1] = new Boton(width / 2, 300, 60, 40); // Botón pantallaInstrucciones
    this.ArregloBoton[2] = new Boton(width / 2, 100, 100, 130); // Botón pantallaPerder
    this.ArregloBoton[3] = new Boton(width / 2, 100, 110, 120); // Botón pantallaGanar
  }

  dibujar() { 
    this.Reinicio();
    if (this.pantalla === 0) { // Inicio
      image(this.home, 0, 0);
      this.ArregloBoton[0].DibujarBoton(0, 1);
      textSize(11)
      fill(0)
      text("INSTRUCCIONES", 255, 363)
    }
    if (this.pantalla === 1) { // Instrucciones
      image(this.instrucciones, 0, 0);
      this.ArregloBoton[1].DibujarBoton(1, 2);
      textSize(16)
      fill(0)
      text("JUGAR", 273, 305)
    }

    if (this.pantalla === 2) { // Juego
      image(this.game, 0, 0);
      image(this.casamadera, 500, 350)
      
       // Actualiza el tiempo sumando 1000 milisegundos
        this.actualizarTiempo(1000);

      this.chanchito.DibujoCerdito();
      this.premio.DibujoCasaLadrillo();

      for (let i = 0; i < this.ArregloLobos.length; i++) {
        this.ArregloLobos[i].DibujoEnemigo();
      }

      this.Meatropello();
      this.gane();
      fill(255);
      textSize(28);
      text(this.IndiceTiempo, 550, 40);
    }
    if (this.pantalla === 3) { // Perder
      image(this.perdiste, 0, 0);
      this.ArregloBoton[2].DibujarBoton(3, 0);
      textSize(11)
      fill(0)
      text("REINICIAR", 273, 103)
    }
    if (this.pantalla === 4) { // Ganar
      image(this.ganaste, 0, 0);
      this.ArregloBoton[3].DibujarBoton(4, 0);
      textSize(11)
      fill(0)
      text("REINICIAR", 273, 103)
    }
  }

  actualizarTiempo(TE) {
    if (millis() >= this.Tiempo + TE) {
      this.IndiceTiempo++;
      this.Tiempo = millis(); // Reinicia el tiempo
    }
    if (this.IndiceTiempo >= 10) { // Cambia a la pantalla de perder después de 10 segundos
      this.pantalla = 3;
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
        this.chanchito.Cx = width / 2;
        this.chanchito.Cy = height - 80 / 2;
      }
    }
  }

  gane() {
    let distancia = dist(this.chanchito.Cx, this.chanchito.Cy, this.premio.Zx, this.premio.Zy);
    if (distancia < this.chanchito.Ct / 4 + this.premio.Zt / 4) {
      this.chanchito.Auch = false;
      this.premio.llego();
      this.pantalla = 4;
    
    }
  }

  Reinicio() {
    if (this.pantalla === 0) {
      this.IndiceTiempo = 0;
      this.Tiempo = 0;
      this.chanchito.Cx = width / 2;
      this.chanchito.Cy = height - 80 / 2;
    }
  }

  TocoBoton() {
    if (this.ArregloBoton[0].YATOQUE(300, 360, 100, 50) && this.pantalla === this.ArregloBoton[0].ahora) {
      this.pantalla = this.ArregloBoton[0].despues;
    }

    if (this.ArregloBoton[1].YATOQUE(width / 2, 300, 60, 40) && this.pantalla === this.ArregloBoton[1].ahora) {
      this.pantalla = this.ArregloBoton[1].despues;
    }
    if (this.ArregloBoton[2].YATOQUE(width / 2, 100, 60, 40) && this.pantalla === this.ArregloBoton[2].ahora) {
      this.pantalla = this.ArregloBoton[2].despues;
    }
    if (this.ArregloBoton[3].YATOQUE(width / 2, 100, 60, 40) && this.pantalla === this.ArregloBoton[3].ahora) {
      this.pantalla = this.ArregloBoton[3].despues;
    }
  }
  
}

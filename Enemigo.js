class Enemigo {
  constructor(Enemigo, tam) { //LE PASO COMO PARAMETRO EL TAMAÑO PARA MODIFICARLO EN LA CLASE "AVGRAFICA"
    this.Enemigo = Enemigo;
    this.Et = tam;
    this.Ex = random(-width / 2, -this.Et);  //LOS LOBOS APARECERAN EN UNA POSICION RANDOM DE X DESDE -WIDTH (LADO IZQUIERDO)
    this.Ey = random(this.Et / 2, height / 2); 
    this.Ev = random(2, 5); //VELOCIDAD DE LOS LOBOS (DE 2 A 5)
    this.Mechoco = false; //LA BOOLEANA DE LA COLISION CON EL CERDITO COMIENZA SIENDO FALSA
    
  }

  DibujoEnemigo() {
    push();
    imageMode(CENTER);
    image(this.Enemigo, this.Ex, this.Ey, this.Et, this.Et);
    pop();
    this.ME();
  }

  ME() {
    if (this.Ex > width + this.Et || this.Mechoco) {
      this.Ex = -this.Et;
      this.Ey = random(height);
      this.Ev = random(2, 5);
      this.Mechoco = false;
    }
    this.Ex += this.Ev;
  }

  choque() {
    this.Mechoco = true;  //LA BOOLEANA DE LA COLISION CON EL CERDITO SE VUELVE VERDADERA CUANDO LA LLAMO EN LA CLASE "AVGRAFICA" EN LA FUNCION "MEATROPELLO"
  }
}

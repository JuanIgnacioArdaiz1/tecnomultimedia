const DOWN = 40; //ABAJO
const UP = 38; //ARRIBA

class Cerdito {
  constructor(cerdito, Cx, Cy, Ct) {
    this.Cx = Cx;
    this.Cy = Cy;
    this.Ct = Ct;
    this.cerdito = cerdito;
    this.Auch = false; //BOOLEANA PARA DETECTAR LA COLISION CON EL ENEMIGO
  }

  DibujoCerdito() {
    push();
    imageMode(CENTER);
    image(this.cerdito, this.Cx, this.Cy, this.Ct, this.Ct);
    pop();
  }

  moverCerdito(keyCode) {
    if (keyCode === DOWN && this.Cy < height - this.Ct / 2) {
      this.Cy += 2;
    }
    if (keyCode === UP && this.Cy > this.Ct / 2) {
      this.Cy -= 2;
    }
    if (keyCode === LEFT_ARROW && this.Cy < height - this.Ct / 2) {
      this.Cx -= 2;
    }
    if (keyCode === RIGHT_ARROW && this.Cy > this.Ct / 2) {
      this.Cx += 2;
    }
  }
  }

let objAv;

function setup() {
createCanvas(600, 600);
objAv= new avgrafica();
}


function draw() {
objAv.backgr();
objAv.pantallas();

if (keyIsPressed) {
    objAv.MovimientoCerdito(keyCode);
  }
}

function mousePressed(){
objAv.TocoBoton();
}

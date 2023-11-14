let objAv;

function setup() {
createCanvas(600, 600);
objAv= new avgrafica();
}


function draw() {
objAv.backgr();
objAv.pantallas();
}

function mousePressed(){
objAv.TocoBoton();
}

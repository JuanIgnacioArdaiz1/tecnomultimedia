PImage tucan;

void setup(){

  size(800, 400);
  background(83, 102, 37);
  tucan = loadImage("tucan.jpg");

}

void draw(){


//PIEL NEGRA ABAJO
fill(37, 28, 20);
ellipse(200, 380, 80, 150);


noStroke();

//PIEL AMARILLA
fill(249, 234, 65);
rect(50, 60, 150, 350);

//PIEL NEGRA IZQ
fill(37, 28, 20);
rect(0, 60, 50, 350);

//PIEL NEGRA ARRIBA
rect(0, 60, 202, 20);


//OJOS
fill(60, 67, 26);
circle(150, 120, 40);
fill(0);
circle(150, 120, 20);

//PICO VERDE
fill(174, 201, 13);
triangle(209, 60, 800, 150, 209, 180);
//PICO ROJO
fill(232, 73, 16);
triangle(230, 100, 800, 190, 225, 135);
ellipse(240, 119, 50, 40);

//PICO CELESTE
fill(64, 166, 172);
triangle(250, 135, 800, 195, 240, 150);

//LINEA NARIZ
strokeWeight(10);
stroke(37, 28, 20);
line(204, 65, 204, 180);
strokeWeight(5);
line(204, 183, 260, 180);


image(tucan, 400, 0);

}

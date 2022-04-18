void setup(){
  
  size(600, 600);
 background(162, 202, 223);
  colorMode(RGB);
}

void draw() { 
  
//CIRCULOS GRANDES
stroke(255);  
fill(255, 255, 255);
circle(300, 500, 300);
circle(300, 260, 200);

//CIRCULOS CHIQUITOS
stroke(0);
fill(0);
circle(260, 220, 20);
circle(340, 220, 20);
circle(300, 420, 20);
circle(300, 490, 20);
circle(300, 560, 20);

//SOMBRERO
stroke(0);
fill(0);
rect(225, 130, 150, 50);
rect(260, 10, 80, 130);
stroke(222, 51, 51);
fill(222, 51, 51);
rect(260, 60, 80, 30); 

//NARIZ
fill(255, 170, 0);
stroke(255, 170, 0);
triangle(300, 250, 370, 270, 300, 290);

    //BUFANDA
    fill(222, 51, 51);
stroke(222, 51, 51);
rect(225,340, 150, 30);
rect(345, 360, 30, 130);

//BOCA
fill(0);
noStroke();
circle(250, 305, 10);
circle(260, 310, 10);
circle(270, 315, 10);
circle(280, 320, 10);
circle(290, 323, 10);
circle(300, 325, 10);
circle(310, 325, 10);
circle(320, 323, 10);
circle(330, 320, 10);
circle(340, 315, 10);
circle(350, 310, 10);

}

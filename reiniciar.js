
function reiniciar() {
  estadoActual = "inicio";
  vida = 3;
  for (let i = 0; i < pelotas.length; i++) {
    pelotas[i].x = random(110, width-110);
    pelotas[i].y = random(height);
  }
}

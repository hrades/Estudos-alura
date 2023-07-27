function setup() {
  createCanvas(600, 400);
  theme.loop();
}

function draw() {
  background(imagemEstrada);
  showAtor();
  showCarro();
  showVida();
  moveAtor();
  moveCar();
  initCar();
  colidir();
  final();
  pontuar();
  gameOver();
}  

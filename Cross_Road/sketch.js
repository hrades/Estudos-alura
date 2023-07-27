function setup() {
  createCanvas(600, 400);
  theme.loop();
}

function draw() {
  background(imagemEstrada);
  showAtor();
  showCarro();
  moveAtor();
  moveCar();
  initCar();
  colidir();
  final();
  pontuar();
}  


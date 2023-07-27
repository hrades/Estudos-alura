//Parâmetros do ambiente
let largura = 600;
let altura = 400;

//Parâmetros da bolinha
let xBola = largura/2;
let yBola = altura/2;
let dBola = 20;
let rBola = dBola/2;

//Tamanhos das raquetes
let larRaq = 10;
let altRaq = 80;

//Posições das raquetes
let xRaqEsq = 5;
let yRaqEsq = (altura/2) - (altRaq/2)
let xRaqDir = 585;
let yRaqDir = (altura/2) - (altRaq/2)

//Velocidade
let velocXBola = 6;
let velocYBola = 6;
let velocRaq = 8;
let velocOpo;

//Variáveis de controle
let colidiu = false;
let pontosA = 0; //Jogador azul
let pontosV = 0; //Jogador vermelho
let errar = 0;

//Sons
let smash;
let ponto;
let theme;

function preload(){
  smash = loadSound("raquetada.wav");
  ponto = loadSound("Coin.wav");
  theme = loadSound("Som de fundo.wav");
}

function setup() {
  createCanvas(largura, altura); //Tamanho da tela
  theme.loop();
}

function draw() {
  background(0); //Fundo preto
  showComponentes();
  moveBola();
  detectaBordas();
  moveRaqEsq();
  moveRaqDir();
  detectaRaquetes();
  placar();
  pontuar();
  naoPrende();
  
}

function showComponentes(){
  //Bolinha
  fill('white')
  circle(xBola, yBola, dBola);
  //Raquete 
  fill(color(0,255,255));
  rect(xRaqEsq, yRaqEsq, larRaq, altRaq);
  //Raquete vermelha
  fill('red')
  rect(xRaqDir, yRaqDir, larRaq, altRaq);
}

function moveBola(){
  //Faz a bolinha se mexer pela tela
  xBola += velocXBola; 
  yBola -= velocYBola;
}

function detectaBordas(){
  //Inverte direções em x e y
  if((xBola + rBola)>width || (xBola-rBola)<0){
    velocXBola *= -1;
  }
  if((yBola + rBola)>height || (yBola-rBola)<0){
     velocYBola *= -1;
  }
}

function moveRaqEsq(){
  if(keyIsDown(UP_ARROW)){
    yRaqEsq -= 10;
  }
  else if(keyIsDown(DOWN_ARROW)){
    yRaqEsq += 10;
  }
  //Limitar movimentação para não sair da borda
  yRaqEsq = constrain(yRaqEsq, 10, 300);
}

function moveRaqDir(){
  //JOGO SOLO
  velocOpo = yBola - yRaqDir - altRaq/ 2 - errar;
  yRaqDir += velocOpo;
  chanceErrar();
  
  //2 PLAYERS -- apagar /**/ para jogar
  /*if(keyIsDown(87)){ //87 é o valor deswsw W
    yRaqDir -= 10;
  }
  else if(keyIsDown(83)){ //83 é o valor de S
    yRaqDir += 10;
  }*/
  
  //Limitar área de movimentação
  yRaqDir = constrain(yRaqDir, 10, 300);
}

function detectaRaquetes(){
  //Colidiu com a raquete azul
  if((xBola - rBola) < (xRaqEsq+larRaq) && (yBola - rBola) < (yRaqEsq + altRaq) && (yBola + rBola) > yRaqEsq){
    velocXBola *= -1;
    smash.play();
  }
  
  //Colidiu com a raquete vermelha (usando biblioteca)
  colidiu = collideRectCircle(xRaqDir, yRaqDir, larRaq, altRaq, xBola, yBola, rBola);
  if(colidiu){
    velocXBola *= -1;
    smash.play();
  }
  
}

function placar(){
  textAlign(CENTER);
  textSize(20);
  fill(color(0,255,255))
  text(pontosA, 150, 26);
  fill('red')
  text(pontosV, 450, 26)
}

function pontuar(){
  if(xBola > 590){
    pontosA += 1;
    ponto.play();
  }
  if(xBola < 10){
    pontosV += 1;
    ponto.play();
  }
}

function chanceErrar(){
  if(pontosV > pontosA)
  {
    errar = 92;
  }
  if(pontosV < pontosA && errar > 50)
  {
    errar -= 2;
  }
}

function naoPrende(){
    if (xBola - rBola < 0){
    xBola = 23
    }
}
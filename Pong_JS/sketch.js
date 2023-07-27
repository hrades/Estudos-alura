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
let altRaq = 90;

//Posições das raquetes
let xRaqEsq = 5;
let yRaqEsq = (altura/2) - (altRaq/2)
let xRaqDir = 585;
let yRaqDir = (altura/2) - (altRaq/2)

//Velocidade
let velocXBola = 6;
let velocYBola = 6;
let velocRaq = 6;
let velocOpo;

//Variáveis de controle
let colidiu = false;
let pontosA = 0; //Jogador azul
let pontosV = 0; //Jogador vermelho

function setup() {
  createCanvas(largura, altura); //Tamanho da tela
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
}

function showComponentes(){
  //Bolinha
  fill('white')
  circle(xBola, yBola, dBola);
  //Raquete 
  fill('blue');
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
  velocOpo = yBola - yRaqDir - altRaq/ 2 - 35;
  yRaqDir += velocOpo;
  //Limitar área de movimentação
  yRaqDir = constrain(yRaqDir, 10, 300);
}

function detectaRaquetes(){
  //Colidiu com a raquete azul
  if((xBola - rBola) < (xRaqEsq+larRaq) && (yBola - rBola) < (yRaqEsq + altRaq) && (yBola + rBola) > yRaqEsq){
    velocXBola *= -1;
  }
  
  //Colidiu com a raquete vermelha (usando biblioteca)
  colidiu = collideRectCircle(xRaqDir, yRaqDir, larRaq, altRaq, xBola, yBola, rBola);
  if(colidiu){
    velocXBola *= -1;
  }
  
}

function placar(){
  fill('orange');
  text(pontosA, 200, 26);
  text(pontosV, 400, 26)
}

function pontuar(){
  if(xBola > 590){
    pontosA += 1;
  }
  if(xBola < 10){
    pontosV += 1;
  }
}

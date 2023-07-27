//Dados Ator
let xAtor = 100;
let yAtor = 370;
let tamAtor = 30;
let velocAtor = 4;
let colidiu = false;
let pontos = 0;
let vidas = 5;

function showAtor(){
  image(imagemAtor1, xAtor, yAtor, tamAtor, tamAtor);
}

function moveAtor(){
  if(keyIsDown(DOWN_ARROW)){
    if(evitaBorda())
    yAtor += velocAtor;
  }
  if(keyIsDown(UP_ARROW)){
    yAtor -= velocAtor;
  }
}

function colidir(){
  for(let i=0; i<imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], larCarro, altCarro, xAtor, yAtor, 15);
    if(colisao){
      crash();
      bater.play();
    }
  }
}

function crash(){
  yAtor = 385;
  vidas -= 1;
  if(pontos>0){
    pontos -= 1;
  }
}

function final(){
  if(yAtor<=10){
    yAtor = 385;
    pontos +=1;
    ponto.play();
  }
}

function pontuar(){
  textSize(25);
  fill(255,0,255);
  text(pontos, 175, 27);
}

function evitaBorda(){
  return yAtor < 385;
}

function showVida(){
  image(heart, 450, 8, 20, 20);
  textSize(25);
  fill('white');
  text(vidas, 485, 27);
}

function gameOver(){
  if(vidas==0){
    textSize(95);
    fill('black');
    text("GAME OVER", 10, height/2);
    velocAtor = 0;
    for(let i=0; i<imagemCarros.length; i++){
      velCarros[i] = 0;
    }
  }
}

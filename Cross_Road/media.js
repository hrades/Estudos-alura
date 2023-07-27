//Imagens carregadas
let imagemEstrada;
let imagemAtor1;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let heart;
//Sons carregados
let theme;
let ponto;
let bater;

function preload(){
  imagemEstrada = loadImage("images/estrada.png");
  imagemAtor1 = loadImage("images/ator-1.png");
  imagemCarro1 = loadImage("images/carro-1.png");
  imagemCarro2 = loadImage("images/carro-2.png");
  imagemCarro3 = loadImage("images/carro-3.png");
  heart = loadImage("images/heart.png");
  theme = loadSound("sounds/theme_song.wav");
  ponto = loadSound("sounds/point.wav");
  bater = loadSound("sounds/crash.wav");
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3];
}

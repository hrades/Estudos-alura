//Dados gerais carros
let larCarro = 50;
let altCarro = 40;
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 95, 150, 210, 270, 320];
let velCarros = [4,2.5,3.2,5,2,2.8];

function showCarro(){  
  for(let i=0; i<imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], larCarro, altCarro);
  } 
}

function moveCar(){
  for(let i=0; i<imagemCarros.length; i++){
    xCarros[i] -= velCarros[i];
  }
}

function initCar(){
  for(let i=0; i<imagemCarros.length; i++){
     if(cruzouTela(xCarros[i])){
        xCarros[i] = 600;
     }
  }
}

function cruzouTela(xCarro){
  return xCarro < -50;
}

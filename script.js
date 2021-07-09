window.addEventListener('load', fillPalette)

const pixelBoard = document.getElementById('pixel-board');
const colorPalette = document.getElementById('color-palette');
const paletteColorList = document.querySelectorAll('.color');
const pixelBoardSize = 5;

//Define o tamanho total do pixel board
pixelBoard.style.width = pixelBoardSize * 40 + 'px';

function generateRGBNumber(){
  const rgbNumber = Math.ceil(Math.random() * 255);
  return rgbNumber;
}

//Preenchendo palette com as cores
function fillPalette(){
  const colors = document.querySelectorAll('.color').forEach((color)=>{
    color.style.backgroundColor = 'rgb(' + generateRGBNumber() + ',' + generateRGBNumber() + ',' + generateRGBNumber() + ')'
  });
  colorDefault.style.backgroundColor = '#000000';
}
   

//Adiciona a cor preta a classe select
paletteColorList[0].classList.add('selected');

//Preenche o board com os pixels
fillBoard(pixelBoardSize);

/**
 * source: Consultei o repositório Trybe exercise-end-block5 como base para criação e adaptação da função
 * Link:https://github.com/tryber/exercise-end-block5
 * @returns uma div de 40x40 (Pixel) 
 */
function createPixel()  {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');
  return pixel; 
}

/**
 * Consultei o repositório Trybe exercise-end-block5 como base para criação e adaptação da função
 * Link:https://github.com/tryber/exercise-end-block5
 */
function fillBoard(size)  {
  for (let line = 0; line < size; line+= 1) {
    for (let column = 0; column < size; column += 1) {
      if(line <= size){
        let pixel = createPixel();
        pixelBoard.appendChild(pixel);
      }
    }
  }
}

colorPalette.addEventListener('click', selectColor);
function selectColor(event) {
  const colorSelected = event.target;
  
  for (let index = 0; index < paletteColorList.length; index += 1) {
    
    if (paletteColorList[index].classList[2] === 'selected') {
      paletteColorList[index].classList.remove('selected');
      colorSelected.classList.add('selected');
    }
  }
  const selectedClasses = colorSelected.className.split(' ');
  console.log(selectedClasses[1]);
  return selectedClasses[1];
}

window.onload = fillDefault;

const pixelBoard = document.getElementById('pixel-board');
//const colorPalette = document.getElementById('color-palette');
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
    /**
     * source: Notação para rgb retirada com background color retirada do stackoverflow
     * Link:https://stackoverflow.com/questions/14323082/why-doesnt-backgroundcolor-rgba-b-c-work
     */
    color.style.backgroundColor = 'rgb(' + generateRGBNumber() + ',' + generateRGBNumber() + ',' + generateRGBNumber() + ')'
  });
  colorDefault.style.backgroundColor = '#000000';
}

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

function fillColorSelected(event, colorSelected){
  event.target.style.backgroundColor= colorSelected;
}

const colorPalette = document.getElementById('color-palette');
colorPalette.addEventListener('click', selectColor);
function selectColor(event) {
  colorSelected = event.target;
  for (let index = 0; index < paletteColorList.length; index += 1) {
    if(paletteColorList[index].classList[1] === 'selected'){
        paletteColorList[index].classList.remove('selected');
      }
      colorSelected.classList.add('selected');
  }
  const background = colorSelected.style.backgroundColor;
  document.querySelectorAll('.pixel').forEach((pixel)=>{
      /**
       * source:Utilizado exemplo de código para poder passar mais de uma parametro utilizando o addEventListener e callback
       * Link:https://cursos.alura.com.br/forum/topico-passando-parametros-para-funcao-anonima-dentro-do-addeventlistener-64709
       */
      pixel.addEventListener('click', function(event){
        const colorSelected = background;
        fillColorSelected(event, colorSelected);
      });
  });
}

function fillDefault(){
  document.querySelectorAll('.pixel').forEach(pixel=>{
  pixel.addEventListener('click', function(event){
  const colorSelected = '#000000';
  fillColorSelected(event, colorSelected);
  });
});
}
fillPalette();

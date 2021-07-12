const pixelBoard = document.getElementById('pixel-board');
const paletteColorList = document.querySelectorAll('.color');
let count = 0;

function setBoardSize(){
  const inputBoardSize = document.getElementById('board-size');
  let boardSize = inputBoardSize.value;
  
  if (count != 0) {
    clear();
  } 
  count += 1;
  
  boardSize = verifySizeBoard(boardSize, count);

  fillBoard(boardSize);
  pixelBoard.style.width = boardSize * 40 + 'px';
  inputBoardSize.value = '';
  fillDefault();
}

const btnGenerateboard = document.getElementById('generate-board');
btnGenerateboard.addEventListener('click', setBoardSize);

function verifySizeBoard(size, count){
  if(size == '' && count > 1) {
    alert('Board inválido!');
    return size = 5;
  } else if(size < 5)  {
    return size = 5;
  } else if( size > 50)  {
    return size = 50;
  }
}



function generateRGBNumber(){
  const rgbNumber = Math.ceil(Math.random() * 255);
  return rgbNumber;
}

const btnSortColors = document.getElementById('sort-colors');
btnSortColors.addEventListener('click', fillPalette);

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

/**
 * source: Consultei o repositório Trybe exercise-end-bl  console.log(pixel);

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
      if(line <= size && column <= size){
        let pixel = createPixel();
        pixelBoard.appendChild(pixel);
      }
    }
  }
  return size;
}
  

function clear(){
  const pixelList = document.querySelectorAll('.pixel');
  console.log(pixelList);
  for (let index = 0; index < pixelList.length; index+= 1) {
    pixelList[index].remove('pixel');
  }
}

function fillColorSelected(event, colorSelected){
  const pixel = event.target;
  pixel.style.backgroundColor = colorSelected;
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
  document.querySelectorAll('.pixel').forEach( (pixel) => {
    pixel.addEventListener('click', function(){
      pixel.style.backgroundColor = '#000000';
    }) 
  });
}

const btnLimpar = document.getElementById('clear-board');
btnLimpar.addEventListener('click',clearBoard);
function clearBoard(){
  document.querySelectorAll('.pixel').forEach(pixel =>{
  pixel.style.backgroundColor = '#FFFFFF';
  });
}

fillPalette();
setBoardSize();
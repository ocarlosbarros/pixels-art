const pixelBoardSize = 5;
const pixelBoard = document.getElementById('pixel-board');
pixelBoard.style.width = pixelBoardSize * 40 + 'px';
const colorPalette = document.getElementById('color-palette');
colorPalette.addEventListener('click', selectColor);

fillBoard(pixelBoardSize);

/**
 * source: Consultei o repositório Trybe exercise-end-block5 como base para criação e adaptação da função
 * Link:https://github.com/tryber/exercise-end-block5
 * @returns 
 */
function createPixel(){
  let pixel = document.createElement('div');
  pixel.classList.add('pixel');
  return pixel; 
}

/**
 * Consultei o repositório Trybe exercise-end-block5 como base para criação e adaptação da função
 * Link:https://github.com/tryber/exercise-end-block5
 */
function fillBoard(size){
  for (let line = 0; line < size; line+= 1) {
    for (let column = 0; column < size; column += 1) {
      if(line <= size){
        let pixel = createPixel();
        pixelBoard.appendChild(pixel);
      }
    }
  }
}


function selectColor(event){
  const paletteColorList = document.querySelectorAll('.color')
  const colorSelected = event.target;
  for (const color of paletteColorList) {
    if(colorSelected.classList.length === 3){
      colorSelected.classList.remove('selected');
    }else if(color.classList.length < 2){
      colorSelected.classList.add('selected');
    }
  }
  console.log('--------------------------')
  console.log('Selecionado', colorSelected);
  console.log('--------------------------')
  console.log('Black', paletteColorList[0])
  console.log('Red', paletteColorList[1])
  console.log('Purple', paletteColorList[3])
  console.log('Green', paletteColorList[2])
}

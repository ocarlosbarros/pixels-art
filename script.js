const pixelBoardSize = 5;

const pixelBoard = document.getElementById('pixel-board');
pixelBoard.style.width = pixelBoardSize * 40 + 'px';

fillBoard(pixelBoardSize);

function createPixel(){
  let pixel = document.createElement('div');
  pixel.classList.add('pixel');
  return pixel; 
}

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

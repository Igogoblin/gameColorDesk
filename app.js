const board = document.querySelector('#board');
const colors = [generateColor(), generateColor(), generateColor(), generateColor(), generateColor(),generateColor(),generateColor(), generateColor(), generateColor(), generateColor(), generateColor(), generateColor()];
const SQUARE_NUMBER = 450;

for(let i = 0;i<SQUARE_NUMBER;i++){
const square = document.createElement('div');
square.classList.add('square');

square.addEventListener('mouseover', function(){
    setColor(square)
})

square.addEventListener('mouseleave', function(){
    removeColor(square);
})

board.append(square);
}


function setColor(element){
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #135'
}

function getRandomColor() {
const index = Math.floor(Math.random()*colors.length);
return colors[index];
}

function generateColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16)
  }
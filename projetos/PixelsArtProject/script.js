/* eslint-disable no-param-reassign */
/* eslint-disable eqeqeq */

// Declaração de variáveis
const board = document.getElementById('pixel-board');
const input = document.getElementById('board-size');
let size = 5;
const generateBoardButton = document.getElementById('generate-board');
const initialColor = 'white';

// Gera paleta de cores
function createPalette() {
  const colorPalette = document.getElementById('color-palette');
  for (let i = 0; i < 4; i += 1) {
    const palette = document.createElement('div');
    palette.className = 'color';
    colorPalette.appendChild(palette);
  }
}
createPalette();

// Gera cor aleatória. Código em: https://www.ti-enxame.com/pt/javascript/gerador-de-cores-aleatorias/967183954/
function getRandomColor() {
  const letters = '0123456789ABCDEF'; // código hex é formado por estas letras e números
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)]; // adiciona à variável "color" ela mesma e caracter aleatório da string letters
  }
  return color;
}

// Gera linhas
function createLines(linesNumber) {
  for (let i = 0; i < linesNumber; i += 1) {
    const lines = document.createElement('div');
    lines.className = 'lines';
    board.appendChild(lines);
  }
}
createLines(size);

// Gera pixels
function createPixel(number) {
  const lines = document.getElementsByClassName('lines');
  for (let i = 0; i < number; i += 1) {
    for (let j = 0; j < number; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = initialColor;
      lines[j].appendChild(pixel);
    }
  }
}
createPixel(size);

// Define as cores da paleta
function fillColorPalette() {
  const color = document.getElementsByClassName('color');
  color[0].style.backgroundColor = 'black';
  color[0].classList.add('selected');
  for (let i = 1; i < 4; i += 1) {
    color[i].style.backgroundColor = getRandomColor();
  }
}
fillColorPalette();

// Seleciona cor - adiciona e remove classe selected após click
function changeclassSelected() {
  const colorOptions = document.getElementsByClassName('color');
  for (let i = 0; i < colorOptions.length; i += 1) {
    colorOptions[i].addEventListener('click', (event) => { // Sugestão ESLint - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
      const selected = document.querySelector('.selected');
      selected.classList.remove('selected');
      event.target.classList.add('selected');
    });
  }
}
changeclassSelected();

// Pinta pixel
function paintPixel(event) {
  if (event.target.classList.contains('pixel')) {
    const classSelected = document.querySelector('.selected');
    const color = classSelected.style.backgroundColor;
    event.target.style.backgroundColor = color;
  }
}
board.addEventListener('click', paintPixel);

// Botão limpar
function clearBoard() {
  const pixels = document.getElementsByClassName('pixel');
  const clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', () => {
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = initialColor;
    }
  });
}
clearBoard();

// Quadro de pixel definido pelo usuário
function boardSize() {
  if (input.value == '') {
    alert('Board inválido!');
  } else if (input.value >= 5 && input.value <= 50) {
    size = input.value;
    board.innerHTML = '';
    createLines(size);
    createPixel(size);
  } else if (input.value < 5) {
    size = 5;
    board.innerHTML = '';
    createLines(size);
    createPixel(size);
  } else {
    size = 50;
    board.innerHTML = '';
    createLines(size);
    createPixel(size);
  }
}
generateBoardButton.addEventListener('click', boardSize);

// Limpa pixel
function clearPixel(event) {
  if (event.target.classList.contains('pixel')) {
    event.target.style.backgroundColor = initialColor;
  }
}
board.addEventListener('dblclick', clearPixel);

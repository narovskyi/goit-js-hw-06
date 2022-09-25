const numberInput = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesField = document.querySelector('div#boxes');

function createBoxes() {
  boxesField.innerHTML = '';
  const arrayOfBlocks = [];
  for (let i = 1; i <= numberInput.value; i += 1) {
    const element = document.createElement('div');
    element.style.width = `${20 + i*10}px`;
    element.style.height = `${20 + i * 10}px`;
    element.style.backgroundColor = getRandomHexColor();
    arrayOfBlocks.push(element);
  }
  boxesField.append(...arrayOfBlocks);  
}

function destroyBoxes() {
  boxesField.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);
const numberInput = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesField = document.querySelector('div#boxes');

function createBoxes() {
  console.log(numberInput.value);
  const arrayOfBlocks = [];
  for (let i = 1; i <= numberInput.value; i += 1) {
    const element = do
    arrayOfBlocks.push(i);
  }
  console.log(arrayOfBlocks);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// console.log(createBoxes());
createBtn.addEventListener('click', createBoxes);
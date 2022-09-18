const elemBody = document.querySelector('body');
const changeColorBtn = document.querySelector('button.change-color');
const colorCode = document.querySelector('span.color');

changeColorBtn.addEventListener('click', () => {
  const currentColor = getRandomHexColor();
  elemBody.style.backgroundColor = currentColor;
  colorCode.textContent = currentColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

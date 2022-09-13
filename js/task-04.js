const valueField = document.querySelector('#value');
const incrementButton = document.querySelector('button[data-action="increment"]');
const decrementButton = document.querySelector("button[data-action='decrement']");
let counterValue = 0;

incrementButton.addEventListener('click', () => {
    counterValue += 1;
    valueField.textContent = counterValue;
});

decrementButton.addEventListener('click', () => {
    counterValue -= 1;
    valueField.textContent = counterValue;
});
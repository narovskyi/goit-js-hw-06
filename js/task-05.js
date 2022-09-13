const inputField = document.querySelector('input#name-input');
const outputField = document.querySelector('span#name-output');

inputField.addEventListener('input', () => {
    outputField.textContent = inputField.value === '' ? "Anonymous" : inputField.value;
})

console.log(outputField);
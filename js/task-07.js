const inputRange = document.querySelector('input#font-size-control');
const textExample = document.querySelector('span#text');

inputRange.addEventListener('input', () => {
    textExample.style.fontSize = `${inputRange.value}px`;
});
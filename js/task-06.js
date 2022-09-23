const inputField = document.querySelector('input#validation-input');

inputField.addEventListener('blur', () => {
    if (inputField.value.length === Number(inputField.dataset.length)) {
        inputField.classList.add('valid');
        inputField.classList.remove('invalid');
    } else {
        inputField.classList.add('invalid');
        inputField.classList.remove('valid');
    };
})
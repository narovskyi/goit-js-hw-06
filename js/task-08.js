const loginForm = document.querySelector('form.login-form');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (emailInput.value === "" || passwordInput.value === "") {
        alert('All fields must be filled');
    } else {
        const dataObject = {
            email: email.value,
            password: password.value
        }
        console.log(dataObject);
    }

    event.currentTarget.reset();
})

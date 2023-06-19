inputs = document.querySelectorAll(".inputs li input")

inputs.forEach(element => {
    element.addEventListener('input', checkValidation)
});

function checkValidation(e) {
    passwordConfirm = document.getElementById('confirmPass');

    let color = 'red';
    let inputId = e.currentTarget.id;
    let isPassword = (inputId === 'pass' || inputId === 'confirmPass');

    if(isPassword && checkPasswords() && checkPasswordsLength()) {
        passwordConfirm.style.borderColor = 'green';
        passwordConfirm.setCustomValidity('')

    } else if(isPassword) {
        passwordConfirm.setCustomValidity("Passwords don't match")
        passwordConfirm.style.borderColor = 'red';
    }

    if(e.currentTarget.id !== 'confirmPass'){
        const isValid = e.currentTarget.checkValidity();
        isValid ? color = 'green' : color = 'red';
        e.currentTarget.style.borderColor = color;
    }
}

function checkPasswords() {
    password = document.getElementById('pass');
    passwordConfirm = document.getElementById('confirmPass');
    return password.value === passwordConfirm.value
}

function checkPasswordsLength() {
    length = document.getElementById('confirmPass').length;
    
    return length >= 3 && length <= 20
}
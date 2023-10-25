const PASSWORD = document.querySelector(`#password`);
const CONFIRMPASSWORD = document.querySelector(`#confirm-password`);

function validatePassword() {
    if (PASSWORD.value != CONFIRMPASSWORD.value) {
        CONFIRMPASSWORD.setCustomValidity("Passwords Don't Match");
    } else {
        CONFIRMPASSWORD.setCustomValidity('');
    }
}

PASSWORD.onchange = validatePassword;
CONFIRMPASSWORD.onkeyup = validatePassword;
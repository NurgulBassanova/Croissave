const form1 = document.getElementById('form1');
const first_name = document.getElementById('first_name');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const psswrd1 = document.getElementById('psswrd1');
const psswrd2 = document.getElementById('psswrd2');
const gender = document.getElementById('gender');
const error_message = document.getElementById('error-message');

form1.addEventListener('submit', (e) => {
    let errors = getSignupFormErrors(
        first_name.value,
        surname.value,
        email.value,
        psswrd1.value,
        psswrd2.value,
        gender.value
    );

    if (errors.length > 0) {
        e.preventDefault();
        error_message.innerHTML = ''; 
        errors.forEach(error => {
            const li = document.createElement('li'); 
            li.textContent = error; 
            error_message.appendChild(li);
        });
        error_message.style.display = 'block'; 
    } else {
        error_message.style.display = 'none'; 
    }
});

function getSignupFormErrors(first_name, surname, email, psswrd1, psswrd2, gender) {
    let errors = [];

    if (first_name.trim() === '') {
        errors.push('First name is required');
    }
    if (surname.trim() === '') {
        errors.push('Surname is required');
    }
    if (email.trim() === '' || !validateEmail(email)) {
        errors.push('A valid email is required');
    }
    const passwordValidation = validatePassword(psswrd1);
    if (passwordValidation !== 'Strong password!') {
        errors.push(passwordValidation);
    }
    if (psswrd1 !== psswrd2) {
        errors.push('Passwords do not match');
    }
    if (gender === '') {
        errors.push('Please select a gender');
    }

    return errors;
}

function validateEmail(email) {
    const format_em = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return format_em.test(email);
}

function validatePassword(psswrd1) {
    const digits = /\d/;           
    const alphas = /[A-Za-z]/;     
    const symbols = /[!@#$%^&*()_+\-=\[\]{}|;':",.<>?\/]/; 

    if (psswrd1.length < 8 || psswrd1.length > 32) {
        return 'The number of characters in password must be between 8 and 32';
    }

  
    const Digits = digits.test(psswrd1);
    const Alphas = alphas.test(psswrd1);
    const Symbols = symbols.test(psswrd1);

    
    if (Digits && Alphas && Symbols) {
        return 'Strong password!';
    } else {
        return 'There must be at least 1 digit, 1 letter, and 1 symbol.';
    }
}

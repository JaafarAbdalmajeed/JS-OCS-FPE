let formRegister = document.getElementById('formRegister');
let formLogin = document.getElementById('formLogin');

const NameRegex = /^[a-zA-Z]{2,30}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const birthDateRegex = /^\d{4}-\d{2}-\d{2}$/;




const validateInputs = ({ firstName, lastName, birthDate, email, emailConfirmation, password, passwordConfirmation }) => {

    const displayError = (inputId, errorMessage) => {
        const inputElement = document.getElementById(inputId);
        inputElement.innerHTML = errorMessage;
        inputElement.style.display = 'block';
        inputElement.style.color = 'red';
        inputElement.className = 'error-message';

    };


    if(firstName || lastName){
        if (!NameRegex.test(firstName) || !NameRegex.test(lastName)) {
            displayError('errorFirstName', 'Invalid name. Must contain only letters and have a length between 2 to 30 characters.');
            return 1;
        }
    }
    if(lastName){
        if (!NameRegex.test(firstName) || !NameRegex.test(lastName)) {
            displayError('errorLastName', 'Invalid name. Must contain only letters and have a length between 2 to 30 characters.');
            return 1;
        }
    }

    if(email || emailConfirmation){
        if (!emailRegex.test(email)) {
            displayError('errorLastName', 'Invalid email address.');
            return 1;
        }
        if (!emailRegex.test(emailConfirmation)) {
            displayError('errorEmailConfirmation', 'Invalid email address.');
            return 1;
        }

        if (email !== emailConfirmation) {
            displayError('emailConfirmation', 'Email Confirmation does not match Email.');
            return 1;
        }
    }

    if(password || passwordConfirmation){
        if (!passwordRegex.test(password)) {
            displayError('errorPassword', 'Invalid password. Must contain at least one lowercase letter, one uppercase letter, one digit, and be at least 8 characters long.');
            return 1;
        }

        if (!passwordRegex.test(password)) {
            displayError('errorPasswordConfirmation', 'Invalid password. Must contain at least one lowercase letter, one uppercase letter, one digit, and be at least 8 characters long.');
            return 1;
        }

        if (!passwordRegex.test(passwordConfirmation)) {
            displayError('errorPasswordConfirmation', 'Invalid password. Must contain at least one lowercase letter, one uppercase letter, one digit, and be at least 8 characters long.');
            return 1;
        }
    }

    if (!birthDateRegex.test(birthDate)) {
        displayError('errorBirthDate', 'Invalid birthDate.');
        return 1;
    }
    

}

const handleFormSubmit = (event) => {
    event.preventDefault();

    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let birthDate =document.getElementById('birthDate').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let passwordConfirmation = document.getElementById('passwordConfirmation').value;
    let emailConfirmation = document.getElementById('emailConfirmation').value;


    let validInputs = validateInputs({
        firstName,
        lastName,
        birthDate,
        email,
        emailConfirmation,
        password,
        passwordConfirmation
    });

    if (event.target.id === 'formRegister') {
        let userInfo = {
            firstName,
            lastName,
            birthDate,
            email,
            password,
        };

        if(validInputs === 1){
            alert(' no Registration ');
            return
        }
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        alert('Registration successful');
    } else if (event.target.id === 'formLogin') {
        let userInfoSet = {
            email: document.getElementById('logEmail').value,
            password: document.getElementById('logPassword').value
        };
        let userFound = false;
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const storedUser = JSON.parse(localStorage.getItem(key));
            if (storedUser && storedUser.email === userInfoSet.email && storedUser.password === userInfoSet.password) {
                userFound = true;
                alert('Login successful');
                sessionStorage.setItem('userInfo', JSON.stringify(storedUser));
                break;
            }
        }

        if (!userFound) {
            alert('User not found or invalid password');
        }
    }
};

formRegister.addEventListener('submit', handleFormSubmit);
formLogin.addEventListener('submit', handleFormSubmit);

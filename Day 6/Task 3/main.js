
let formRegister = document.getElementById('formRegister');
let formLogin = document.getElementById('formLogin');



const handleFormSubmit = (event) => {
    event.preventDefault();

    if (event.submitter.id === 'submitReg') {

        let userInfo = {};
        let passwordConfirmation = document.getElementById('passwordConfirmation').value;
        let password = document.getElementById('password').value;

        userInfo = {
            name: document.getElementById('fullName').value,
            email: document.getElementById('regEmail').value,
            userName: document.getElementById('userName').value,
            password: document.getElementById('password').value,
            phoneNumber: document.getElementById('phoneNumber').value,
        };

        if (passwordConfirmation !== password) {
            alert('Password Confirmation not equal to Password');
        } else {
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
        }
    } else if (event.submitter.id === 'submitLog') {
        let userInfoSet = {};
        userInfoSet = {
            email: document.getElementById('logEmail').value,
            password: document.getElementById('logPassword').value,
        };

        let userInfoGet = JSON.parse(localStorage.getItem('userInfo'));
        if (userInfoSet.email === userInfoGet.email && userInfoSet.password === userInfoGet.password) {
            alert('Success login');
            sessionStorage.setItem('userInfo', JSON.stringify(userInfoSet))
        } else {
            alert('Not found user or invalid password');
        }
    }
};

formRegister.addEventListener('submit', handleFormSubmit);
formLogin.addEventListener('submit', handleFormSubmit);


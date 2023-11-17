let form = document.getElementById('personalInfoForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    let genderOptions = document.getElementsByName('gender');
    let userInfo = '';

    genderOptions.forEach(option => {
        if (option.checked) {
            userInfo = option.value;
        }
    });

    let languageCheckboxes = document.getElementsByName('languages[]');
    let userLang = [];

    languageCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            userLang.push(checkbox.value);
        }
    });

    let userData = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        gender: userInfo,
        description: document.getElementById('description').value,
        major: document.getElementById('major').value,
        university: document.getElementById('university').value,
        languages: userLang
    };

    console.log(userData);

    
});


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

    localStorage.setItem('userData', JSON.stringify(userData))
    
    let showUserData = JSON.parse(localStorage.getItem('userData'))
    document.getElementById('showName').innerHTML = showUserData.name
    document.getElementById('showAge').innerHTML = showUserData.age
    document.getElementById('showGender').innerHTML = showUserData.gender
    document.getElementById('showDescription').innerHTML = showUserData.description
    document.getElementById('showMajor').innerHTML = showUserData.major
    document.getElementById('showUniversity').innerHTML = showUserData.university
    document.getElementById('showLanguages').innerHTML = showUserData.languages


});


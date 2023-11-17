let form = document.getElementById('form')

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let userTypes = document.getElementById('userTypes')
    let userType = ''
    let userInfo = ''

    userTypes.addEventListener('change', function() {
        if(userTypes.value === 'student'){
            userType = 'student'
        } else {
            userType = 'company'
        }
    })

    userInfo = {
        subject: document.getElementById('subject').value,
        description: document.getElementById('description').value,
        userTypes: document.getElementById('userTypes').value,
        technologyUsed: document.getElementById('technologyUsed').value
    }

    sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
    window.location.href = 'http://127.0.0.1:5501/Day%206/Task%202/TO-DO-List-App/index.html'
})
let form = document.getElementById('formInfo')

form.addEventListener('submit' , (e) => {
    e.preventDefault()
    let userInfo = ''
    let nameUser = document.getElementById('name')
    let emailUser = document.getElementById('email')
    let mobileUser = document.getElementById('mobile')

    userInfo = {
        name: nameUser.value,
        email: emailUser.value,
        mobile: mobileUser.value
    }

    localStorage.setItem('user information', JSON.stringify(userInfo))

    let showName = document.getElementById('showName')
let showEmail = document.getElementById('showEmail')
let showMobile = document.getElementById('showMobile')

let userInfoShow = JSON.parse(localStorage.getItem('user information'))

showName.innerHTML = userInfoShow.name
showEmail.innerHTML = userInfoShow.email
showMobile.innerHTML = userInfoShow.mobile

showName.style.backgroundColor = 'red'
showEmail.style.backgroundColor = 'blue'
showMobile.style.backgroundColor = 'green'


let nameField = document.getElementById('nameField')
let emailField = document.getElementById('emailField')
let mobileField = document.getElementById('mobileField')

nameField.innerHTML = userInfoShow.name
emailField.innerHTML = userInfoShow.email
mobileField.innerHTML = userInfoShow.mobile

})


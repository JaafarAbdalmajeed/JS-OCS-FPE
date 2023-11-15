let pass = document.getElementById('pass')
let repeatPass = document.getElementById('repeat-pass')

let warningPass = document.getElementById('warning-pass')
let warningRepeat = document.getElementById('warning-repeat')

pass.addEventListener('input', () => {
    if(pass.value.length < 6){
        console.log('j')
        warningPass.innerHTML = 'Too short'
        warningPass.style.color = 'red'
    } else {
        warningPass.innerHTML = ''
    }
})

repeatPass.addEventListener('input', () => {
    if(repeatPass.value !== pass.value){
        warningRepeat.innerHTML = 'the two password don\'match'
        warningRepeat.style.color = 'red'
    } else {
        const submitPass = document.createElement('button')
        submitPass.value = 'Submit'
    }
    document.body.appendChild(submitPass);
})


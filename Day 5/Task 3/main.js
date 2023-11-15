let pass = document.getElementById('pass')
let repeatPass = document.getElementById('repeat-pass')
body.style.fontFamily = 'Arial, sans-serif'; 
body.style.margin = 0;

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
        warningRepeat.innerHTML = ''
        const submitPass = document.createElement('button')
        submitPass.textContent = 'Submit'
        submitPass.style.width = '80px'
        submitPass.style.height='40px'
        document.body.appendChild(submitPass);
    }
    
})


let fontFamily = document.getElementById('fontFamily');
let fontSize = document.getElementById('fontSize');
let italic = document.getElementById('Italic');
let bold = document.getElementById('Bold');
let underLine = document.getElementById('Underline');
let divText = document.getElementById('textContainer');
let par = document.getElementsByTagName('p');

divText.innerHTML = 'lkkk';
divText.style.color = 'black'


fontFamily.addEventListener('change' , () => {
    if (fontFamily.value === 'Arial') {
        divText.style.fontFamily = 'Arial';
    } else if (fontFamily.value === 'Franklin Gothic Medium') {
        divText.style.fontFamily = 'Franklin Gothic Medium';
    } else if (fontFamily.value === 'Trebuchet MS') {
        divText.style.fontFamily = 'Trebuchet MS';
    }
})

fontSize.addEventListener('change', () => {
    if (fontSize.value === '12pt') {
        divText.style.fontSize = '12pt'
    } else if (fontSize.value === '16pt') {
        divText.style.fontSize = '16pt'
    } else if (fontSize.value === '20pt') {
        divText.style.fontSize = '20pt'
    }
})

italic.addEventListener('click', () => {
    divText.style.fontStyle = 'italic'
})

bold.addEventListener('click', () => {
    divText.style.fontWeight = 'bold'
})

underLine.addEventListener('click', () => {
    divText.style.textDecoration = 'underline'
})


let body = document.body
let div = document.createElement('div')
div.style.width = '400px'
div.style.height = '400px'

div.style.border = '2px solid Black'

setInterval(() => {
    let red = radomNumber()
    let green = radomNumber()
    let blue = radomNumber()
    div.style.backgroundColor = `rgb(${red},${green},${blue})`
}, 700)

const radomNumber = () => {
    return Math.floor(Math.random() * 256);

}



body.appendChild(div)
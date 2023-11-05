let radios = prompt('Enter radios')

if(!isNaN(radios)){
    let pi = Math.PI
    let result = radios * radios * pi
    document.write(`<h2>${result}</h2>`)
}


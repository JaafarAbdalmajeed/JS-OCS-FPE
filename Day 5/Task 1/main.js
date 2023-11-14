let box = document.getElementById('container');

function changeColor() {
    // Generate random RGB values
    let red = random();
    let green = random();
    let blue = random();

    // Apply the random RGB values to the background color
    box.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

function random() {
    return Math.floor(Math.random() * 256); // Fix the missing '()' in Math.random()
}

console.log(random());
const mark = prompt("What is your mark in the material?")
const result = document.getElementById("result")

switch (true) {
    case mark >= 90: document.write('<h2>A+</h2>');break;
    case mark >= 80: document.write('<h2>A</h2>');break;
    case mark >= 70: document.write('<h2>B</h2>');break;
    case mark >= 60: document.write('<h2>AC</h2>');break;
    case mark >= 50: document.write('<h2>AD</h2>');break;
    default: result.innerHTML = 'F';
}


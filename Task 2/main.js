const mark = prompt("What is your mark in the material?")
const result = document.getElementById("result")

switch (true) {
    case mark >= 90: result.innerHTML = 'A+';break;
    case mark >= 80: result.innerHTML = 'A';break;
    case mark >= 70: result.innerHTML = 'B';break;
    case mark >= 60: result.innerHTML = 'C';break;
    case mark >= 50: result.innerHTML = 'D';break;
    default: result.innerHTML = 'F';
}


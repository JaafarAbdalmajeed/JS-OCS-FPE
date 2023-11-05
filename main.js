document.getElementById('calculate').addEventListener('click', function () {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    const result = document.getElementById('result');

    switch (operator) {
        case '+':
            result.textContent = num1 + num2;
            break;
        case '-':
            result.textContent = num1 - num2;
            break;
        case '*':
            result.textContent = num1 * num2;
            break;
        case '/':
            result.textContent = num1 / num2;
            break;
        default:
            result.textContent = "Invalid operator";
    }
});
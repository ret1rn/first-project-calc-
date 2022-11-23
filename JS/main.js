// функция расчёта
function myFunc() {
    // переменная для результата
    let result;

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '**':
            result = num1 ** num2;
            break;
    }

    // отправления результата на страницу
    document.getElementById("demo").innerHTML = result;
}
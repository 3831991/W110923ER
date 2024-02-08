let count = 0;

function counter(num) {
    count += num;

    document.getElementById("count").innerHTML = count;
}

function sum(num1, num2, num3) {
    return `${num1} + ${num2} + ${num3} = ${num1 + num2 + num3}`;
}

function calcVat(num) {
    return `ללא מע"מ: ${num} | כולל מע"מ: ${num * 1.17}`;
}


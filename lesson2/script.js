let count = 0;

function counter() {
    document.getElementById("btn").innerHTML = ++count;
}

function multi() {
    const n1 = document.getElementById("num1").value;
    const n2 = document.getElementById("num2").value;

    document.getElementById("output1").innerHTML = n1 * n2;
}

function plus() {
    const n1 = +document.getElementById("num3").value;
    const n2 = +document.getElementById("num4").value;

    document.getElementById("output2").innerHTML = n1 + n2;
}

function plusResult() {
    const n1 = +document.getElementById("num5").value;
    const n2 = +document.getElementById("num6").value;
    // const sum = n1 + n2;
    // const result = n1 + " + " + n2 + " = " + sum;
    const result = `${n1} + ${n2} = ${n1 + n2}`;
    
    document.getElementById("output3").innerHTML = result;
}
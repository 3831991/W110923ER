function task5() {
    const num = +document.getElementById("num4").value;
    let result = '';

    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            result += i + ', ';
        }
    }

    document.getElementById("output5").innerHTML = result;
}

function task6() {
    const num = +document.getElementById("num5").value;
    let result = '';

    for (let i = 0; i < num; i++) {
        result += '* ';
    }

    document.getElementById("output6").innerHTML = result;
}

function task7() {
    const num = +document.getElementById("num6").value;
    let result = '';

    for (let i = 0; i < num; i++) {
        result += '*<br>';
    }

    document.getElementById("output7").innerHTML = result;
}

function task8() {
    const num = +document.getElementById("num7").value;
    let result = '';
    let calc = 1;

    for (let i = 1; i <= num; i++) {
        calc *= i;
        result += i;

        if (i !== num) {
            result += ' x ';
        }
    }

    document.getElementById("output8").innerHTML = `${result} = <b>${calc}</b>`;
}
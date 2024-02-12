function task1() {
    let i = 2;
    let res = '';

    while (i <= 100) {
        res += i + ', ';
        i += 2;
    }

    document.getElementById("output1").innerHTML = res;
    document.getElementById("btn").remove();
}

function task2(elem) {
    const num = +elem.value;
    let isPrime = true;

    let i = 2;

    while (i < num) {

        if (num % i === 0) {
            isPrime = false;
            break;
        }

        i++;
    }

    const output = document.getElementById("output2");

    if (isPrime) {
        output.innerHTML = 'ראשוני';
        output.style.color = "blue";
    } else {
        output.innerHTML = 'פריק';
        output.style.color = "green";
    }
}
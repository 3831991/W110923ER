function task1(elem) {
    setTimeout(function() {
        elem.style.display = 'none';
    }, 1000);
}

let counter = 1;
let myInterval;

function task2(elem) {
    if (myInterval) {
        myInterval = clearInterval(myInterval);
    } else {
        myInterval = setInterval(function() {
            elem.innerHTML = ++counter;
        }, 100);
    }
}

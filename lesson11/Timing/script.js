const traffic1 = document.querySelector('.traffic-light');
const traffic2 = document.querySelector('.traffic-light.warning');

const first = traffic1.querySelector('div');
const second = traffic1.querySelector('div:nth-child(2)');
const last = traffic1.querySelector('div:last-child');

let trafficTimeOut;

function reset() {
    first.style.backgroundColor = '';
    second.style.backgroundColor = '';
    last.style.backgroundColor = '';
}

function green() {
    reset();
    last.style.backgroundColor = 'green';
    trafficTimeOut = setTimeout(yellow, 3 * 1000);
}

function yellow() {
    reset();
    second.style.backgroundColor = 'yellow';
    trafficTimeOut = setTimeout(red, 1000);
}

function red() {
    reset();
    first.style.backgroundColor = 'red';
    trafficTimeOut = setTimeout(redAndYellow, 3 * 1000);
}

function redAndYellow() {
    reset();
    second.style.backgroundColor = 'yellow';
    first.style.backgroundColor = 'red';
    trafficTimeOut = setTimeout(green, 1000);
}

function stop() {
    clearTimeout(trafficTimeOut);
}

red();

const flashing = traffic2.querySelector('div:nth-child(2)');
let isFlashing = false;

setInterval(function() {
    flashing.style.backgroundColor = isFlashing ? '' : 'yellow';
    isFlashing = !isFlashing;
}, 1000);
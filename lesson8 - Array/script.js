const div = document.querySelector('#numbers');
const output = document.querySelector('#output');

div.innerHTML = numbers.join(', ');

function max() {
    let num = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > num) {
            num = numbers[i];
        }
    }

    output.innerHTML = `<b>המספר הגדול הוא:</b> ${num}`;
}
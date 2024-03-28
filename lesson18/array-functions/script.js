const numbers = [27,27,41,37,29,54,6,95,22,63,33,34,68,42,99,61,46,41,79,9,59,59,49,17,8,31,49,70,31,71];

document.querySelector("#numbers div").innerHTML = numbers.join(", ");

document.querySelector("#task1 p").innerHTML = 
students.map(x => x.firstName + ' ' + x.lastName).join(', ');

document.querySelector("#task2 p").innerHTML = 
students.map(x => x.phone).join(', ');

document.querySelector("#task3 p").innerHTML = 
numbers.map(x => x * 2).join(' | ');

document.querySelector("#task4 p").innerHTML = 
numbers.filter(x => x > 40).join(' | ');

document.querySelector("#task5 p").innerHTML = 
numbers.filter(x => x >= 20 && x <= 50).join(' | ');

document.querySelector("#task6 input").addEventListener('input', ev => {
    const val = ev.target.value;

    document.querySelector("#task6 p").innerHTML = 
        students
        .map(x => `${x.firstName} ${x.lastName}`)
        .filter(x => x.includes(val))
        // .map(x => x.replaceAll(val, `<mark>${val}</mark>`))
        .join('<br>');
});
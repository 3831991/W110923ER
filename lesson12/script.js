const clock = document.querySelector("#analog-clock");

for (let i = 0; i < 60; i++) {
    const div = document.createElement("div");
    div.innerHTML = '|';
    let number;

    switch (i) {
        case 0 : number = "<b>12</b>"; break;
        case 5 : number = 1; break;
        case 10 : number = 2; break;
        case 15 : number = "<b>3</b>"; break;
        case 20 : number = 4; break;
        case 25 : number = 5; break;
        case 30 : number = "<b>6</b>"; break;
        case 35 : number = 7; break;
        case 40 : number = 8; break;
        case 45 : number = "<b>9</b>"; break;
        case 50 : number = 10; break;
        case 55 : number = 11; break;
    }

    if (number) {
        const h2 = document.createElement("h2");
        h2.innerHTML = number;
        h2.style.rotate = `${360 - (i * 6)}deg`;
        div.appendChild(h2);
    }

    div.style.rotate = `${i * 6}deg`;
    clock.appendChild(div);
}
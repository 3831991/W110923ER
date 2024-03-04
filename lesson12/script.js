const clock = document.querySelector("#analog-clock");

for (let i = 0; i < 60; i++) {
    const div = document.createElement("div");
    div.innerHTML = '|';
    div.style.rotate = `${i * 6}deg`;
    clock.appendChild(div);
}
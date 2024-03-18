const divs = document.querySelectorAll("#board>div");
let isX = true;

for (const div of divs) {
    div.addEventListener("click", function(ev) {
        const elem = ev.target;

        if (isX) {
            elem.innerText = "X";
        } else {
            elem.innerText = "O";
        }

        isX = !isX;
    });
}
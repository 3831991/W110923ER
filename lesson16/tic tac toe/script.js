const divs = document.querySelectorAll("#board>div");

for (const div of divs) {
    div.addEventListener("click", function(ev) {
        const elem = ev.target;

        elem.innerText = "X";
    });
}
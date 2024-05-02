const board = document.querySelector("#board");
const width = 30;
const height = 30;
const snake = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const divs = [];

function createBoard() {
    board.style.gridTemplateColumns = `repeat(${width}, 1fr)`;

    for (let i = 0; i < width * height; i++) {
        const div = document.createElement("div");
        div.innerText = i;
        board.appendChild(div);
        divs.push(div);
    }

    color();
}

function color() {
    divs.forEach(div => {
        div.classList.remove("snake");
    });

    snake.forEach(x => {
        divs[x].classList.add("snake");
    });
}
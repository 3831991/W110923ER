const board = document.querySelector("#board");
const width = 30;
const height = 30;

function createBoard() {
    board.style.gridTemplateColumns = `repeat(${width}, 1fr)`;

    for (let i = 0; i < width * height; i++) {
        const div = document.createElement("div");
        div.innerText = i;
        board.appendChild(div);
    }
}
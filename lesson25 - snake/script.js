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

function move(dir) {
    let head = snake[0];

    if (dir === 'up') {
        head -= width;

    } else if (dir === 'down') {
        head += width;

    } else if (dir === 'left') {
        head++;

    } else if (dir === 'right') {
        head--;

    }

    snake.unshift(head);
    snake.pop();
    color();
}

window.addEventListener("keydown", ev => {
    ev.preventDefault();

    switch (ev.key) {
        case "ArrowUp": move("up"); break;
        case "ArrowRight": move("right"); break;
        case "ArrowDown": move("down"); break;
        case "ArrowLeft": move("left"); break;
    }
});

// window.addEventListener("keydown", ev => {
//     ev.preventDefault();

//     if (ev.key === "ArrowUp") {
//         move("up");
//     } else if (ev.key === "ArrowRight") {
//         move("right");
//     } else if (ev.key === "ArrowDown") {
//         move("down");
//     } else if (ev.key === "ArrowLeft") {
//         move("left");
//     }
// });
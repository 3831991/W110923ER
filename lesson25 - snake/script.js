const board = document.querySelector("#board");
const width = window.screen.width < 640 ? 20 : 40; // הרוחב בהתאם לרוחב המסך
const height = 40;
const snake = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const divs = [];
let direction = 'left';
let isGameOver = false;
let interval;

function createBoard() {
    board.style.gridTemplateColumns = `repeat(${width}, 1fr)`;

    for (let i = 0; i < width * height; i++) {
        const div = document.createElement("div");
        board.appendChild(div);
        divs.push(div);
    }

    color();
}

function color() {
    // מנקה את כל התאים מהנחש
    divs.forEach(div => {
        div.classList.remove("snake", "head");
    });

    // שם את הנחש במיקום שלו
    snake.forEach((x, i) => {
        divs[x].classList.add("snake");
        
        if (i === 0) {
            divs[x].classList.add("head");
        }
    });
}

function move(dir) {
    if (isGameOver) {
        return;
    }

    let head = snake[0];

    if (dir === 'up') {
        if (direction === 'down') {
            return;
        }

        head -= width;

        // בדיקת גבולות - אם הנחש עומד לחרוג מה-0
        if (head < 0) {
            gameOver();
            return;
        }
    } else if (dir === 'down') {
        if (direction === 'up') {
            return;
        }

        head += width;

        if (head >= width * height) {
            gameOver();
            return;
        }
    } else if (dir === 'left') {
        if (direction === 'right') {
            return;
        }

        head++;

        if (head % width === 0) {
            gameOver();
            return;
        }
    } else if (dir === 'right') {
        if (direction === 'left') {
            return;
        }

        if (head % width === 0) {
            gameOver();
            return;
        }

        head--;
    }

    if (snake.includes(head)) {
        gameOver();
        return;
    }

    direction = dir;
    snake.unshift(head);
    snake.pop();
    color();
    autoMove();
}

function autoMove() {
    clearInterval(interval);
    interval = setInterval(() => move(direction), 200);
}

function gameOver() {
    isGameOver = true;
    clearInterval(interval);
    alert("Game over");
}

window.addEventListener("keydown", ev => {
    // מבטל את פעול ברירת המחדל של המקשים
    // (במקרה שלנו זה מבטל את הגלילה של הדף באמצעות החצים)
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

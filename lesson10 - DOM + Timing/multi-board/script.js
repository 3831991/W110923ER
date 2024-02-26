// יצירת אלמנט כללי שבתוכו יופיע לוח הכפל
const board = document.createElement('div');
board.className = 'board';
// הוספת האלמנט ל-Body
document.body.appendChild(board);

for (let y = 1; y <= 10; y++) {
    for (let x = 1; x <= 10; x++) {
        // יצירת אלמנט שבתוכו יופיע המספר (כמו תא בטבלה)
        const div = document.createElement('div');
        div.innerHTML = x * y;
        board.appendChild(div);

        div.setAttribute("ziv", `${y} x ${x} = ${y * x}`);
    }
}
const divs = document.querySelectorAll("#board>div");
let isX = true;

// לולאה העוברת על כל המשבצות
for (const div of divs) {
    // הוספת פונקציה המופעלת בעת לחיצה על אחת המשבצות
    div.addEventListener("click", function(ev) {
        // האלמנט שעליו לחץ השחקן
        const elem = ev.target;

        // אם המשבצת מלאה, הפונקציה נעצרת
        if (elem.innerText) {
            return;
        }

        if (isX) {
            elem.innerText = "X";
        } else {
            elem.innerText = "O";
        }

        // שינוי תור
        isX = !isX;
        // הפעלת הפונקציה של המחווה הויזואלית
        showTurn();
    });
}

/**
 * פונקציה הנותנת מחווה של איזה שחקן התור הנוכחי
 */
function showTurn() {
    // קודם כל, הסרנו את הקלאס מהשחקן האחרון
    document.querySelector('.currentTurn').classList.remove('currentTurn');

    // שם את הקלאס בהתאם לתור השחקן
    if (isX) {
        document.querySelector("#players>div:first-child").classList.add('currentTurn');
    } else {
        document.querySelector("#players>div:last-child").classList.add('currentTurn');
    }
}
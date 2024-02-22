const tasks = document.querySelector(".tasks");

// פונקציה להוספת אלמנטים
function add() {
    const input = document.querySelector('input');

    // אם אין תוכן בתיבת הקלט - הפונקציה נעצרת
    if (!input.value) {
        return;
    }

    // יצירת אלמנט חדש
    const li = document.createElement('li');
    // השמת התוכן של המשימה לאלמנט החדש
    li.innerHTML = input.value;
    // יצירת אירוע - כל לחיצה על האלמנט תפעיל את הפונקציה של המחיקה
    li.addEventListener('click', removeTask);

    // הוספת האלמנט לתור הרשימה
    tasks.appendChild(li);
    // איפוס תיב הקלט
    input.value = '';
}

// פונקציה להוספת אלמנטים באמצעות לחיצה על Enter
function keyup(ev) {
    if (ev.key == 'Enter') {
        add();
    }
}

// פונקציה למחיקת אלמנטים (מופעל בלחיצה על האלמנטים)
function removeTask(ev) {
    const isAllowed = confirm(`האם אתה בטוח כי ברצונך למחוק את ${ev.target.innerHTML}?`);

    if (isAllowed) {
        ev.target.remove();
    }
}
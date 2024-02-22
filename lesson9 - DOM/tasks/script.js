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

    // הוספת האלמנט לתור הרשימה
    tasks.appendChild(li);

    // השמת התוכן של המשימה לאלמנט החדש
    const div = document.createElement('div');
    div.innerHTML = input.value;

    // מאפשרים למשתמש לערוך את התוכן של האלמנט
    div.contentEditable = true;
    li.appendChild(div);

    // יצירת לחצן מחיקה
    const btn = document.createElement('button');
    btn.innerHTML = 'x';

    // יצירת אירוע - כל לחיצה על הלחצן תפעיל את הפונקציה של המחיקה
    btn.addEventListener('click', function() {
        const isAllowed = confirm(`האם אתה בטוח כי ברצונך למחוק את ${div.innerHTML}?`);

        if (isAllowed) {
            li.remove();
        }
    });
    li.appendChild(btn);

    // איפוס תיב הקלט
    input.value = '';
}

// פונקציה להוספת אלמנטים באמצעות לחיצה על Enter
function keyup(ev) {
    if (ev.key == 'Enter') {
        add();
    }
}
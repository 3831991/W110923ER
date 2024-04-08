function login(ev) {
    // מבטל את פעולת ברירת המחדל של הדפדפן
    // במקרה שלנו הוא מבטל את השליחה ומעבר לדף אחר
    ev.preventDefault();

    // קבילנו את האינפוטים
    const { userName, password } = ev.target.elements;

    // יצרנו אובייקט לצורך שליחה לשרת
    const obj = {
        userName: userName.value,
        password: password.value,
    };

    fetch(`https://api.shipap.co.il/login`, {
        // מאפשר את שליחת העוגיות
        // לצורך שמירת החיבור מול השרת
        credentials: 'include',
        method: 'POST',
        // מגדיר לשרת איזה סוג נתונים אנחנו שולחים
        // במקרה שלנו: JSON
        headers: { 'Content-type': 'application/json' },
        // שליחת התוכן כ-JSON
        body: JSON.stringify(obj),
    })
    // כשהתקבלה תגובה מהשרת, הפונקציה מופעלת
    .then(res => {
        // אם הפעולה הצליחה (סטטוס 200)
        if (res.ok) {
            // המרת הנתונים לג'סון
            return res.json();
        } else {
            // קבלת השגיאה וזריקת שגיאה
            return res.text().then(x => {
                throw new Error(x);
            });
        }
    })
    // במקרה של הצלחה
    .then(data => {
        alert(`ההתחברות של ${data.fullName} בוצעה בהצלחה!`);
        ev.target.style.display = 'none';
    })
    // כשיש שגיאה
    .catch(err => {
        console.log(err.message);
    });
}
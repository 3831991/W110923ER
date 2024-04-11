const userElem = document.querySelector("#loggedin");
const loginElem = document.querySelector("#login");

function login(ev) {
    // מבטל את פעולת ברירת המחדל של הדפדפן
    // במקרה שלנו הוא מבטל את השליחה ומעבר לדף אחר
    ev.preventDefault();
    startLoader();

    // קבילנו את האינפוטים
    // const userName = ev.target.elements.userName;
    // const password = ev.target.elements.password;
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
        document.querySelector("#fullName").innerText = data.fullName;
        userElem.style.display = 'block';
        loginElem.style.display = 'none';
    })
    // כשיש שגיאה
    .catch(err => {
        alert(err.message);
    })
    .finally(stopLoader);
}

function logout() {
    startLoader();

    fetch(`https://api.shipap.co.il/logout`, {
        credentials: 'include',
    })
    .then(res => {
        if (res.ok) {
            userElem.style.display = 'none';
            loginElem.style.display = 'block';
        }
    })
    .finally(stopLoader);
}

function getUserStatus() {
    startLoader();

    fetch(`https://api.shipap.co.il/login`, {
        credentials: 'include',
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        } else {
            return res.text().then(x => {
                throw new Error(x);
            });
        }
    })
    .then(data => {
        document.querySelector("#fullName").innerText = data.fullName;
        userElem.style.display = 'block';
    })
    .catch(err => {
        loginElem.style.display = 'block';
    })
    .finally(stopLoader);
}

function startLoader() {
    document.querySelector(".loaderFrame").style.display = "flex";
}

function stopLoader() {
    document.querySelector(".loaderFrame").style.display = "none";
}
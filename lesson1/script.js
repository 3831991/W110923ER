function welcomeMessage() {
    alert("ברוכים הבאים לאתר שלי");
}

function showMessage() {
    console.log("ההודעה נשלחה בהצלחה");
}

function welcomeName() {
    var name = document.getElementById("userName").value;

    alert("ברוך הבא " + name);
}

function multi50() {
    var n = document.getElementById("num").value;

    alert(n * 50);
}
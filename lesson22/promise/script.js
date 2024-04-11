function checkIsValid() {
    startLoader();
    setMessage("טוען...");

    new Promise((resolve, reject) => {
        // מגדיר את המשתנה באופן רנדומלי
        // אחד או אפס
        const isValid = Math.floor(Math.random() * 2);

        if (isValid) {
            setTimeout(() => {
                resolve("Success");
            }, 1000 * 2);
        } else {
            setTimeout(() => {
                reject("Error");
            }, 1000 * 3);
        }
    })
    .then(x => {
        setMessage("הפעולה בוצעה בהצלחה", "blue");
    })
    .catch(x => {
        setMessage("שגיאה בביצוע הפעולה", "red");
    })
    .finally(() => {
        console.log("הסתיימה הפעולה");
        stopLoader();
    });
}

function startLoader() {
    document.querySelector(".loader").style.display = "block";
}

function stopLoader() {
    document.querySelector(".loader").style.display = "none";
}

function setMessage(message, color = "black") {
    const elem = document.querySelector("#message");

    elem.innerText = message;
    elem.style.color = color;
}
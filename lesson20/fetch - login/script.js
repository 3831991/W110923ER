function login(ev) {
    ev.preventDefault();

    const { userName, password } = ev.target.elements;

    const obj = {
        userName: userName.value,
        password: password.value,
    };

    fetch(`https://api.shipap.co.il/login`, {
        credentials: 'include',
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(obj),
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
        alert(`ההתחברות של ${data.fullName} בוצעה בהצלחה!`);
        ev.target.style.display = 'none';
    })
    .catch(err => {
        console.log(err.message);
    });
}
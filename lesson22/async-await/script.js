async function getUserStatus() {
    const res = await fetch(`https://api.shipap.co.il/login`, {
        credentials: 'include',
    });

    if (res.ok) {
        const data = await res.json();

        console.log(data);
    } else {
        const err = await res.text();

        console.log(err)
    }

    console.log("Finally");
}

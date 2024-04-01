function showContacts() {
    fetch("https://api.shipap.co.il/contact")
        .then(res => res.json())
        .then(data => {
            data.forEach(item => {
                const tr = document.createElement("tr");

                tr.innerHTML = `
                    <td>${item.id}</td>
                    <td>${item.createTime}</td>
                    <td>${item.fullName}</td>
                    <td>${item.phone}</td>
                    <td>${item.email}</td>
                    <td>${item.message}</td>
                `;

                document.querySelector('tbody').appendChild(tr);
            });
        });
}
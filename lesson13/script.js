const tbody = document.querySelector('tbody');

for (const p of products) {
    const tr = document.createElement('tr');

    tr.innerHTML = `
        <td>${p.id}</td>
        <td>${p.name}</td>
        <td>${p.price}</td>
        <td>${p.discount}</td>
        <td>${p.madeIn}</td>
        <td>${p.color}</td>
    `;

    tbody.appendChild(tr);
}
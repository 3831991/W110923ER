const tbody = document.querySelector('tbody');

for (const p of products) {
    const tr = document.createElement('tr');

    tr.innerHTML = `
        <td>${p.id}</td>
        <td>${p.name}</td>
        <td style="font-size: ${p.price}px">${p.price}</td>
        <td>${p.discount || 0}%</td>
        <td>${p.madeIn}</td>
        <td style="background-color: ${p.color}">${p.color}</td>
    `;

    tbody.appendChild(tr);
}
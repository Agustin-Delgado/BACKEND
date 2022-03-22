const table = document.getElementById("table");

fetch('http://localhost:8080/api/productos-test', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(res => res.json())
    .then(data => {
        data.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.nombre}</td>
                <td>${item.codigo}</td>
                <td>${item.precio}</td>
                <td>${item.stock}</td>
                <td><img src='${item.tumbnail}' width="40px"></td>
                <td>
            </td>
            `;
            table.appendChild(tr);
        });
    })
    .catch(error => {
        console.log(error)
    });

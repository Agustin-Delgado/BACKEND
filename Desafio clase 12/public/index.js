const socket = io.connect();

const title = document.querySelector("#title");
const price = document.querySelector("#price");
const tumbnail = document.querySelector("#tumbnail");
const button = document.querySelector("#send");

let date = {
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear()
}

let time = {
    hour: new Date().getHours(),
    minute: new Date().getMinutes(),
    seconds : new Date().getSeconds()
}


button.addEventListener("click", () => {
    socket.emit("product", title.value, price.value, tumbnail.value);
});

socket.on("products", (products) => {

    document.getElementById("table").innerHTML = "";
    products.forEach((product) => {
        const tr = document.createElement("tr");
        const tdTitle = document.createElement("td");
        const tdPrice = document.createElement("td");
        const tdTumbnail = document.createElement("td");
        const img = document.createElement("img");

        tdTitle.innerText = product.title;
        tdPrice.innerText = product.price;
        img.src = product.tumbnail;

        tr.appendChild(tdTitle);
        tr.appendChild(tdPrice);
        tr.appendChild(tdTumbnail).appendChild(img);
        document.getElementById("table").appendChild(tr);
    });

});

button.addEventListener('click', () => {
    socket.emit('message', input.value)
});

function addMessage(e) {
    const mensaje = {
        author: document.getElementById('username').value,
        text: document.getElementById('texto').value
    };
    socket.emit('new-message', mensaje);
    return false;
}

function render(data) {
    const html = data.map((elem) => {
        return(`
        <div>
            <strong style="color:blue;">${elem.author}</strong> <span style="color:brown;">[${date.day}/${date.month}/${date.year} ${time.hour}:${time.minute}:${time.seconds}]<span> :
            <em style="color:green;">${elem.text}</em> 
        </div>`)
    }).join(" ");
    document.getElementById('messages').innerHTML = html;
}

socket.on('messages', function(data) { render(data); });

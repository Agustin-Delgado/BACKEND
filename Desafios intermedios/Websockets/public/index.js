const socket = io.connect()

const input = document.querySelector('#message')
const button = document.querySelector('#send')
button.addEventListener('click', () => {
    socket.emit('message', input.value)
});

socket.on('messages', messages => {
    document.getElementById('viewMessage').innerHTML = '';
    messages.forEach(message => {
        const li = document.createElement('li')
        li.innerText = `ID: ${message.socketid} -> Mensaje: ${message.text}`
        document.querySelector('#viewMessage').appendChild(li)
    })
});


let net = require('net');

let server = net.createServer((socket) => {
    socket.on('data', () => {
        socket.write('你好');
    })

    socket.on('end', () => {
        console.log('断开链接')
    })

    socket.write('welcome');
});



server.listen(3000, () => {
    console.log('listened')
})
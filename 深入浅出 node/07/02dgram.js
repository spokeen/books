let dgram = require('dgram');


let server = dgram.createSocket('udp4');


server.on('message', (data) => {
    console.log(data)
})

server.on('listening', () => {
    console.log(111)
})

server.bind(8080)
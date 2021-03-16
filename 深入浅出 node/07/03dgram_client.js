let dgram = require('dgram');


let server = dgram.createSocket('udp4');


let buffer = new Buffer('great');
server.send(buffer,8080,'localhost',() => {
    server.close();
})
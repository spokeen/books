

let result = 100;

addEventListener('message', (res) => {
    result = res;
    console.log('woker', res);
})


setTimeout(() => {
    postMessage('message woker');
}, 3000)
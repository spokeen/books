function add(p1,p2) {
    return Promise.all([p1,p2]).then(([v1,v2]) => {
        return v1 + v2;
    }).then((res) => {
        console.log(res+1);
        return res;
    })
}

let pp = add(Promise.resolve(1),Promise.resolve(2));

pp.then((res) => {
    console.log(res);
})


pp.then(null,(res) => {
    console.log(res);
}).then((res) => {
    console.log(aaaa);
    console.log(res+'dd');
}, () => {
    console.log('err');
}).catch(() => {
    console.log('outer err');
})


let p = pp.then((res) => {
    console.log(res);
})

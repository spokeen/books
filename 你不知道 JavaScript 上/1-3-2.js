try {
    throw new Error();
} catch(e) {
    var j = 9;
}
console.log(e); // not defined


try {
    let i =0;
} catch(e) {}
console.log(i)
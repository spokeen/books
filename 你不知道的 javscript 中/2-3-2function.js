function spread(fn) {
    return Function.apply.bind(fn, null);
    
}


// let ff = spread(function(a,v) {
//     console.log(111);
// })


let p = [].concat(function() {
    console.log(111);
})
console.log(p)

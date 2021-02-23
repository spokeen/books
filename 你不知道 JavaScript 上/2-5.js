function Foo(){}

let a  = new Foo();

console.log('__proto__' in a);


let ob = {a:'aaa'},ss={a:'ccc'};
Object.defineProperty(ob, 'aaaa', {
    enumerable: true,
    writable: false,
    configurable: true,
    value: 222
})
 ss = Object.create(ob);



ss.__proto__ = {a:"ssss"};
console.log(ss.a);

console.log(ss.__proto__ === ob);

for(let key in ss) {
    console.log(key)
}

ss.aaaa = 11111;
console.log(ss.aaaa);


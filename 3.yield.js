/**
 * Created by yuan on 2018/1/19.
 */
let fs = require('fs')

function *gen() {
    console.log(1)
    let b = yield p1()
    console.log(2)
    return b
}

function p1(){
    fs.read
}

let it = gen()
let r1 = it.next()
console.log(r1);
let r2 = it.next()
console.log(r2);
let r3 = it.next()
console.log(r3);
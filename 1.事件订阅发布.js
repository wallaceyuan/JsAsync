/**
 * Created by yuan on 2018/1/19.
 */
let Promise = require('promise')

let p1 = new Promise((resolve,reject)=>{
    setTimeout(function () {
        resolve('p1完成')
    },100)
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(function () {
        reject('p2失败')
    },200)
})

p1.then(function (data) {
    eve.emit('ready','p1成功',data)
},function (data) {
    eve.emit('ready','p1失败',data)
})
p2.then(function (data) {
    eve.emit('ready','p2成功',data)
},function (data) {
    eve.emit('ready','p2失败',data)
})

//事件订阅
let EventEmitter = require('events');
let eve = new EventEmitter();
let html = {}
eve.on('ready',function (key,value) {
    html[key] = value
    if(Object.keys(html).length == 2){
        console.log(html)
    }
})
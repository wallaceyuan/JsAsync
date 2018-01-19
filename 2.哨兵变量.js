/**
 * Created by yuan on 2018/1/19.
 */
let Promise = require('promise')

//哨兵变量
function render(length,cb) {
    let html = {}
    return function (key,value) {
        html[key] = value
        if(Object.keys(html).length == length){
            cb(html)
        }
    }
}

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

let done = render(2,function (data) {
    console.log(data)
})

p1.then(function (data) {
    done('p1成功',data)
},function (data) {
    done('p1失败',data)
})

p2.then(function (data) {
    done('p2成功',data)
},function (data) {
    done('p2失败',data)
})
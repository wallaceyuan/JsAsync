/**
 * Created by yuan on 2018/1/19.
 */
let fs = require('fs');
function readFile(filename) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, function (err, data) {
            if (err)
                reject(err);
            else
                resolve(data);
        })
    })
}
function *read() {
    let template = yield readFile('./template.txt');
    let data = yield readFile('./data.txt');
    return template + '+' + data;
}
co(read).then(function (data) {
    console.log(data);
}, function (err) {
    console.log(err);
});
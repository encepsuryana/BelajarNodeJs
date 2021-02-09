var fs = require('fs');
var data = fs.readFileSync('synchronous.txt');

console.log('MULAI');

fs.readFile('asynchronous.txt', function (err, data) {
    if(err) {
        return console.error(err)
    }
    console.log('File ini dibaca secara asynchronous: ' + data.toString());
});

console.log('File ini dibaca secara synchronous: ' + data.toString());

console.log('SELESAI');
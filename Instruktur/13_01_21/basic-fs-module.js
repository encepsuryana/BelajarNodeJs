let fs = require('fs');
let data = fs.readFileSync('synchronous.txt');

console.log('MULAI');

fs.readFile('asynchronous.txt', function(err, data){
    if (err) {
        return console.log(err);
    }
    console.log('File Ini dibaca secara Asynchronous: '+ data.toString());
});

console.log('File Ini dibaca secara Synchronous: '+ data.toString());
console.log('SELESAI');
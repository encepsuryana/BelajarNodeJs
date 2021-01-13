let fs = require('fs');
let data = fs.readFileSync('asynchronous.txt');

console.log('MULAI');

fs.readFile('asynchronous.txt',function(err,data){
    if (err){
        return console.log(err);
    }
    console.log('File ini dibaca secara Asynchronous: '+data.toString());
});

console.log('File ini dibaca secara Synchronous: '+data.toString());
console.log('SELESAI');

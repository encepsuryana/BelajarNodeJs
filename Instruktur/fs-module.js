// Variable Global
var fs = require('fs');
var data = fs.readFileSync('synchronous.txt');

// Console Log terminal Start
console.log('START');

// Membaca File Asynchronous pada dile TXT
fs.readFile('asynchronous.txt', function(err, data){
    // Menampilkan jika kondisi file error
        if (err) {
        return console.error(err);
    }
    // Console Log Menampilkan data secara Asyncronous
    console.log('File Ini dibaca secara asychronous: ' + data.toString());
});

// Console Log Menampilkan data secara Syncronous
console.log('File Ini dibaca secara sychronous: ' + data.toString());

// Console Log terminal Start
console.log('STOP');
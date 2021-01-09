var fs = require('fs');

console.log('Start');

fs.readFile('asyncronous.txt', function(err, data){
    if(err) {
        return console.error(err);
    }
    console.log('File ini dibaca secara ansyncronous' + data.toString());
});

var data = fs.readFileSync('syncronous.txt');
console.log('File ini dibaca secara syncronous' + data.toString());

console.log('Stop');
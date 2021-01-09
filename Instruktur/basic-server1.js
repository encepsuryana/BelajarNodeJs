var http = require('http');
var message = require('./modul-pesan.js');

http.createServer(function(req, res){
    res.write(message.message());
    // res.write('');
    res.end();

    // perintah untuk melihat server berjalan
    console.log('Server Running!');
}).listen(1234);
var http  = require('http');
var pesan = require('./modul-pasan');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(pesan.message());
}).listen(1234);

console.log('Server Running!');
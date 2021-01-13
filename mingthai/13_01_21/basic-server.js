var http  = require('http');
var pesan = require('./modul-pesan');

http.createServer(function(req,res){
    // res.writeHead(200,{'Content-Type': 'text/html'});
    // res.end(pesan.message());
    res.write(pesan.message());
    res.end();
}).listen(1234); 

console.log('Server Running!'); 

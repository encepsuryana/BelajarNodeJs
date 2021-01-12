var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.end('<h1>Hello World Node Js !</h1>');
}).listen(1234); 

console.log('Server Running!');

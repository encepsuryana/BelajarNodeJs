var http = require('http');

http.createServer(function(req, res){
    // res.writeHead(200, {'Content-type': 'text/html'});
    res.write('<h1>Selamat datang di node.js</h1>');
    res.end();
    // console.log('server running!');
}).listen(1234);
let http = require('http');

http.createServer(function(req, res){
    res.write('<h1>Ini Server</h1><br><h2>Server Berhasil Dibuat</h2>');
    // res.write('');
    res.end();
}).listen(1234);
// Untuk menampilkan server berjalan
console.log('Server Berjalan');
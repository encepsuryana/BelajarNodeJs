let http = require('http');
let pesan = require('./module-pesan');

http.createServer(function(req, res){
    res.write('<h1>Ini Server</h1><h2>Server Berhasil Dibuat</h2>');
    res.write(pesan.message());
    res.end();
}).listen(1234);
// Untuk menampilkan server berjalan
console.log('Server Berjalan');
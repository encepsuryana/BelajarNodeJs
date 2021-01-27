var database_mysql = require('mysql');

var koneksi = database_mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

koneksi.connect(function(err){
    if(err) {
        console.log('Koneksi Error!' + err.stack);
        return;
    }
    console.log('Koneksi Berhasil dengan ID ' + koneksi.threadId);
});
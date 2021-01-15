var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

connection.connect(function(err) {
    if(err) {
       throw err;
    }

    console.log('Koneksi Database Success!');
    connection.query('CREATE DATABASE belajarnodejs', function(err, result) {
        if(err) {
            throw err;
        }

        console.log('Database Berhasil dibuat!');
        connection.destroy();
    });
});
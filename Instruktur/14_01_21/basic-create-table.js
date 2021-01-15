var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'belajarnodejs'
});

connection.connect(function(err) {
    if(err) {
       throw err;
    }

    console.log('Koneksi Database Success!');
    var sql = 'CREATE TABLE module(title VARCHAR(255), description VARCHAR(255))';
    connection.query(sql, function(err, result) {
        if(err) {
            throw err;
        }

        console.log('Table Berhasil dibuat!');
        connection.destroy();
    });
});
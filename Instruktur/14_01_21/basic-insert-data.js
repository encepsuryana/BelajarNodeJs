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

    var sql = `INSERT INTO module(title, description)
                VALUES('NodeJs Introduction', 'Pengenalan tentang NodeJs')`;
    connection.query(sql, function(err, result) {
        if(err) {
            throw err;
        }

        console.log('Data Berhasil dimasukkan!');
        connection.destroy();
    });
});
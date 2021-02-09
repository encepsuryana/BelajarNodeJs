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

    var sql = "SELECT * FROM module";
    connection.query(sql, function(err, result, fields) {
        if(err) {
            throw err;
        }

        console.log(result);
        connection.destroy();
    });

    
});
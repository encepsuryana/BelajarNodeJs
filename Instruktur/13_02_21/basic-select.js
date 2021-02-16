const mysql = require('mysql');

const koneksi = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs'
});

koneksi.connect(function (err) {
    if (err) {
        console.error('Error koneksi: ' + err.stack);
        return;
    }

    console.log('database terkoneksi');
    let sql_query = `SELECT * FROM customers`;
    koneksi.query(sql_query, function (err, result, fields) {
        if (err) {
            throw err;
        }

        console.log(result);
        koneksi.destroy();
    });
});
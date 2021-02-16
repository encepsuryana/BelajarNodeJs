const mysql = require('mysql');

const koneksi = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

koneksi.connect(function (err) {
    if (err) {
        console.error('Error koneksi: ' + err.stack);
        return;
    }

    console.log('database terkoneksi');
    let sql_query = `CREATE DATABASE nodejs`;
    koneksi.query(sql_query, function (err, result) {
        if (err) {
            throw err;
        }

        console.log('Database nodejs telah dibuat');
        koneksi.destroy();
    });
});
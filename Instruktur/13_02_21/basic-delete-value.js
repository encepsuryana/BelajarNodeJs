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
    let sql_query = `DELETE FROM customers WHERE id=2`;
    koneksi.query(sql_query, function (err, result) {
        if (err) {
            throw err;
        }

        console.log('Data id customers 2 telah hapus');
        koneksi.destroy();
    });
});
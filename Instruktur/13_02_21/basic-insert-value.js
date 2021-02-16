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
    let sql_query = `INSERT INTO customers(email, nama_lengkap)
                    VALUES('babastudio1@gmail.com','Baba Studio 1')`;
    koneksi.query(sql_query, function (err, result) {
        if (err) {
            throw err;
        }

        console.log('1 Data ditambahkan ke table customers');
        koneksi.destroy();
    });
});
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
    let sql_query = `CREATE TABLE IF NOT EXISTS customers(
                        id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        email varchar(255) NOT NULL,
                        nama_lengkap varchar(255) NOT NULL,
                        aktif BOOLEAN DEFAULT false
    )`;
    koneksi.query(sql_query, function (err, result) {
        if (err) {
            throw err;
        }

        console.log('Tabel customers telah dibuat');
        koneksi.destroy();
    });
});
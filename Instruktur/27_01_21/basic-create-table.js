var database_mysql = require('mysql');

var koneksi = database_mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'restapi'
});

koneksi.connect(function (err){
    if(err) {
        console.log('Koneksi Error!' + err.stack);
        return;
    }

    console.log('Koneksi database berhasil!');

    let query_sql = `CREATE TABLE IF NOT EXISTS siswa(
                        id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        nama_depan varchar(100) NOT NULL,
                        nama_belakang varchar(100) NOT NULL,
                        tgl_lahir DATE NOT NULL,
                        alamat TEXT,
                        email varchar(255) NOT NULL,
                        aktif BOOLEAN DEFAULT false)`;
    koneksi.query(query_sql, function(err) {
       if (err) {
           throw err;
       }    

    console.log('Tabel Customers berhasil dibuat!');
    koneksi.destroy();
    }); 
});
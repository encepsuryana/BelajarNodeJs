var database_mysql = require('mysql');

var koneksi = database_mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'restapi'

});

koneksi.connect(function(err){
    if(err) {
        console.log('Koneksi Error!' + err.stack);
        return;
    }
    console.log('Koneksi database Berhasil!');

    let query_sql = `CREATE TABLE IF NOT EXISTS customers(
                        id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        email varchar(255) NOT NULL,
                        nama_lengkap varchar(255) NOT NULL,
                        aktif BOOLEAN DEFAULT false)`;
    koneksi.query(query_sql,function(err){
        if(err){
            throw err;
        }
    console.log('Table Customer Berhasil dibuat!');
    koneksi.destroy();
        

    });

});




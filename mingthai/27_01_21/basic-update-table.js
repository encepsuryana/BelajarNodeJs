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

    let query_sql = `UPDATE customers SET nama_lengkap='Thong Ming Thai' WHERE id=1`;

    koneksi.query(query_sql,function(err){
        if(err){
            throw err;
        }
    console.log('Record Berhasil diupdate!');
    koneksi.destroy();
        

    });

});




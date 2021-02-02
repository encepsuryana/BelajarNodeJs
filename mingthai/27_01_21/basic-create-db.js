var database_mysql = require('mysql');

var koneksi = database_mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

koneksi.connect(function(err){
    if(err) {
        console.log('Koneksi Error!' + err.stack);
        return;
    }
    console.log('Koneksi database Berhasil!');

    let query_sql = `CREATE DATABASE restapi`;
    koneksi.query(query_sql,function(err){
        if(err){
            throw err;
        }
    console.log('Database Restapi Berhasil dibuat!');
    koneksi.destroy();
        

    });

});




var mysql = require('mysql');

var koneksi = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'restapi'
});

// Modul 1
// koneksi.connect(function (err){
//     if(err){
//         console.log('koneksi error'+err.stack);
//         return;
//     }

//     console.log('sukses terkoneksi dengan id ' + koneksi.threadId);
// });

// Create Databse
// koneksi.connect(function (err){
//     if(err){
//         console.log('koneksi error'+err.stack);
//         return;
//     }

//     koneksi.query('CREATE DATABASE restapi', function(err, result){
//         if(err) {
//             throw err;
//         }

//         console.log('Database telah dibuat!');
//         koneksi.destroy();
//     });
// });

// Membuat Table di database
// koneksi.connect(function (err){
//     if(err){
//         console.log('koneksi error'+err.stack);
//         return;
//     }

//     let create_table = 'CREATE TABLE IF NOT EXISTS customers(id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, email VARCHAR(255) NOT NULL, nama_lengkap VARCHAR(255) NOT NULL, aktif BOOLEAN DEFAULT false)';
//     koneksi.query(create_table, function(err, result){
//         if(err) {
//             throw err;
//         }

//         console.log('TABEL Customers telah dibuat!');
//         koneksi.destroy();
//     });
// });

// Insert Data
// koneksi.connect(function (err){
//     if(err){
//         console.log('koneksi error'+err.stack);
//         return;
//     }

//     let insert_data = 'INSERT INTO customers(email, nama_lengkap, aktif) VALUES("encep.suryanajr@gmail.com", "Encep Suryana", 1)';
//     koneksi.query(insert_data, function(err, result){
//         if(err) {
//             throw err;
//         }

//         console.log('Data Customers telah ditambahkan!');
//         koneksi.destroy();
//     });
// });

// Update Data
// koneksi.connect(function (err){
//     if(err){
//         console.log('koneksi error'+err.stack);
//         return;
//     }

//     let update_data = 'UPDATE customers SET email = "encep@gmail.com" WHERE id=1';
//     koneksi.query(update_data, function(err, result){
//         if(err) {
//             throw err;
//         }

//         console.log('Data Customers telah diupdate!');
//         koneksi.destroy();
//     });
// });

koneksi.connect(function (err){
    if(err){
        console.log('koneksi error'+err.stack);
        return;
    }

    let tampil_data = 'SELECT * FROM customers';
    koneksi.query(tampil_data, function(err, result, fields){
        if(err) {
            throw err;
        }

        console.log(result);
        koneksi.destroy();
    });
});
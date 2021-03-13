var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs'
});

conn.connect(function (err) {
    if (err) {
        console.error('Koneksi Error: ' + err.stack);
        return;
    }

    //Create Database
    console.log('Terkoneksi dengan ID: ' + conn.threadId);

    //VAR CREATE DATABASE    
    // //Variable Database
    //let data_query = 'Database Node Js ';

    //  //Query Create Database
    //let query = `CREATE DATABASE nodejs`;


    // //VAR CREATE TABLE
    // //Variable Database
    // let data_query = 'Table Module ';

    //  //Query Create Table
    // let query = `CREATE TABLE module(
    //              title VARCHAR(255),
    //              description VARCHAR(255)   
    //)`;

    // //VAR INSERT TABLE
    // //Variable Database
    // let data_query = '1 Value';

    // //Query Insert Value
    // let query = `INSERT INTO module (title,description)
    //              VALUES ('Node js', 'Dasar dasar Node Js'),
    //                     ('Node js 1', 'Dasar dasar Node Js 1')`;

    // //VAR ALTER TABLE ADD COLUMN
    // //Variable Database
    // let data_query = '1 Kolom ';

    // //Query Insert Value
    // let query = `ALTER TABLE module
    //              ADD dummy varchar(11)`;



    // //VAR ALTER TABLE MODIFY COLUMN FIRST
    // //Variable Database
    // let data_query = '1 Kolom ';

    // //Query Insert Value
    // let query = `ALTER TABLE module
    //              MODIFY id int(11) 
    //              FIRST `;
   
    // //VAR ALTER TABLE MODIFY COLUMN AFTER
    // //Variable Database
    // let data_query = '1 Kolom ';

    // //Query Insert Value
    // let query = `ALTER TABLE module
    //              MODIFY COLUMN description varchar(255)
    //              AFTER id`;
            
    // //VAR ALTER DROP COLUMN
    // //Variable Database
    // let data_query = '1 Kolom ';

    // //Query Insert Value
    // let query = `ALTER TABLE module
    //              DROP COLUMN dummy`;

    // //VAR UPDATE VALUE
    // //Variable Database
    // let data_query = '1 Value diubah';

    // //Query Insert Value
    // let query = `UPDATE module SET title = 'Node JS 0',Description = 'Dasar dasar Node Js 0'
    //               WHERE id = 1`;


    // //VAR DELETE VALUE
    // //Variable Database
    // let data_query = '1 Value dihapus';

    // //Query Insert Value
    // let query = `DELETE FROM module
    //               WHERE id = 3`;

    //VAR SELECT VALUE
    //Variable Database
    let data_query = 'Menampilkan data';

    //Query Insert Value
    let query = `SELECT * FROM module`;

    conn.query(query, function (err, result,fields) {
        if (err) {
            throw (err);
        }

        console.log(data_query + ' telah dibuat!');
        console.log(result);
        conn.destroy();
    })
});
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

//VAR INSERT TABLE
    //Variable Database
    let data_query = '1 Value';

     //Query Insert Value
    let query = `INSERT INTO module (title,description)
                 VALUES ('Node js', 'Dasar dasar Node Js'),
                        ('Node js 1', 'Dasar dasar Node Js 1')`;

    



    conn.query(query, function (err, result) {
        if (err) {
            throw (err);
        }

        console.log(data_query + ' telah dibuat!');
        conn.destroy();
    })
});
var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

conn.connect(function(err) {
   if(err){
       console.error('Koneksi Error: '+err.stack);
       return;
   }

   //Create Database
   console.log('Terkoneksi dengan ID: '+conn.threadId);
   
   let query = `CREATE DATABASE nodejs`;

   conn.query(query, function(err,result){
        if(err){
          throw(err);
        }   
   
        console.log('Database Node Js telah dibuat!');
        conn.destroy();
    })
});
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

connection.connect(function(err) {
    if (err) {
        console.log('error connection: ' + err.stack);
        return;
    }

    console.log('terkonesi dengan id ' + connection.threadId);
});
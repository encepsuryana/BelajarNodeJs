
var mysql = require('mysql')

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_acaks'
})

conn.connect((err, res) => {
    if(err){
        
        // console.log('err: '+ err.stack)
    }

    // console.log('connected: '+conn.threadId)
})


module.exports.conn = conn




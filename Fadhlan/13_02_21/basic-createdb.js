
var mysql = require('mysql')

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    // database: 'db_acaks'
})

conn.connect((err, res) => {
    if(err){
        
        // console.log('err: '+ err.stack)
    }

    // console.log('connected: '+conn.threadId)
    var query = `CREATE DATABASE NODEJS`
    conn.query(query,(err, res) => {
        if(err) {
            
            console.log('== error ==')
            console.log(err)



        }
        console.log('DB has been created')
        conn.destroy()

    })
})


module.exports.conn = conn




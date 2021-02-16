
var mysql = require('mysql')

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs'
})

conn.connect((err, res) => {
    if(err){
        
        // console.log('err: '+ err.stack)
    }

    // console.log('connected: '+conn.threadId)
    var query = `CREATE TABLE IF NOT EXISTS customer(
        ID int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        EMAIL VARCHAR(255) NOT NULL, 
        NAMA_LENGKAP VARCHAR(255) NOT NULL,
        AKTIF BOOLEAN DEFAULT false 
    ) `
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




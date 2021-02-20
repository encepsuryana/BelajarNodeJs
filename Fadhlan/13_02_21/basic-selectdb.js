
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
    var query = `SELECT DATE_FORMAT(created_at, '%Y-%c-%d %H:%i:%s') AS title_json FROM customer`
    conn.query(query,(err, res,fields) => {
        if(err) {
            
            console.log('== error ==')
            console.log(err)



        }
        console.log('== val ==')
        console.log(res)
        // console.log(DATE_FORMAT)
        conn.destroy()

    })
})


module.exports.conn = conn




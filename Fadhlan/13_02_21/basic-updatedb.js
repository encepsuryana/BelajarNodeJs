
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
    var query = `
        UPDATE customer
            SET EMAIL='tester2@gmail.com'
        WHERE ID='1'
    `
    conn.query(query,(err, res) => {
        if(err) {
            
            console.log('== error ==')
            console.log(err)



        }
        console.log('Value has been updated')
        conn.destroy()

    })
})


module.exports.conn = conn




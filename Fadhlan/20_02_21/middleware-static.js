const express = require('express')
const app = express()


// app.use(express.static('public'))

app.get('/', (req, res)=> {

    res.send('Hellow')

})

var port = 3000
app.listen(port, function() {
    console.log('running on port : '+ port)
})




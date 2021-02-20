
const express   = require('express')
const { request } = require('http')
const app       = express()

// app.get('/', (req, res)=> {

//     res.send('Hellow')

// })

// app.all('/', (req, res)=> {
//     res.send('All method')
// })

app.use((req, res, next)=> {
    console.log('The Time : '+ Date.now())
    next()
})


app.use((req, res, next)=> {
    console.log('Request Type : '+ req.method)
    next()
})



app.get('/', (req, res)=> {

    res.send('Hellow')

})


app.get('/user/:id', (req, res)=> {

    res.send('ID User: ')

})





var port = 3000
app.listen(port, function() {
    console.log('running on port : '+ port)
})








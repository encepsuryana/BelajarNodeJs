const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended : true}))

// let time = Date.now()
// app.use((req,res,next) => {
//     console.log('Time', time);
//     next();
// });

// app.use('/customer/:id', (req,res,next)=>{
//     console.log('Request Type : ', req.method);
//     next()
// })

app.get('/', (req,res) => {
    // res.send('GET ExpressJS');
    // console.log('GET ExpressJS');
    res.json({message : 'Selamat datang Di Pusat Data'});
});

// app.get('/customer/:id', (req,res) => {
//     res.send('Menampilkan User ID');
//     console.log('Menampilkan User ID');
// });

// app.use(express.static('public'));

let port = 3000;
app.listen(port, () => {
    console.log(`Server telah berjalan pada port : ${port}`)
})
const express    = require('express');
const bodyParser = require('body-parser');
const app        = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));






// app.use(function (req, res, next) {
//    console.log('Time', Date.now());
//    next(); 
// });

// app.use('/customers/:id', function (req, res, next) {
//    console.log('Request Type: ', req.method);
//    next(); 
// });

app.get('/', function (req, res) {
    // res.send('GET ExpressJs!');
    // console.log('GET ExpressJs!');
    res.json({message: "Selamat datang di pusat Data Customers!"});
});

// app.get('/customers/:id', function (req, res) {
//     res.send('Menampilkan User ID');
//     console.log('Menampilkan User ID');
// });

// 

let port = 3000;
app.listen(port, function () {
   console.log('Server Berjalan pada port : ' + port); 
});
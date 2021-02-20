const express = require('express');
const app     = express();

// app.get('/', function (req, res) {
//     res.send('Salam dari Express Js!');
// });

// app.all('/all', function (req, res) {
//     res.send('Salam dari ALL Express Js!');
// });

app.use(function (req, res, next){
    console.log('Time : ', Date.now());
    next();
});


app.use(function (req, res, next){
    console.log('Request Type: ', req.method);
    next();
});

app.get('/', function (req, res) {
    console.log('Salam dari Express Js!');
    res.send('Salam dari Express Js!');
});

app.get('/user/:id', function (req, res) {
    console.log('Menampilkan User ID');
    res.send('Menampilkan User ID');
});


const port = 8080;
app.listen(port, function(){
    console.log('Server Running di port: ' + port);
});



// SELECT JSON_OBJECT('title',title,'created_at',
//                     DATE_FORMAT(created_at, "%Y-%c-%d %H:%i:%s")) AS title_json 
//   FROM titles 
//  WHERE id = 1;
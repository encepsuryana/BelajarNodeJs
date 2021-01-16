const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Salam dari GET Express Js!');
});

app.all('/all', function(req, res){
    res.send('Salam dari ALL Express Js!');
});

let port = 1234;
app.listen(port, function(){
    console.log('Aplikasi berjalan di port : '+ port);
});
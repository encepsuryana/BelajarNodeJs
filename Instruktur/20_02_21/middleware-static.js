const express = require('express');
const app     = express();

app.use(express.static('public'));

const port = 8080;
app.listen(port, function(){
    console.log('Server Running di port: ' + port);
});

var http = require('http')

http.createServer((req, res) => {
    
    // res.writeHead(200, {'Content-Type' : 'text/html'})
    // res.end("<i style='font-size:50px;'>TESTING</i>")

    res.write("<i style='font-size:50px;'>TESTING</i>");
    res.end()
    console.log('Running')

}).listen(3000)









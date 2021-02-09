
var fs = require('fs')
var data = fs.readFileSync('synchronous.txt')

console.log('== Start ==')

fs.readFile('asynchronous.txt', (err, data) => {
    if(err) {
        
        console.log('== error ==')
        console.error(err)
        return err
        // throw err
    }

    console.log("Isi data Asinkron: "+ data.toString())

})

console.log("Isi data Sinkron: "+ data.toString())
// fs.readFileSync('synchronous.txt')











const fs = require ('fs')
const port = 3000

const server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'test/html'})
    fs.readFile('index.html',function(error,data){
        if(error){
            res.writeHead404
            res.write('Error:File Not Found')
        }else{
            res.write(data)
        }
        res.end()
    })
})

//in the terminal, print out "node app.js"
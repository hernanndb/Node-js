const http = require('node:http')
const dittojson = require('./pokemon/ditto.json')

const processRequest = (req,res) =>{
    const {method,url} = req
    


    switch (method) {
        case 'GET' :{
            switch (url) {
                case '/pokemon/ditto':{
                    res.setHeader('Content-Type', 'aplications/json; charset=utf-8')
                    return res.end(JSON.stringify(dittojson))
                }
                default:
                    res.statusCode = 404
                    return res.end('<h1>404<h1>')
            }
        }
        case 'POST' :
            switch (url){
                case '/pokemon':{
                    let body =''
                }
            }
        

    }
}

const server = http.createServer(processRequest)
server.listen(1235,() => {
    console.log(`Server Listening on port http:/localhost:1235`)
})
const http = require('node:http')// Modulo para conecciones http
const {findAvailablePort} = require('./10_free-port.js')

const desiredPort = process.env.PORT ?? 3000;
console.log(desiredPort)
const server = http.createServer((req,res) => {
    res.end("Hola mundo")
}) 

findAvailablePort(desiredPort).then(port => {
    server.listen(port,() => {
        console.log(`server listening on port http://localhost:${server.address().port}`)
    })
})

//Un servidor puede: Recibir una Peticion o Dar una Respuesta.
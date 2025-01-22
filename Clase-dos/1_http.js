const http = require('node:http') //modulo nativo http
const fs = require('node:fs')
const desiredPort = process.env.PORT ?? 1234 //Constante de Puerto deseado,en caso de no especificar = 3000


/*Mecanismo de Respuesta del Server-->Recibe peticion,devuelve respuesta*/
const processRequest = (req,res) =>{
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    if(req.url == '/'){
        res.end('Bienvenido a mi Página web')
    }
    else if(req.url == '/imagen'){
        
    fs.readFile('./Clase-dos/obi.jpg', (err,data)=>{
        if (err){
            res.statusCode = 500
            res.end('<h1>500 Internal Server Error<h1>')
        }
        else{
            res.setHeader('Content-Type', 'image/jpg')
            res.end(data)
        }})
    }
    
    else if(req.url == '/contacto'){
        res.end('Contacto')
    }
    else {
        res.statusCode = 404 //not found
        res.end('Error 404')
    }
    
}
/*Constante,Crea el servidor y ejecuta como parametro processRequest*/ 
const server = http.createServer(processRequest)

//Ordena al Servidor escuchar las peticiones del puerto Deseado
server.listen(desiredPort, () =>{
    console.log(`Server Listening on port http:/localhost:${desiredPort}`)
})
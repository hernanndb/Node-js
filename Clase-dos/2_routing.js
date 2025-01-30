const http = require('node:http')
const dittojson = require('./pokemon/ditto.json')

const processRequest = (req, res) => {
    const { method, url } = req;

    switch (method) {
        case 'GET': {
            switch (url) {
                case '/pokemon/ditto': {
                    res.setHeader('Content-Type', 'application/json; charset=utf-8');
                    return res.end(JSON.stringify(dittojson)); // Respuesta directa
                }
                default:
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                    return res.end('404 Not Found');
            }
        }

        case 'POST': {
            switch (url) {
                case '/pokemon': {
                    let body = '';
                    req.on('data', chunk => {
                        body += chunk.toString();
                    });

                    req.on('end', () => {
                        try {
                            const data = JSON.parse(body);
                            
                            // Enviar la respuesta solo una vez
                            res.setHeader('Content-Type', 'application/json; charset=utf-8');
                            res.statusCode = 201;  // Código 201 para creación exitosa
                            res.end(JSON.stringify(data));  // Enviar la respuesta
                            

                        } catch (error) {
                            res.statusCode = 400; // Código 400 si JSON no es válido
                            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                            return res.end('Invalid JSON'); // Asegúrate de que no se llame a res.end() dos veces
                        }
                    });
                    break;  // Este break es para finalizar el bloque de 'POST'
                }
                
            }
        };

       
    }
};

const server = http.createServer(processRequest)
server.listen(1234,() => {
    console.log(`Server Listening on port http:/localhost:1234`)
})
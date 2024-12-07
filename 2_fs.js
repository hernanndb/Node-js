const fs = require('node:fs') //Siempre especificar que es unmodulo nativo --->node: ...

/* Archivo.txt --> Es un archivo Complemento,para Probar el modulo File System*/
/*Node.js Es monohilo y basado en Eventos,
puede hacer procesos sincronos o asincronos*/


const stats =fs.statSync('./archivo.txt')

console.log
(
    stats.isFile(),//es un fichero?
    stats.isDirectory(), // Es una direccion?
    stats.isSymbolicLink(), //Es un enlace simbolico?
    stats.size, // Tamaño en bytes,no va con ()
)

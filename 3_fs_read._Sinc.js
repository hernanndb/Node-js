const fs = require('node:fs')

//---------------------------------------------------->
//Puedo leer ficheros de manera Sincrona y Asincrona.
/*Fs.readFileSync:Lee archivos de forma Sincronica
,pero por defecto me devuelve la info en bytes,por eso agregamos ,'utf-8'
como segundo parametro*/
//---------------------------------------------------->

console.log('Leyendo el Primer archivo.....')
const text = fs.readFileSync('./archivo.txt','utf-8')
console.log(text)
console.log('Leyendo el Segundo archivo....')
const text2 = fs.readFileSync('./archivo2.txt','utf-8')
console.log(text2)


//----------------------------------------->
/*Esta forma de leer archivos es Sincrona,
es decir hasta que no Termina la primer tarea,no avanza,
el flujo de Ejecucion se detiene
*/
//----------------------------------------------->
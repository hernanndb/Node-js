const fs = require('node:fs')

//------------------------------------------->
/*Como es una Funcion Asincrona,va a necesitar "Algo",
que le avice que hacer cuando termine de leer el codigo*/
//Pueden ser Callbacks,Promesas,etc

//Los Callbacks son Funciones que se Ejecutan cuando una tarea termina
//------------------------------------------->


console.log('Leyendo el Primer archivo.....')
const text = fs.readFile('./archivo.txt','utf-8', (err, text) =>{
    console.log(text)
} )

console.log('Leyendo el Segundo archivo....')
const text2 = fs.readFile('./archivo2.txt','utf-8',(err, text2) =>{
    console.log(text2)
})



const fs = require('node:fs/promises')

//------------------------------------------->
/*Como es una Funcion Asincrona,va a necesitar "Algo",
que le avice que hacer cuando termine de leer el codigo*/
//Pueden ser Callbacks,Promesas,etc

/*Para pasar a Promises const fs = require('node:fs/promises')*/
//------------------------------------------->


console.log('Leyendo el Primer archivo.....')
const text = fs.readFile('./archivo.txt','utf-8')
    .then(text => {console.log('Primer Texto:',text)})

console.log('Leyendo el Segundo archivo....')
const text2 = fs.readFile('./archivo2.txt','utf-8')
    .then(text2 => {console.log('Segundo Texto',text2)})

//------------------------------------------------------->
/*En caso de que no tuviera el node:fs/promises, Tambien podria usar,}
const fs=require('nodes:fs')
const {promisify} = require('node:util')
const readFilePromise = promisify(fs.readFile)
esto sirve para utilizar esa funcion con promises*/
//esto se utiliza solo cuando no existe el modulo nativo de promises

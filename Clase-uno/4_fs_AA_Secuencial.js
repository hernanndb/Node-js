//------------------------------------------->
/*Como es una Funcion Asincrona,va a necesitar "Algo",
que le avice que hacer cuando termine de leer el codigo*/
//Pueden ser Callbacks,Promesas,etc

/*EN CJS NO PUEDO LLAMAR AL AWAIT DIRECTAMENTE.
Para solucionar este inconveniente se utilizan funciones autoinvocadas IIFE.
Esto es una funcion anonima que se ejecuta al definirse.*/
//------------------------------------------->

const fs = require('node:fs/promises')

//IIFE
;(
   async ()=>{
    console.log('Leyendo el Primer archivo.....')
    const text = await fs.readFile('./archivo.txt','utf-8')
    console.log('Primer Texto:',text)
    console.log('Hacer cosas mientras lee el archivo ------>')

   }
)()

;(
    async ()=>{
 
     console.log('Leyendo el Segundo archivo....')
     const text2 = await fs.readFile('./archivo2.txt','utf-8')
     console.log('Segundo Texto',text2)
     console.log('Haciendo cosas mientras lee el texto2 --------->')
    }
 )()

const process = require('node:process')

//Argumentos de Entrada:
//console.log(process.argv)

//Control de proceso y salida
//precess.exit(0) ,0 si esta todo ok y 1 si tiene errores y debe forzar cierre

//Nos permite controlar eventos del proceso
//process.on(...), escuchar el proceso y despues ...

//Current working Directory , Nos dice desde que carpeta ejecuta el proceso
console.log(process.cwd())
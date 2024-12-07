const os = require('node:os') //Para importar modulo nativo- node: y el modulo

console.log('Información del sistema operativo:')
console.log('_______________________')

//Funciones de os------------------------->

console.log('Nombre del sistema operativo',os.platform()) 
console.log('Version del sistema operativo',os.release())
console.log('Arquitectura',os.arch())
console.log('CPUs', os.cpus()) // <--- Con esto mas adelante podremos escalar procesos con Node.js
console.log('Memoria libre',os.freemem()/1024/1024)
console.log('Memoria total', os.totalmem()/1024/1024)
console.log('Uptime',os.uptime()/60/60)
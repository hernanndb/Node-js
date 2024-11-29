//Commond JS Require Module Export:

function suma (a,b) {
    return a+b
}

//module.exports= sum 

/* Exporto la funcion necesaria
de esta forma al recibir la funcion puedo renombrarla de manera comoda
aunque lo recomendable es forzar a que se usen los mismos nombres
por cuestiones de claridad y orden en el codigo */

//-----------------------------------------------//

module.exports = {
    suma
}

/*En este caso al encerrarlo en un objeto,obligo a que al recibir,
tenga que descomprimir el objeto.
Ej: const= {sum} = require(`./suma.js´)*/ 
const path =require('node:path')

// barra separadora de carpetas segun OS:
console.log(path.sep)


//unir rutas con path.join
const filePath = path.join('subfolder','test.txt') //texto de prueba
console.log(filePath)

//Para conseguir el Nombre del fichero
const base = path.basename('subfolder/test.txt')
console.log(base)

//Puedo indicarle que evite o ignore la extension:
const base1 = path.basename('subfolder/test.txt','.txt')
console.log(base1)

//Me devuelve la extension del archivo
const extension = path.extname('subfolder/test.txt')
console.log(extension)
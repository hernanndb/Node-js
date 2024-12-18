const fs = require('node:fs/promises')
const process = require('node:process')
const path = require('node:path')
const pc = require('picocolors')

const folder =process.argv[2] ?? '.'
// Process argv devuelve una lista, 0=binario, 1=Node ,2=carpeta donde se ejecuta el proceso

async function ls (folder) {
    let files
    try{
         files = await fs.readdir(folder)
    }
    catch{
        console.error(pc.red(`No se pudo leer el directorio: ${folder}`))
        process.exit(1)
    }

const filePromises = files.map(async file =>{
    const filePath = path.join(folder, file)
    let stats
    try{
        stats = await fs.stat(filePath) //stat => informacion del archivo
    }
    catch{
        console.log(`No se pudo leer el archivo ${filePath}`)
        process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : '-'
    const fileSize = stats.size.toString()
    const fileModified =stats.mtime.toLocaleString()

    return `${pc.white(fileType)} ${pc.blue(file.padEnd(20))} ${pc.green(fileSize.toString().padStart(10))} ${pc.yellow(fileModified)}`
})
    const fileInfo =await Promise.all(filePromises)
    fileInfo.forEach(fileInfo => {console.log(fileInfo)}
)
}
ls(folder)
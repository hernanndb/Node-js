const express = require('express') //Importo el framework de express
const movies = require('./movies.json')


const app = express() //inicio express 
app.disable('x-powered-by') //desabilito el header por defecto que dice que se esta utilizando express
app.use(express.json())   //Activa y llama al middlerware que escucha el body y lo restructura en un objeto
app.get('/', (req, res) => {
    res.json ({ message: 'Hola Mundo' })
})

app.get('/movies', (req,res) => {
    const { genre } = req.query
    if (genre) {
        const filteredMovies = movies.filter(
            movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase()))
        return res.json(filteredMovies)
    }
    res.json (movies)
})

app.get('/movies/:id', (req,res) =>{ // :id,es un segmento dinamico , el id va a varias segun el recurso que estamos tratando
    const { id } = req.params
    const movie = movies.find(movie =>movie.id === id)
    if (movie) return res.json(movie)
    res.status(404).json({ message: 'Movie not found'})

})

app.post('/movies'), (req,res) =>{
    const { title, year, director, genre, duration, rate, poster } = req.body
}

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
})
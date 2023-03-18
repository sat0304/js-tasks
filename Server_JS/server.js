const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express(0);
const db = require('./db')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
    res.json({ info: 'This is movie database for learning  Node JS' })
  })

app.get('/movies', db.getMovies);
app.get('/movie/:id', db.getMovieById);
app.get('/movie/:movieName', db.getMovieByName);
app.get('/movie/:releaseYear', db.getMovieByYear);
app.post('/genre', db.createGenre);
app.get('/genre/:id', db.getGenreById);
app.get('/genre/:description', db.getGenreByName);

app.listen(PORT, () => console.log(`Server works fine at ${PORT}`));


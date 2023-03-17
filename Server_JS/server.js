// const http = require('http');
const os = require('os');

// http.createServer((req, res) => {
//     console.log(req.url);
//     console.log(req.headers);
//     console.log(req.method);
//     res.writeHead(200,{'Content-Type': 'text/plain'});
//     res.end('I, programer.');
// }).listen(3000, () => console.log('server works fine!'));

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());


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


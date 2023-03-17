const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'movie_user',
    password: 'Spges3spges',
    host: 'localhost',
    port: 5432,
    database: 'movie_db',
});

module.exports = pool;

const getMovies = (req, res) => {
    pool.query('SELECT * FROM movie ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
  };

  const getMovieById = (req, res) => {
    const id = parseInt(req.params.id)
  
    pool.query('SELECT * FROM movie WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
  };

  const getMovieByName = (req, res) => {
    const movieName = JSON.parse(req.params)
  
    pool.query('SELECT * FROM movie WHERE movieName = $1', [movieName], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
  };

  const getMovieByYear = (req, res) => {
    const releaseYear = parseInt(req.params.releaseYear)
  
    pool.query('SELECT * FROM movie WHERE releaseYear = $1', [releaseYear], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
  };

  const createGenre = (req, res) => {
    const { description } = req.body
  
    pool.query('INSERT INTO genre (description) VALUES ($1) RETURNING *', [description], (error, results) => {
      if (error) {
        throw error
      }
      res.status(201).send(`Genre added with ID: ${results.rows[0].id}`)
    })
  };

  const getGenreById = (req, res) => {
    const id = parseInt(req.params.id)
  
    pool.query('SELECT * FROM genre WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
  };

  const getGenreByName = (req, res) => {
    const description = JSON.parse(req.params)
  
    pool.query('SELECT * FROM genre WHERE description = $1', [description], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
  };

  module.exports = {
    getMovies,
    getMovieById,
    getMovieByName,
    getMovieByYear,
    createGenre,
    getGenreById,
    getGenreByName,
  }
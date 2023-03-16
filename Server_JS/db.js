const Pool = requre('pg').Pool;
const pool = new Pool({
    user: 'movie_user',
    password: 'Spges3spges',
    host: 'localhost',
    port: 5432,
    database: 'movie_db',
});

module.exports = pool;

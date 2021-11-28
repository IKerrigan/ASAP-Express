const Pool = require('pg').Pool

const pool = new Pool({
    database: 'drugstore',
    password: 'password',
    host: 'localhost',
    port: 5432,
    user: 'me',
})

module.exports = pool;
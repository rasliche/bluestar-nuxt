const { Pool } = require('pg')

// Set up Postgres connection
const pool = new Pool({
    database: 'sanctuary-university',
    user: 'postgres',
    password: 'example',
    host: 'localhost',
    port: 5432
})

module.exports = {
    query: (text, params) => pool.query(text, params),
}

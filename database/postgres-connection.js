const pgp = require('pg-promise')()

const DATABASE_URL = process.env.DATABASE_URL || {
    host: '192.168.40.137', //'postgres-b1n4ry-kr4ft.postgres.database.azure.com',
    port: 5432,
    database: 'greetings_with_express',
    user: 'b1n4rykr4ft',
    password: 'gh0stfly3R',
    
};
const db = pgp(DATABASE_URL)
module.exports = db;
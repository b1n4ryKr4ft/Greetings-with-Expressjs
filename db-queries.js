const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'b1n4rykr4ft',
    host: 'postgres-b1n4ry-kr4ft.postgres.database.azure.com',
    database: 'greetings_with_express',
    password: 'gh0stfly3R',
    port: 5432
});


const getGreetingLanguages = (request, response) => {

    pool.query("SELECT name from languages", (error, results) =>{
        if(error){

            console.log(error.message);
            throw error;
        }
        response.status(200).json(results.rows);
    })
}

const getGreetingsCounter = (request, response) => {

    pool.query("SELECT count(id) as greetingsCount from greeting", (error, results) => {
        if(error){

            console.log(error.message);
            throw error
        }
        response.status(200).json(results.rows);
    })
}

module.exports = {
    getGreetingLanguages,
    getGreetingsCounter
}

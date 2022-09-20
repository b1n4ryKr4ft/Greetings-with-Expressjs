const db = require("./postgres-connection"); 

// Queries
const ALL_LANGUAGES = "SELECT id, name from languages;";
const GREETINGS_COUNTER = "SELECT count(id) counter from greetings;"

// Methods
const getGreetingLanguages = async () => {

    let languages = await db.manyOrNone(ALL_LANGUAGES);
    return languages;
}

const getGreetingsCounter = async () => {

    let greetingsRecord = await db.oneOrNone(GREETINGS_COUNTER);
    return greetingsRecord.counter;
}

module.exports = {
    getGreetingLanguages,
    getGreetingsCounter
}

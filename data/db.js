const mySql = require("mysql2")

const connection = mySql.createConnection({
    host: "localhost",
    user: "root",
    password: "Root",
    database: "movies"
})

connection.connect((err) => {
    if (err) throw err;
    console.log("connected to MySql");
})

module.exports = connection
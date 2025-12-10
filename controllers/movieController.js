const connection = require("../data/db")
const db = require("../data/db")

const index = (req, res) => {
    console.log("Request recieved (index)");

    // prep query
    const sql = "SELECT * FROM `movies`"

    // run query
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: "query failed" })
        res.json(results)
    })
}
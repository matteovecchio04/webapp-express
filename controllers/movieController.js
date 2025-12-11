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

const show = (req, res) => {
    console.log("Request recieved (show)");

    // grab id from url
    const id = req.params.id

    const moviesSql = "SELECT * FROM `movies` WHERE id = ?"

    // prep query for reviews
    const reviewsSql = "SELECT name, vote, text FROM `reviews` WHERE id = ?"

    let movie

    connection.query(moviesSql, [id], (err, movieResults) => {
        if (err) return res.status(500).json({ error: "query failed" })
        if (movieResults.length === 0) return res.status(404).json({ error: "movie not found" })
        // get movie
        movie = movieResults[0]
    })

    // if the first query doesn't fail, it runs this second one
    connection.query(reviewsSql, [id], (err, reviewsResults) => {
        if (err) return res.status(500).json({ error: "query failed" })

        // add reviews to movie
        movie.reviews = reviewsResults
        res.json(movie)
    })
}

module.exports = {
    index,
    show
}
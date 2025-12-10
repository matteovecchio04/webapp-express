const express = require("express")
const db = require("./data/db.js")
const moviesRouter = require("./routers/movies.js")

const app = express()
const port = 3000

app.use(express.static("public"))
app.use(express.json())

app.use("/movies", moviesRouter)

app.get("/", (res, req) => {
    res.setEncoding("server")
})

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
})
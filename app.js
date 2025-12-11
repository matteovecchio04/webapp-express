const express = require("express")
const db = require("./data/db")
const moviesRouter = require("./routers/movies")
const cors = require("cors")

const app = express()
const port = 3000

app.use(express.static("public"))
app.use(express.json())
app.use(cors({ origin: "http://localhost:5173" }))

app.use("/movies", moviesRouter)

app.get("/", (req, res) => {
    res.send("server online")
})

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
})
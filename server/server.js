import express from "express";
import path from "path";
import bodyParser from "body-parser";


const app = express();
app.use(bodyParser.json());

const movies = [

    {
        title: "when they see us ",
        plot: "Is your favorite movies ??",
        year: 2019
    },
    {
        title: "ma family is famous serie in ivory coast",
        plot: "I thin is a favoritt people serie in africa",
        year: 2002
    },
]

app.get("/api/movies", (req, res) => {
    res.json(movies);
});

app.post("/api/movies", (req, res) => {
    const { title, plot, year } = req.body;
    movies.push({title, plot, year});
    res.status(200).end();
})


app.use(express.static(path.resolve("..", "client", "dist")));
app.use((req, res) => {
    res.sendFile(path.resolve("..", "client", "dist", "index.html"));
})


const server = app.listen(process.env.PORT || 3000, () => {
    console.log("Started on http://localhost:" + server.address().port);
})

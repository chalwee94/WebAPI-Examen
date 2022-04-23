import express from "express";
import path from "path";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const movies = [
    {
        title: "ma famille",
        plot: " ma famille est un film qui ete Créée en juin 20021 par Akissi Delta, la série fut produite par Lad Production, et est diffusée sur La Première, Africable, la télévision Gabonaise, RTGA.",
        year: 2002
    },
    {
        title: "when they see us",
        plot: "Fem tenåringer fra Harlem blir fanget i et mareritt når de feilaktig anklages for et brutalt angrep i Central Park. Basert på en sann historie. ",
        year: 1985
    }
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


const server = app.listen(process.env.PORT || 2323, () => {
    console.log("Started on http://localhost:" + server.address().port);
})

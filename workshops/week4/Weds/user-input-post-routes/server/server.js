import express from "express";
import pg from "pg";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors());

dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DB_URL,
});

app.listen(8080, () => {
  console.log("Server is running");
});

app.get("/", (request, response) => {
  response.json({ message: "root route" });
});

app.post("/newFilm", (request, response) => {
  const body = request.body;
  const query = db.query(
    "INSERT INTO films (filmTitle, filmGenre, filmRating, filmLength) VALUES ($1, $2, $3, $4)",
    [body.filmTitle, body.filmGenre, body.filmRating, body.filmLength]
  );
  response.json(query);
});

app.get("/film", async (request, response) => {
  const query = await db.query("SELECT * FROM films");
  const data = response.json(query.rows);
  console.log(data);
});

app.get("/film/autumnsonata");

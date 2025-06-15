import express, { response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "./dbConnection.js";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = process.env.MY_PORT;
app.listen(PORT, () => {
  console.log("Server running in port ${PORT}");
});

app.get("/", (request, response) => {
  response.json({ message: "You're in the root route!" });
});

app.get("/butlertheories", async (request, response) => {
  const data = await db.query('SELECT * FROM whodunnit WHERE guess = "Butler"');
  response.json(data.rows);
});

app.get("/heiresstheories", async (request, response) => {
  const data = await db.query(
    'SELECT * FROM whodunnit WHERE guess = "Heiress"'
  );
  response.json(data.rows);
});

app.get("/reverendtheories", async (request, response) => {
  const data = await db.query(
    'SELECT * FROM whodunnit WHERE guess = "Reverend"'
  );
  response.json(data.rows);
});

app.post("/addtheory", (request, response) => {
  const body = request.body;
  const insert = db.query(
    "INSERT INTO whodunnit (guess, theory, username_id) VALUES ($1, $2. $3)",
    [body.guess, body.theory, body.username_id]
  );
});

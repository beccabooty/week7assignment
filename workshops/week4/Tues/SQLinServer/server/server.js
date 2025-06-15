import express from "express";
import dotenv from "dotenv";
import pg from "pg";

const app = express();
app.use(express.json());

dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DB_URL,
});

app.listen(8080, function () {
  console.log("Server is functioning!");
});

app.get("/", function (request, response) {
  response.json({ message: "This is the root route. Thanks for stopping by!" });
});

app.get("/films", async function (request, response) {
  const query = await db.query("SELECT * FROM FileSystem;");
  //   console.log(query);
  const data = response.json(query.rows);
  console.log(data);
});

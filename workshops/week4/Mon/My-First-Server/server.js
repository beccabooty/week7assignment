import express from "express";

const app = express();

app.use(express.json());

app.listen(9898, function () {
  console.log("Welcome to the server");
});

app.get("/message", function (request, response) {
  response.json({ message: "This is a message!" });
});

app.post("/message", function (request, response) {
  response.json({ message: "Message 2" });
});

import dotenv from "dotenv";
dotenv.config();

app.get("/", function (request, response) {
  response.json({ message: "This is the root route!" });
});

import pg from "pg";

const db = new pg.Pool({
  connectionString: process.env.DB_STRING,
});

console.log(db);

import express from "express";
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

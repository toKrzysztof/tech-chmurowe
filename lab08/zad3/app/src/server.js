import redisClient from "./redis-client.js";
import bodyParser from "body-parser";
import sql from "./connect.js";
import express from "express";
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/add", async (req, res) => {
  const { key, value } = req.body;
  if (!key || !value) {
    res.status(400).send("Key and value are required");
    return;
  }
  redisClient
    .set(key, value)
    .then((result) => {
      res.status(200).send({ result, status: "OK" });
    })
    .catch(() => {
      res.status(400).send("FAILED");
    });
});
app.get("/get/:key", async (req, res) => {
  const key = req.params.key;
  if (!key) {
    res.status(400).send("Key is required");
    return;
  }
  redisClient
    .get(key)
    .then((value) => {
      res.status(200).send({ key, value, status: "OK" });
    })
    .catch(() => {
      res.status(400).send("FAILED");
    });
});

app.get("/users", async (req, res) => {
  const users = await sql`SELECT * FROM users`;
  res.status(200).send(users);
});

app.post("/users", async (req, res) => {
  const { name, age } = req.body;
  if (!name || !age) {
    res.status(400).send("Name and age are required");
    return;
  }
  const user =
    await sql`INSERT INTO users (name, age) VALUES (${name}, ${age}) RETURNING *`;
  res.status(200).send(user);
});
app.get("/", async (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
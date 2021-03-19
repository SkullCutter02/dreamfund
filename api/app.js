const express = require("express");
const redis = require("redis");

const books = require("./books");

const app = express();

const client = redis.createClient({
  port: process.env.REDIS_PORT,
  host: process.env.REDIS_HOST,
});

books.forEach((book) => {
  client.hexists("books", book, (err, data) => {
    if (err) throw err;

    if (data === 0) {
      client.hset("books", book, 0);
    }
  });
});

app.get("/", (req, res) => {
  const bookAndCount = [];

  client.hkeys("books", (err, data) => {
    if (err) throw err;

    for (const book of data) {
      client.hget("books", book, (err, count) => {
        if (err) throw err;

        count = parseInt(count);
        bookAndCount.push({ book, count });

        if (bookAndCount.length === data.length) return res.json(bookAndCount);
      });
    }
  });
});

app.patch("/:book", (req, res) => {
  const { book } = req.params;
  client.hincrby("books", book, 1, (err, data) => {
    if (err) throw err;
    return res.json({ count: data });
  });
});

app.listen(5000, () => {
  console.log(`Server started on port ${5000}`);
});

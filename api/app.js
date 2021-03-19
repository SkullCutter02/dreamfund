const express = require("express");
const redis = require("redis");

const app = express();

const client = redis.createClient({
  port: process.env.REDIS_PORT,
  host: process.env.REDIS_HOST,
});

app.listen(5000, () => {
  console.log(`Server started on port ${5000}`);
});

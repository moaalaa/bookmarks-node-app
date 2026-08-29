const os = require('os');
const mongoose = require('mongoose');
const redis = require('redis');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoUrl = process.env.MONGO_URL;
const redisUrl = process.env.REDIS_URL;

const client = redis.createClient({
    url: redisUrl,
})
    .on("error", (err) => console.log("Redis Client Error", err))
    .connect()
    .then(() => console.log('Redis Connected'));

mongoose
    .connect(mongoUrl)
    .then(() => console.log('Mongo Connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.json({
        message: 'Hello, World!',
        source: os.hostname(),
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
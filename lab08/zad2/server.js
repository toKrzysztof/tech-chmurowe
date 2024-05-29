const express = require('express');
const Redis = require('ioredis');

const app = express();
app.use(express.json());

const client = new Redis({ host: process.env.REDIS_HOST || 'redis', port: process.env.REDIS_PORT || 6379 });
client.on('connect', () => console.log('Connected to Redis'))
client.on('error', (err) => console.error('Redis client error', err));

app.post('/messages', async (req, res) => {
  try {
    const { message } = req.body;
    await client.rpush('messages', message);
    res.status(201).send('Message added');
  } catch (error) {
    res.status(500).send('Error adding message');
  }
});

app.get('/messages', async (req, res) => {
  try {
    const messages = await client.lrange('messages', 0, -1);
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).send('Error getting message');
  }
});

const port = process.env.APP_PORT || 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
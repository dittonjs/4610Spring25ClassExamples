import express from 'express';
import path from 'path';
import redis from "redis";
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a Redis client
const redisClient = redis.createClient();
await redisClient.connect();

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/startwork', async (req, res) => {
  // TODO : Implement the logic to start work
  await redisClient.set("work", "started")
  await redisClient.publish("work", "started")
  res.sendFile(path.join(__dirname, 'public', 'work.html'));
})

app.get('/work', async (req, res) => {

  const workStatus = await redisClient.get("work")
  if (workStatus === "started") {
    res.json({ status: "in progress" });
  } else {
    res.json({ status: "done" });
  }

})


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});



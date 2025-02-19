import express from 'express';
import { config } from 'dotenv';
import http from 'http';
import { Ollama } from "ollama";
import { Queue } from 'bullmq';

const fibonacciQueue = new Queue('fibonacci', {
  connection: {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT || '6379'),
  },
})

const ollama = new Ollama({
  host: process.env.OLLAMA_URL,
})

ollama.pull({
  model: 'tinyllama',
})
// load environment variables
config();

const app = express();

// slightly modified version of the code we wrote in class.
// we wrap the express app in a node http server so that we can
// expose the server to socket.io later on.
const server = http.createServer(app);
const port = parseInt(process.env.PORT || '3000');


app.use(express.json());
// a simple middleware the redirects
// to the asset server if the request
// path contains a dot. We use the dot
// to differentiate between asset requests
// and normal requests because file names have
// dots in them.
app.use((req, res, next) => {
  if (req.path.includes(".")) {
    res.redirect(process.env.ASSET_URL + req.path);
    return;
  }
  next();
});

// fib sequence
function fib(n: number): number {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

app.get('/fib', async (req, res) => {
  await fibonacciQueue.add('fibonacci', {
    n: 48
  });
  res.json({ success: true });
});

app.get('*', (req, res) => {
  res.send(`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="${process.env.ASSET_URL}/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React-Express Starter App</title>
        <script type="module">
          import RefreshRuntime from '${process.env.ASSET_URL}/@react-refresh'
          RefreshRuntime.injectIntoGlobalHook(window)
          window.$RefreshReg$ = () => {}
          window.$RefreshSig$ = () => (type) => type
          window.__vite_plugin_react_preamble_installed__ = true
        </script>
        <script type="module" src="${process.env.ASSET_URL}/@vite/client"></script>
        </head>
        <body>
        <div id="root"></div>
        <script type="module" src="${process.env.ASSET_URL}/src/main.tsx"></script>
      </body>
    </html>
    `);
});



server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

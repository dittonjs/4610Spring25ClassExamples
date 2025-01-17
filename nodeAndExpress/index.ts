import express, { Request, Response } from 'express';
import cors from "cors";
import { config } from 'dotenv';
config();

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send(`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite + React + TS</title>
        <!-- if development -->
        <script type="module">
          import RefreshRuntime from 'http://localhost:5173/@react-refresh'
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

app.get('/random', (req: Request, res: Response) => {
  const random = Math.floor(Math.random() * 100);
  console.log(process.env.ASSET_URL);
  res.json({ random });
});

app.listen(port, () => {
  // reportUser({
  //   name: 'John',
  //   age: 25,
  //   doWork: (value: number, value2: number) => {
  //     console.log(`Working on ${value} and ${value2}`);
  //   },
  // });
  console.log(`Server is running on http://localhost:${port}`);
});

function add(a: number, b: number): number {
  return a + b;
}

// interface User {
//   name: string;
//   age: number;
//   doWork: (value: number, value2: number) => void;
// }
type User = {
  name: string;
  age: number;
  doWork: (value: number, value2: number) => void;
}

// class Person implements User {
//   occupation: string;
//   name: string;
//   age: number;
//   constructor(name: string, age: number, occupation: string) {
//     this.name = name;
//     this.age = age;
//     this.occupation = occupation;
//   }

//   doWork (value: number, value2: number) {
//     console.log(`Working on ${value} and ${value2}`);
//   };
// }

function reportUser(user: User) {
  return `This is ${user.name}`;
}

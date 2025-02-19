import { Worker } from "bullmq";
import { config } from "dotenv";
config();

function fib(n: number): number {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

new Worker("fibonacci", async (job) => {
  console.log(job.data);
  console.log(fib(job.data.n));
}, {
  connection: {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT || "6379"),
  },
})

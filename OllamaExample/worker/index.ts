import { PrismaClient } from "@prisma/client";
import { Worker } from "bullmq";
import { config } from "dotenv";
import { Ollama } from "ollama";
config();

const client = new PrismaClient();

const ollama = new Ollama({
  host: process.env.OLLAMA_URL,
});

type LetterJobPayload = {
  letterId: number;
}

new Worker("letters", async (job) => {
  const {letterId} = job.data as LetterJobPayload;
  console.log(`Processing letter ${letterId}`);
  const letter = await client.letter.findUnique({
    where: { id: letterId },
  });

  const response = await ollama.chat({
    model: 'tinyllama',
    messages: [{ role: 'user', content:`Generate me a letter of recommendation for the following information: ${letter?.title}`  }]
  })
  console.log(response)
}, {
  connection: {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT || "6379"),
  },
})

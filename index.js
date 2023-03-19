import { MongoClient } from "mongodb";
import express from "express";

import { hallBooking } from "./hallBooking.js";
import { tracks } from "./track.js";
import "dotenv/config";
import cors from "cors";
const DeployURL = process.env.DeployURL;
const MongoURL =
  "mongodb+srv://narashimman54:lakshmi97@cluster0.n63nudw.mongodb.net/?retryWrites=true&w=majority";

const app = express();
app.use(express.json());
app.use(cors(""));

async function main() {
  const client = new MongoClient(MongoURL);

  try {
    await client.connect();
    console.log("connected...✔✔✔✔");
    return client;
  } catch (err) {
    console.log("error:", err);
  }
}
export var clients = await main();

app.use(`/hallBooking`, hallBooking);
app.use("/track", tracks);

const port = process.env.PORT;
app.listen(port, () => console.log(`server runs in ${port}.......✔✔✔`));

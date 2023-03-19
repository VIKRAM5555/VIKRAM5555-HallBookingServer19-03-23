import { clients } from "./index.js";
import express from "express";
var trackStorage = express.Router();
trackStorage.get("/", async function (req, res) {
  res
    .set("Access-Control-Allow-Origin", "*")
    .send(
      await clients.db("hallBooking").collection("roomList").find({}).toArray()
    );
});
trackStorage.delete("/deleteAll", async function (req, res) {
  res
    .set("Access-Control-Allow-Origin", "*")
    .send(
      await clients.db("hallBooking").collection("roomList").deleteMany({})
    );
});

trackStorage.post("/", async function (req, res) {
  var data = req.body;

  res
    .set("Access-Control-Allow-Origin", "*")
    .send(
      await clients.db("hallBooking").collection("roomList").insertMany(data)
    );
});

export var tracks = trackStorage;

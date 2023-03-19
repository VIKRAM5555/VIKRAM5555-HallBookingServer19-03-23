import express from "express";
import { clients } from "./index.js";

var apps = express.Router();
// gv
apps.post("/", async function (req, res) {
  var data = req.body;

  res.send(
    await clients.db("hallBooking").collection("roomList").insertMany(data)
  );
});

apps.get("/", async function (req, res) {
  res.send(
    await clients.db("hallBooking").collection("roomList").find({}).toArray()
  );
});

export var hallBooking = apps;

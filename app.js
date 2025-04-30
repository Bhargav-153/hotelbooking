const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://localhost:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
  res.send("Hey i am root");
});

app.get("/testListing", async (req, res) => {
  let sampleListing = new Listing({
    title: "My new villa",
    description: "by the beach",
    price: 1200,
    location: "Calangute, goa",
    Country: "India",
  });
  await sampleListing.save();
  console.log("sample was saved to db");
  res.send("successful testing");
});

app.listen(8080, () => {
  console.log("server is listening to port 8080");
});

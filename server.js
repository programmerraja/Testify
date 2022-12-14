const express = require("express");
const session = require("express-session");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
const passport = require("./passport");
const routes = require("./routes");


const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());  
app.use(cors())

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.use(express.static("admin/build"));
}

// app.get('*', redirectToSSL);
app.use(passport.initialize());
// use API routes here
app.use(routes);
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI,  {
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useFindAndModify: false, 
  useCreateIndex: true
}).then(()=>{
  require("./util")
})


// Send every other request to the React app  
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
  sendWhoIs(req);
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});






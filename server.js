require("dotenv").config();
const db = require("./models")
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");



const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//need to change 'budget' to name of db - workout
mongoose.connect(process.env.MONGODB_URI,  {
  useNewUrlParser: true,
  useFindAndModify: false, 
  useUnifiedTopology: true,
  useCreateIndex: true

});

mongoose.connection.on('connected', () => console.log('Connected to MongoDB Endpoint'));
mongoose.connection.on('error', (err) => console.log(`Mongoose default connection error: ${err}`));

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/htmlRoutes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
require('dotenv').config(); 


const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

// Parse the application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static content for the app from the "public" directory in the application directory
app.use(express.static("public"));

// Connect to the Mongoose database
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
  
// Routes
// =============================================================
require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

// Start our server so that it can begin listening to client requests
app.listen(PORT, () => {
    console.log(`App running at http://localhost:${PORT}`);
});

const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());

// cors policy error resolve
app.use(cors(
    {
        "origin": "*",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        "optionsSuccessStatus": 204
      }
));

// Route Imports
const blog = require("./routes/blogRoute");

app.use("/api/v1",blog);

module.exports = app;
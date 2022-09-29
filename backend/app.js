const express = require('express');
const app = express();

app.use(express.json());

// Route Imports
const blog = require("./routes/blogRoute");

app.use("/api/v1",blog);

module.exports = app;
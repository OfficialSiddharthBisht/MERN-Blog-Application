const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require("./config/database");

// config
dotenv.config({path:"./config/config.env"});

const port = process.env.PORT || 4000; 

// connecting to database
connectDatabase();

app.listen(port,()=>{
    console.log(`Server is running on port httttp://localhost:${port}`);
})
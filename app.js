const express = require("express");
require("./connection");
const cors = require('cors');
const router = require("./Routers");


const app = express();
const port = process.env.PORT || 3000; 

app.use(cors());
app.use(express.json());

app.use(router)
app.listen(port, () => {
    console.log(`connection is setup at localhost:${port}`)
})
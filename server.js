const express = require("express");
const colors = require('colors')
require('dotenv').config();

const app = express();
app.use(express.json());


app.listen(process.env.PORT, ()=>{console.log(`Server is running at port ${process.env.PORT}` .bgGreen)});
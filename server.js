const express = require("express");
const colors = require('colors');
const connection = require("../ecommerce-store/config/db")
require('dotenv').config();

const app = express();
app.use(express.json());

connection()

app.listen(process.env.PORT, ()=>{console.log(`Server is running at port ${process.env.PORT}` .bgGreen)});
const mongoose = require('mongoose');
const colors = require('colors')


const connection = async()=>
{
    try {
        await mongoose.connect("mongodb+srv://hafiz:hafiz@cluster0.us8p7mz.mongodb.net/hafiz?retryWrites=true&w=majority")
        console.log("Database connected" .bgYellow)
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connection
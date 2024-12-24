const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://aksn0204:aksn0204@cluster0.8pzo5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectToMongo = ()=>{
    console.log("chal na");
    try {
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}
catch (error) {
    console.log(error);
}
}

module.exports = connectToMongo;

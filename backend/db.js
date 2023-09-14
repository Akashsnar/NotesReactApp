const mongoose = require('mongoose');

const mongoURI = "mongodb://0.0.0.0:27017/inotebook"

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
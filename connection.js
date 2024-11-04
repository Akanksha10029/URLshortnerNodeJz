const mongoose = require('mongoose');

async function connectToMongoDB(url){
    try{
        await mongoose.connect(url);
        console.log('Connected to MongoDB');
    }catch(err){
        console.error('Error connecting to MongoDB: ', err);
    }
}
module.exports = {connectToMongoDB,};
const mongoose=require('mongoose');
const { MongoClient } = require("mongodb");
require('dotenv').config();
// const Db = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@stockatlas.x3nkjwt.mongodb.net/stockatlas?retryWrites=true&w=majority`;
const params={
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
}

const uri =`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@stockatlas.x3nkjwt.mongodb.net/stockatlas?retryWrites=true&w=majority`

const connexion=mongoose.connect(uri,params).then(()=> console.log(`connected`))
.catch((err)=>console.log(err));

module.exports = connexion

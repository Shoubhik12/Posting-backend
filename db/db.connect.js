const mongoose = require("mongoose")
require("dotenv").config()

const MongoURL = process.env.MONGODB

const initialiseDatabase = async () =>{
    await mongoose.connect(MongoURL).
    then(()=>console.log("Database Connected.")).
    catch((err)=>console.log(err))
} 

module.exports = {initialiseDatabase}
const mongoose = require("mongoose")

const postingSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    companyName:{
        type:String,
        required:true
    },
    location:String,
    salary:Number,
    jobType:{
        type:String,
        required:true,
        enum:["Full-time(On-site)","Part-time(On-site)","Full-time(Remote)","Part-time(Remote)"]
    },
    description:String,
    qualifications:[String]
})

const Posting = mongoose.model("Posting",postingSchema)

module.exports = Posting
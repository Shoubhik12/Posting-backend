const {initialiseDatabase} = require("./db/db.connect")
const Posting = require("./models/posting.model")
const express = require("express")
const app = express()
app.use(express.json())
const cors = require("cors")

const corsOptions = {
    origin:"*",
    credentials:true
}

app.use(cors(corsOptions))

initialiseDatabase()

async function CreatePost(postData) {
    try {
        const newPost = new Posting(postData)
        return await newPost.save()
    } catch (error) {
        throw error
    }
}

app.post("/post",async (req,res) => {
    try {
        const data = await CreatePost(req.body)
        if(data){
            res.status(200).json({message:"new post created."})
        }
        else{
            res.status(404).json({error:"post not created."})
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

async function ReadPost() {
    try {
        const postData = await Posting.find()
        return postData
    } catch (error) {
        throw error
    }
}

app.get("/post", async (req,res) => {
    try {
        const data = await ReadPost()

        if(data){
            res.send(data)
        }
        else{
            res.status(404).json({error:"posts not found."})
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

const PORT = 3000 || process.env.PORT

app.listen(PORT,()=>{
    console.log("Running on",PORT)
})
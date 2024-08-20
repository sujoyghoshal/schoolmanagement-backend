const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
require('dotenv').config();
const Routes = require("./routes/route.js")

const PORT = process.env.PORT
const MONGO_URL=process.env.MONGO_URL;
app.use(express.json()); 
dotenv.config()  

app.use(express.json({ limit: '10mb' })) 
app.use(cors())
 

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('NOT CONNECTED TO NETWORK', err));

app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})
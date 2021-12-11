
import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import router from './Routes/hotelUser.js'
import UserRouter from './Routes/users.js'
import adminRouter from './Routes/Admin.js'


dotenv.config()

const app=express();
const port=process.env.PORT || 5000;

app.use(cors());
app.use(express.json());



const uri=process.env.ATLAS_URI
mongoose.connect(uri,{useNewUrlParser:true})


const connection=mongoose.connection;

connection.once('open',()=>{
    console.log('MogoDB database connection established succcesfully')
})




app.use('/hotel',router)
app.use('/user',UserRouter)
app.use('/apiAdmin',adminRouter)



app.listen(port,()=>{
    console.log(`The server is running on port: ${port}`);
})
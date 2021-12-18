import mongoose from 'mongoose'


const Schema=mongoose.Schema;

const Admin=new Schema({
    email:{
        required:true,
        type:String,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
})

const AdminTable=mongoose.model("Admins",Admin);

export default AdminTable;
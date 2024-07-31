import mongoose from "mongoose";
import userModel from '../Model/usersModel'

async function findApdateUser(id,updateFile){
    return userModel.findByIdAndUpdate(id,updateFile,{new:true})
}

function handleUserNotFound(res){
    return res.status(404).send('user not found')
}

async function sendLoginResponse(req,res){
    // try{
    //     const token= gen
    // }
}
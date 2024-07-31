import express from 'express'
import userModel from '../Model/usersModel'
import mongoose  from 'mongoose' 

async function addUser(req,res){
    try{
        const userData=extractUserData(req);
        const user=await createUser(userData);
        await saveUser(user);
        res.messeage('user add successefully');
        login(req,res);
    }
    catch(error){
        handleError(error,res);
    }
}
async function updateUser(req,res){
    try{
       const{ name,  id, profile,  password,  email}=req.body;
       const updateUser= await findApdateUser(req.user._id,{ name,  id, profile,  password,  email})
       if(!updateUser){
        return handleUserNotFound(res)
       }
       await sendLoginResponse(req,res)
    }
    catch{
        console.log("chach")
        return handleUpdateUserError(error,res)
    }
}
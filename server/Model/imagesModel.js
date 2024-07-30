import mongoose from 'mongoose';

const imegeSchema=new mongoose.Schema({
    url:String,
    userId:Number,
    likes:Number,
    downloadsCounetr:Number,
    categories:[Number]

});

const imegeModel=mongoose.model("imeges",imegeSchema);
export default imegeModel;
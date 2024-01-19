
import mongoose from "mongoose";

export const likeSchema = new mongoose.Schema({

  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
  },
  post:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Post',
    required:[true,"post id is required"]
  },

});


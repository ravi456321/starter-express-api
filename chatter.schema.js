import mongoose from "mongoose";

const chatterSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Some text is required"]
    },
    message:String,
    time:Date,
});

const Chat = mongoose.model('Chat', chatterSchema);

export default Chat;

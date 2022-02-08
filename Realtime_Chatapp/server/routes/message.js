import express from 'express';
import Message from '../models/Message.js';
const router = express.Router();

//add new message
router.post("/" , async (req,res) =>{
    const newMessage = new Message(req.body)
    try{
        //save message in database
        const savedMessage = await newMessage.save();
        res.status(200).json(savedMessage);
    }catch (err) {
        res.status(500).json(err);
    }
} )

//get message in a conversation
router.get("/:conversationId" , async (req,res) =>{
 
    try{
        const messages = await Message.find({
            conversationId:req.params.conversationId
        });
        res.status(200).json(messages);
    }catch (err) {
        res.status(500).json(err);
    }
} )


export default router;
import express from 'express';
import Conversation from '../models/Conversation.js';
const router = express.Router();

//create new conversation

router.post("/", async (req, res) => {
    const newConversation = new Conversation({
        members: [req.body.senderId, req.body.receiverId],
    })

    try {
        //save in database
        const savedConversation = await newConversation.save();
        res.status(200).json(savedConversation);
    } catch (err) {
        res.status(500).json(err);
    }
});

//get conversation of a user
router.get("/:userId", async (req, res) => {
 
    try {
        const conversation = await Conversation.find({
            //get members through userId
            members : { $in:[req.params.userId]}
        })
        res.status(200).json(conversation); 
    } catch (err) {
        res.status(500).json(err);
    }
});

//get conversations includes two userId
router.get("/find/:firstUserId/:secondUserId", async (req,res) =>{
    try {
        const conversation = await Conversation.findOne({
            //get all conversation from two persons
            members : { $all:[req.params.firstUserId,req.params.secondUserId]}
        });
        res.status(200).json(conversation); 
    } catch (err) {
        res.status(500).json(err);
    }
});
export default router;
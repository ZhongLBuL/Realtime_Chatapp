import mongoose from 'mongoose'

/**
 * Set up the message Schema to connect to the database
 * 
 */
const MessageSchema = new mongoose.Schema({
        conversationId: {
            type: String
        },
        sender: {
            type: String,
        },
        text: {
            type: String,
        },
    }, {
        timestamps: true
    }

)

const Message = mongoose.model("Message", MessageSchema);

export default Message;
import mongoose from 'mongoose'

/**
 * Set up the conversation Schema to connect to the database
 * 
 */
const ConversationSchema = new mongoose.Schema({
      members:{
          type:Array
      },
    }, {
        timestamps: true
    }

)

const Conversation = mongoose.model("Conversation", ConversationSchema);

export default Conversation;
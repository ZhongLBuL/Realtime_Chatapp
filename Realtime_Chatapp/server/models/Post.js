import mongoose from 'mongoose'

//This part is the model of post
const PostSchema = new mongoose.Schema({
        userId: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            max: 500,
        },
        img: {
            type: String,
        },
        likes: {
            type: Array,
            default: [],
        },
    }, {
        timestamps: true
    }

)

const Post = mongoose.model("Post", PostSchema);

export default Post;
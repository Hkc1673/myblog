import mongoose from "mongoose";
const { Schema } = mongoose;

const schema = new.Schema({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type:String,
        required: true,
    },
    content: {
        type:String,
        required: true,
    },
    tag: {
        type:String,
        required: true,
    },
    image: {
        type:String
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

export const Post = mongoose.model("Post", schema);

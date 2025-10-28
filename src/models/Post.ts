import { Schema, model, models } from "mongoose";

const PostSchema = new Schema(
    {
    title: { type: String, required: true },
    content: { type: String, required: false },
    }, 
    { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

const Post = models.Post || model("Post", PostSchema); // Prevent model overwrite during hot-reloading

export default Post;
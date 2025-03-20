//Model author

import mongoose from "mongoose";
const authorSchema = new mongoose.Schema({
    name:{type: String, required: true},
    bio: String
});
const Author = mongoose.model("Author", authorSchema);
export default Author;

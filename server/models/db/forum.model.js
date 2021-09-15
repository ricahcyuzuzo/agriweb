import mongoose from 'mongoose';

const forumSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    topic: String,
    description: String,
    names: String,
    comment: [{sender: String, message: String}]
});

const forumModel = mongoose.model('forum', forumSchema);
export default forumModel;

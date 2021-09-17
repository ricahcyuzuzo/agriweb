import mongoose from 'mongoose';

const usersSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    topic: String,
    description: String,
    names: String,
    comment: [{sender: String, message: String}]
});

const userModel = mongoose.model('forum', usersSchema);

export default userModel;

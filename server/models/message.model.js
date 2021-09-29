import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    clientPhone: String,
    sellerPhone: String,
    message: String
});

const messageModel = mongoose.model('messages', messageSchema);

export default messageModel;

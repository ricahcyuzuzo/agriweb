import mongoose from 'mongoose';

const usersSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fullNames: String,
    phoneNumber: String,
    password: String,
    type: String,
    active: Boolean
});

const usersModel = mongoose.model('users', usersSchema);

export default usersModel;

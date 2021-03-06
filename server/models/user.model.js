import mongoose from 'mongoose';

const usersSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fullNames: String,
    phoneNumber: String,
    password: String,
    type: String,
    image: String,
    idNumber: String,
    address: {
        province: String,
        district: String,
        sector: String,
        cell: String,
        village: String,
    }
});

const userModel = mongoose.model('users', usersSchema);

export default userModel;

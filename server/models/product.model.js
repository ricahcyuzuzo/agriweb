import mongoose from 'mongoose';

const usersSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productName: String,
    pricePerUnit: String,
    availableQuantity: String,
    description: String,
    sellerIdentifier: String,
    sellingApproved: Boolean,
    productCategory: String,
    image: String
});

const userModel = mongoose.model('products', usersSchema);

export default userModel;

import mongoose from 'mongoose';

const cartSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productId: { type: String, required: true },
    productName: { type: String, required: true },
    productUnit: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    phoneNumber: { type: String, required: true }
});

const cartModel = mongoose.model('Cart', cartSchema);

export default cartModel;

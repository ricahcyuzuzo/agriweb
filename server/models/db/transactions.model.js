import mongoose from 'mongoose';

const transactionSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    customerName: String,
    customerAddress: String,
    phoneNumber: String,
    sellerIdentifier: String,
    paid: Boolean,
    transactionId: String,
    products: Array,
    email: String,
});

const transactioModel = mongoose.model('transactions', transactionSchema);

export default transactioModel;

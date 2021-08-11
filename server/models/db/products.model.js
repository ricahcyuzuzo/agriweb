import mongoose from 'mongoose';

const productsSchema = mongoose.Schema({
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

const productsModel = mongoose.model('products', productsSchema);

export default productsModel;

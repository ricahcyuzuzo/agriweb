class transactionBodyModel {
    static transactionModel(req){
        const transaction = {
            customerName: req.body.customerName,
            customerAddress: req.body.customerAddress,
            phoneNumber: req.body.phoneNumber,
            sellerIdentifier: req.body.sellerIdentifier,
            products: req.body.products,
            email: req.body.email
        };

        return transaction;
    }
}

export default transactionBodyModel;

import Hapi from '@hapi/joi';

const validateTransactions = (user) => {
    const schema = Hapi.object().keys({
        customerName: Hapi.string().required(),
        customerAddress: Hapi.string().required(),
        phoneNumber: Hapi.string().required().min(10).max(10),
        sellerIdentifier: Hapi.string().required().min(10).max(10),
        products: Hapi.array().required(),
        email: Hapi.string().required(),
    });

    return schema.validate(user);
}

export default { validateTransactions };

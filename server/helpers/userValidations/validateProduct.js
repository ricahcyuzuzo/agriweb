import Hapi from '@hapi/joi';

const validateAddProduct = (user) => {
    const schema = Hapi.object().keys({
        productName: Hapi.string().required().min(3),
        pricePerUnit: Hapi.string().required(),
        availableQuantity: Hapi.string().required(),
        description: Hapi.string().required(),
        sellerIdentifier: Hapi.string().required(),
        image: Hapi.string().required(),
    });

    return schema.validate(user)
}

export default { validateAddProduct };

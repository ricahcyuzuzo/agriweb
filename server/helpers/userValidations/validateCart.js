import Hapi from '@hapi/joi';

const validateCart = (user) => {
    const schema = Hapi.object().keys({
        productId: Hapi.string().required(),
        productName: Hapi.string().required(),
        productUnit: Hapi.string().required(),
        price: Hapi.number().required()
    });

    return schema.validate(user)
}

export default { validateCart };

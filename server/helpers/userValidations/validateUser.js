import Hapi from '@hapi/joi';
import passwordValidator from 'password-validator';

const validateUserSignup = (user) => {
    const schema = Hapi.object().keys({
        fullNames: Hapi.string().min(2).required(),
        phoneNumber: Hapi.string().required(),
        password: Hapi.string().required(),
        userType: Hapi.string().required()
    });

    return schema.validate(user);
}

const validatePassword = (password) => {
    const schema = new passwordValidator();
    schema
        .is()
        .min(8)
        .is()
        .max(100)
        .has()
        .lowercase()
        .has()
        .uppercase()
        .has()
        .digits()
        .has()
        .not()
        .spaces()
        .has()
        .symbols();
    
    return schema.validate(password);
};

const validateUserSignIn = (user) => {
    const schema = Hapi.object().keys({
        phoneNumber: Hapi.string().min(10).max(10).required(),
        password: Hapi.string().required()
    })

    return schema.validate(user);
}

export default { validateUserSignup, validateUserSignIn, validatePassword };

import authentication from '../../helpers/authenticate';

class UserBodyModels {
    static userSignupBody(req){
        const user = {
            fullNames: req.body.fullNames,
            phoneNumber: req.body.phoneNumber,  
            password: authentication.hashPassword(req.body.password),
            userType: req.body.userType
        }

        return user;
    }

    static userSigninBody(req){
        const user = {
            phoneNumber: req.body.phoneNumber,
            password: authentication.hashPassword(req.body.password)
        }

        return user;
    }
}

export default UserBodyModels;

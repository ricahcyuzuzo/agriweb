import Mongoose from "mongoose";
import Authentication from "../helpers/authenticate";
import validateUser from "../helpers/userValidations/validateUser";
import UserBodyModels from "../models/body/userBody.model";
import User from "../models/db/users.model";

class UserController{
    static getOne (req, res){
        const {phone} = req.query;
        User.findOne({phoneNumber: phone}, (err, docs) => {
            res.status(200).json({
                status: 200,
                data: docs
            })
        })
    }

    static signup (req, res) {
        const { fullNames ,phoneNumber, password, userType } = req.body;
        const { error } = validateUser.validateUserSignup(UserBodyModels.userSignupBody(req));

        if (error) {
            return res.status(400).json({
                status: 400,
                message: error.details[0].message.replace(/"/g, '')
            });
        }

        if(validateUser.validatePassword(password) === true ){
            
                User.find({ phoneNumber: phoneNumber}, (err, docs) => {
                    if(docs.length){
                        return res.status(409).json({
                            status: 409,
                            message: "Phone number is already used, please try with another phone number"
                        });
                    }
                    // console.log('posted')
                    const hashedPassword = Authentication.hashPassword(password);
                    const user = new User({
                        _id: new Mongoose.Types.ObjectId(),
                        fullNames: fullNames,
                        phoneNumber: phoneNumber,
                        password: hashedPassword,
                        type: userType
                    });

                    user
                        .save()
                        .then((result) => {
                            console.log(result);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
            
                    res.status(201).json({
                        status: 201,
                        message: 'You have been registed successfull',
                        createdUser: user,
                        token: Authentication.generateToken(user) 
                    });

                });
        }else{
            return res.status(400).json({
                status: 400,
                message: "Password incorrect"
            });
        }
    }

    static signin (req, res) {
        const { phoneNumber, password } = req.body;
        const { error } = validateUser.validateUserSignIn(UserBodyModels.userSigninBody(req));

        if (error) {
            return res.status(400).json({
                status: 400,
                message: error.details[0].message.replace(/"/g, '')
            });
        }

        User.findOne({phoneNumber: phoneNumber})
            .exec()
            .then((doc) => {
                console.log('From Database: ', doc);
               const compare = Authentication.checkPassword(password, doc.password);
               if(compare){
                    if(doc){
                        res.status(201).json({
                            status: 201,
                            message: 'Logged In successful',
                            token: Authentication.generateToken(doc),
                            phone: doc.phoneNumber
                        });
                    }else{
                        res.status(401).json({
                            status: 401,
                            message: 'Wrong Phone number or password'
                        });
                    }
               }else{
                    res.status(401).json({
                        status: 401,
                        message: 'Wrong Phone number or password'
                    });
               }
            })
            .catch((err) => {
                res.status(500).json({
                  status: 500,
                  error: err,
                });
            });
    }
}

export default UserController;
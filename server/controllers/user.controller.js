import Mongoose from "mongoose";
import Authentication from "../helpers/authenticate";
import User from "../models/user.model";

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
    }

    static signin (req, res) {
        const { phoneNumber, password } = req.body;

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
            .catch(() => {
                res.status(401).json({
                    status: 401,
                    message: 'Wrong Phone number or password'
                });
            });
    }

    static updateProfile (req, res){
        const {phone} = req.query;
        const {idNumber, image, address} = req.body;
        User.findOneAndUpdate({phoneNumber: phone}, {idNumber: idNumber, image: image, address: address})
            .then(() => {
                res.status(201).json({
                    status: 201,
                    message: 'Profile Updated'
                })
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export default UserController;
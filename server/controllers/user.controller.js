import Mongoose from "mongoose";
import Authentication from "../helpers/authenticate";
import User from "../models/user.model";
import Message from '../models/message.model';

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
        User.findOneAndUpdate({phoneNumber: phone}, {idNumber: idNumber, image: image, address: {
            province: address.province,
            district: address.district,
            sector: address.sector,
            cell: address.cell,
            village: address.village
        }})
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

    static contactSeller (req, res){
        const {phone} = req.query;
        const {clientPhone, names, message} = req.body;   
        
        const messages = new Message({
            _id: new Mongoose.Types.ObjectId(),
            name: names,
            clientPhone: clientPhone,
            sellerPhone: phone,
            message: message,
        });

        messages
            .save()
            .then(() => {
                res.status(201).json({
                    status: 201,
                    message: 'Message sent successfully'
                })
            })
            .catch((error) => {
                res.status(500).json({
                    status: 500,
                    error: error
                })
            })
    }

    static getAllMessages (req, res){
        const { phone } = req.query;
        console.log(phone)
        Message.find({sellerPhone: phone}, (err, docs) => {
            res.status(200).json({
                status: 200,
                data: docs
            });
        });
    }
}

export default UserController;
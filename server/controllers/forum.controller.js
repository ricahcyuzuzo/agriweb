import Mongoose from 'mongoose';
import Forum from '../models/forum.model';

class ForumController {
    static AddTopic (req, res) {
        const { topic, names, description } = req.body;

        const Topic = new Forum({
            _id: new Mongoose.Types.ObjectId(),
            topic: topic,
            description: description,
            names: names,
            comment: []
        });

        Topic
            .save()
            .then(() => {
                res.status(201).json({
                    status: 201,
                    message: 'Topic Posted successful'
                })
            });
    }

    static addComment (req, res) {
        const {topic_id} = req.query;
        const {names, message} = req.body;

        Forum.findOneAndUpdate({_id: topic_id}, {$push: { comment: { sender: names, message: message }}}, (err, docs) => {
            res.status(201).json({
                status: 201,
                message: 'Comment Added'
            })
        })
    }

    static getAllTopics (req, res){
        Forum.find()
            .exec()
            .then((docs) => {
                res.status(200).json({
                    status: 200,
                    data: docs
                })
            })
    }

    static getOneTopic (req, res){
        Forum.findOne({_id: req.query.topic_id})
            .exec()
            .then((docs) => {
                res.status(200).json({
                    status: 200,
                    data: docs
                })
            })
    }
    
}

export default ForumController;

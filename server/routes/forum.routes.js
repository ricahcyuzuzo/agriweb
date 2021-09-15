import Router from 'express';
import ForumController from '../controllers/forum.controller';

const routes = Router();

routes.post('/post_topic', ForumController.AddTopic);
routes.get('/all_posts', ForumController.getAllTopics);
routes.get('/one_topic', ForumController.getOneTopic);
routes.post('/comment', ForumController.addComment);

export default routes;

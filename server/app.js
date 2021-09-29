import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import dbConfig from './config/dbConnections.config';
import userRoutes from './routes/user.route';
import sellerRoutes from './routes/seller.route';
import productRoutes from './routes/products.route';
import forumRoutes from './routes/forum.route';
import adminRoutes from './routes/admin.routes';

const app = express();
const port = process.env.PORT || 7000;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({type: '*/*'}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
    }
    return next();
});

app.use('/api', forumRoutes);
app.use('/api', userRoutes);
app.use('/api', sellerRoutes);
app.use('/api', productRoutes);
app.use('/api', adminRoutes);

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome on Agri shop api',
        status: 200
    });
});

app.use((req, res) => {
    res.type('json').status(404).json({
        message: '404 Endpoint not found',
        status: 404
    });
});

app.listen(port, console.log(`The app is running at 127.0.0.1:${port}`));
dbConfig();

export default app;
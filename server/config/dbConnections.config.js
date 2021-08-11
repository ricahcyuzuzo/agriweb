import mongoose from 'mongoose';

const mongoConnect = () => {
    mongoose.connect(`mongodb://a78776c4adb7d1da05a68376ac6bff10:${encodeURIComponent('Betterlife123!')}@11a.mongo.evennode.com:27018,11b.mongo.evennode.com:27018/a78776c4adb7d1da05a68376ac6bff10?replicaSet=eu-11`, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    mongoose.connection
        .once('open', () => console.log('Database Connected :-)'))
        .on('error', (error) => {
            console.log('Error ', error);
        });
}

export default mongoConnect;

const MongoClient = require('mongodb').MongoClient;

let mongoDB;

const setupDB = (callback) => {
    const uri = process.env.MONGODB_URI;

    MongoClient.connect(
        uri,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (err, client) => {
            mongoDB = client.db('full-stack-server');

            if (err) {
                return callback(err);
            } else {
                return callback('DB OK');
            }
        }
    )
};

const getDB = () => mongoDB;

module.exports = {
    setupDB,
    getDB
};
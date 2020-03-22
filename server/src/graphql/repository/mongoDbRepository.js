const { ObjectId } = require('mongodb');
const { getDB } = require('../../config/databaseConnection');

// connect to database, expose APIs
module.exports = class MongoDbRepo {
    constructor(collectionName) {
        this.collection = getDB().collection(collectionName);
    }

    getAll() {
        return new Promise((resolve, reject) => {
            this.collection.find({}).toArray((err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            })
        });
    }

    getById(_id) {
        return new Promise((resolve, reject) => {
            this.collection.findOne({ _id: ObjectId(_id) }, (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    }
}

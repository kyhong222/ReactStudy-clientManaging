const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema
const Client = new Schema({
    id: Number,
    name: String,
    birthday: String,
    gender: String,
    job: String
})

Client.statics.create = function(id, name, birthday, gender, job)
{
    const client = new this({
        id,
        name,
        birthday,
        gender,
        job
    });
    return client.save();
};

Client.statics.findOne = function(id){
    return this.findOne({
        id
    }).exec();
}

module.exports = mongoose.model('Client', Client);
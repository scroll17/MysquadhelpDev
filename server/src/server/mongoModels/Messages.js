const mongoose = require("mongoose");

const MessageModel = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    content: {
        type: String,
        required: true,
        minLength: 1,
    },
    authorId: {
        type: Number,
        required: true,
    },
    chatId: {
        type: Number,
        ref: 'Chat',
        required: true,
    }
},{
    autoIndex: true,
    versionKey: false,
    collection: 'MessageCollection'
});


module.exports = mongoose.model('MessageModel', MessageModel);




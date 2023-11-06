const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
    anncmnt_title: {
        type: String,
        required: true,
    },
    anncmnt_description: {
        type:String,
        required: true
    },
    image:{
        type: String,
    },
    anncmnt_date: {
        type: Date,
        default: Date.now(),
        required: true
    },
    anncmnt_publisher: {
        type: String
        //type: mongoose.Schema.Types.ObjectId,
        // ref: 'User',
        // required: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('Announcements', announcementSchema)
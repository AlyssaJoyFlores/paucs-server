const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    school_id: {

    },
    school_email: {

    },
    password: {
        type: String,
        required: true
    },
    school_campus: {
        type: String,
        enum: ['main', 'south', 'san jose'],
        default: 'south',
        required: true
    },
    college_dept: {
        type: String,
        enum: ['CITE', 'CMA', 'CCJE', 'CAS', 'SHS'],
        required: true
    },
    full_name: {
        type: String,
        required: true
    },
    course: {
        type: String,
        enum: ['BSIT', 'BSEE', 'BSCE', 'BSCRIM', 'BSBA', 'BSA', 'BSED', 'ABM', 'HUMMS'],
        required: true
    },
    year: {
        type: String,
        enum: ['GR 11','GR 12','1ST YR', '2ND YR', '3RD YR', '4TH YR'],
        required: true
    },
    section: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ['female', 'male'],
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    },
    address: {
        type: String,
        required: true
    }
}, {
    timeStamps:true
})

module.exports = mongoose.model('Student', studentSchema);
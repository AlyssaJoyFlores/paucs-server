const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name: {
        type: String
    },
    college_dept: {
        type: String,
        enum: ['Finance Department', 'Business Center'],
        default: 'Finance Department'
    },
    email: {
        type: String,
        required: [true, 'Provide email address']
    },
    password: {
        type: String,
        required: [true, 'Provide password']
    }
},{
    timeStamps: true
})


module.exports = mongoose.model('Admin', adminSchema);
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/university');

const notifications = new mongoose.Schema({

    Sl_No: { type : Number },
    Owner: { type : String },
    Notification: { type : String }
   
});

module.exports = mongoose.model('notification',notifications)

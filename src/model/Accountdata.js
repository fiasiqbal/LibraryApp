const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String
});

var Accountdata = mongoose.model('accountdata',AccountSchema);

module.exports = Accountdata;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 characters long'],
        },
        lastname: {
            type: String,
            minlength: [3, 'Last name must be at least 3 characters long'],
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true,
        Select: false
    },
    socketID: {
        type: String
    }
})

userSchema.methods.generateAuthToken = function () {
    const  token =jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
    return token;       
}

userSchema.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
}

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, salt);
}   

const userModel = mongoose.model('user', userSchema);
module.exports = userModel; 
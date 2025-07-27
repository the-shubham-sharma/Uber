const userModel = require('../models/user.models');


module.exports.createUser = async function({ firstname, email, password, lastname }) {
    if(!firstname || !email || !password){
        throw new Error('Please provide all required fields');
    }
    const user = userModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password   
    })
    return user;
}
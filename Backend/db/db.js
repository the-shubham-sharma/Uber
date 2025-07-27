const mongoose = require('mongoose');

function connectToDB() {
    mongoose.connect(process.env.DB_CONNECT)
        .then(() => {
            console.log('Connected to db');
        })
        .catch((error) => {
            console.error('Error connecting to db:', error);
        });
}

module.exports = connectToDB;

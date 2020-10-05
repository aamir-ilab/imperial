var mongoose = require('mongoose');

module.exports = async() => {
    // return mongoose.connect('mongodb+srv://xxxxxxxxx/xxxx', { useNewUrlParser: true, useUnifiedTopology: true })
    return mongoose.connect('mongodb+srv://pixify:BHtw6eyV9buRlkxK@@imperialrecruitment.afyiy.mongodb.net', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("MongoDB successfully connected"))
        .catch(err => console.log(err));
};
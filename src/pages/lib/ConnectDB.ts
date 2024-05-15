const mongoose = require('mongoose');

const connectDB = () => {
    try {
        mongoose.connect(process.env.DATABASE_URL);
        console.log('MongoDB connected');
    } catch (err : any) {
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;
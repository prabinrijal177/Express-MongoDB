const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://admin:admin@cluster0.vgszofy.mongodb.net/mycontacts-backend?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const connectDb = async()=>{
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database connection established:", connect.connection.host, connect.connection.name);

    } catch (error) {
        console.log(error);
        process.exit(1);

    }
};
module.exports = connectDb;